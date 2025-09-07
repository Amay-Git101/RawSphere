import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Upload, FileText, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Listing } from '../App';

interface AddListingProps {
  onAddListing: (listing: Omit<Listing, 'id' | 'seller'>) => void;
}

export function AddListing({ onAddListing }: AddListingProps) {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    expiryDate: '',
    price: '',
    category: '',
    description: '',
    complianceCert: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.quantity || !formData.expiryDate || !formData.price || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const listing: Omit<Listing, 'id' | 'seller'> = {
      name: formData.name,
      quantity: formData.quantity,
      expiryDate: formData.expiryDate,
      price: parseFloat(formData.price),
      category: formData.category,
      complianceCert: formData.complianceCert || undefined
    };

    onAddListing(listing);
    toast.success('Listing created successfully!');
    
    // Reset form
    setFormData({
      name: '',
      quantity: '',
      expiryDate: '',
      price: '',
      category: '',
      description: '',
      complianceCert: ''
    });
    
    setIsSubmitting(false);
  };

  const handleFileUpload = () => {
    // Simulate file upload
    const fileName = `compliance_cert_${Date.now()}.pdf`;
    setFormData(prev => ({ ...prev, complianceCert: fileName }));
    toast.success('Compliance certificate uploaded successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Add New Listing</h1>
        <p className="text-gray-600 mt-1">List your surplus materials on the marketplace</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Material Details</CardTitle>
              <CardDescription>
                Provide accurate information about your surplus material
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Material Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Paracetamol Base"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => handleInputChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="APIs">Active Pharmaceutical Ingredients (APIs)</SelectItem>
                        <SelectItem value="Excipients">Excipients</SelectItem>
                        <SelectItem value="Packaging">Packaging Materials</SelectItem>
                        <SelectItem value="Equipment">Equipment</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., 25kg, 10,000 units"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (USD) *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="5000"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input
                    id="expiryDate"
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Additional information about the material, storage conditions, etc."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Compliance Certificate</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    {formData.complianceCert ? (
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span>Certificate uploaded: {formData.complianceCert}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                        <div>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={handleFileUpload}
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Upload Certificate
                          </Button>
                          <p className="text-sm text-gray-500 mt-1">
                            PDF files up to 10MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                  >
                    {isSubmitting ? 'Creating Listing...' : 'Create Listing'}
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>How your listing will appear</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="font-medium text-lg">
                  {formData.name || 'Material Name'}
                </div>
                {formData.category && (
                  <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                    {formData.category}
                  </div>
                )}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span>{formData.quantity || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expires:</span>
                    <span>{formData.expiryDate || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-green-600">
                      {formData.price ? `$${parseFloat(formData.price).toLocaleString()}` : '-'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Listing Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Use clear, descriptive names for better visibility</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Include compliance certificates to build trust</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Competitive pricing increases sale likelihood</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Materials expiring soon get priority placement</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}