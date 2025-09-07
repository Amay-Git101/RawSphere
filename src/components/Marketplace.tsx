import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ShoppingCart, Eye, Filter, Search } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Listing, User } from '../App';

interface MarketplaceProps {
  listings: Listing[];
  user: User;
}

export function Marketplace({ listings, user }: MarketplaceProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || listing.category === categoryFilter;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'expiry':
        return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleBuy = (listing: Listing) => {
    toast.success(`Added ${listing.name} to cart!`);
  };

  const handleViewDetails = (listing: Listing) => {
    toast.info(`Viewing details for ${listing.name}`);
  };

  const formatExpiryDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 90) {
      return { text: date.toLocaleDateString(), urgent: true };
    }
    return { text: date.toLocaleDateString(), urgent: false };
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Marketplace</h1>
          <p className="text-gray-600 mt-1">
            {user.userType === 'buyer' 
              ? 'Discover surplus materials from verified suppliers' 
              : 'View marketplace and manage your listings'
            }
          </p>
        </div>
        <Button 
          variant="outline"
          onClick={() => setViewMode(viewMode === 'grid' ? 'table' : 'grid')}
        >
          {viewMode === 'grid' ? 'Table View' : 'Grid View'}
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search materials or suppliers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="APIs">APIs</SelectItem>
                <SelectItem value="Excipients">Excipients</SelectItem>
                <SelectItem value="Packaging">Packaging</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="expiry">Expiry Date</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredListings.length} of {listings.length} listings
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Total Value:</span>
          <span className="text-lg font-semibold text-green-600">
            ₹{filteredListings.reduce((sum, listing) => sum + listing.price, 0).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Listings Grid/Table */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => {
            const expiry = formatExpiryDate(listing.expiryDate);
            return (
              <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{listing.category}</Badge>
                    {expiry.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        Expires Soon
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{listing.name}</CardTitle>
                  <CardDescription>{listing.seller}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <span className="text-sm font-medium">{listing.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Expires:</span>
                      <span className={`text-sm font-medium ${expiry.urgent ? 'text-red-600' : ''}`}>
                        {expiry.text}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Price:</span>
                      <span className="text-lg font-bold text-green-600">
                        ₹{listing.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                      onClick={() => handleBuy(listing)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleViewDetails(listing)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium">Material</th>
                    <th className="text-left p-4 font-medium">Supplier</th>
                    <th className="text-left p-4 font-medium">Category</th>
                    <th className="text-left p-4 font-medium">Quantity</th>
                    <th className="text-left p-4 font-medium">Expiry</th>
                    <th className="text-left p-4 font-medium">Price</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredListings.map((listing) => {
                    const expiry = formatExpiryDate(listing.expiryDate);
                    return (
                      <tr key={listing.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div>
                            <div className="font-medium">{listing.name}</div>
                            {expiry.urgent && (
                              <Badge variant="destructive" className="text-xs mt-1">
                                Expires Soon
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-gray-600">{listing.seller}</td>
                        <td className="p-4">
                          <Badge variant="secondary">{listing.category}</Badge>
                        </td>
                        <td className="p-4">{listing.quantity}</td>
                        <td className={`p-4 ${expiry.urgent ? 'text-red-600' : ''}`}>
                          {expiry.text}
                        </td>
                        <td className="p-4 font-bold text-green-600">
                          ₹{listing.price.toLocaleString()}
                        </td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <Button 
                              size="sm"
                              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                              onClick={() => handleBuy(listing)}
                            >
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Buy
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleViewDetails(listing)}
                            >
                              <Eye className="w-3 h-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {filteredListings.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500">No listings found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}