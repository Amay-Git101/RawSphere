import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Brain, 
  Package, 
  Shield, 
  ShoppingCart, 
  Recycle, 
  DollarSign, 
  Globe, 
  Lock,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: (userType: 'seller' | 'buyer') => void;
}

const steps = [
  {
    icon: Brain,
    title: 'Predict',
    description: 'AI forecasts unused raw materials',
    color: 'bg-purple-500'
  },
  {
    icon: Package,
    title: 'List',
    description: 'Sellers upload surplus stock to marketplace',
    color: 'bg-blue-500'
  },
  {
    icon: Shield,
    title: 'Verify',
    description: 'Compliance & quality checks',
    color: 'bg-green-500'
  },
  {
    icon: ShoppingCart,
    title: 'Buy & Save',
    description: 'Buyers purchase materials at optimized prices',
    color: 'bg-orange-500'
  }
];

const impactStats = [
  {
    icon: Recycle,
    stat: '20-30%',
    label: 'Waste Reduction',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: DollarSign,
    stat: '₹2.5M+',
    label: 'New Revenue from Surplus',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Globe,
    stat: '500+',
    label: 'Companies Supporting Sustainability',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Lock,
    stat: '100%',
    label: 'Blockchain-Backed Transparency',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

const features = [
  'AI-powered surplus prediction',
  'Real-time market demand insights',
  'Compliance verification system',
  'Sustainable supply chain analytics',
  'Secure blockchain transactions',
  'Global pharmaceutical network'
];

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">RawSphere</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => onGetStarted('buyer')}>
                Login as Buyer
              </Button>
              <Button onClick={() => onGetStarted('seller')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Login as Seller
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Supply Chain Innovation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RawSphere
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              AI-Powered Supply Chain Marketplace for Pharma
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Turn surplus into revenue. Reduce waste. Build sustainability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => onGetStarted('buyer')}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Login as Buyer
              </Button>
              <Button 
                size="lg" 
                onClick={() => onGetStarted('seller')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <Package className="w-5 h-5 mr-2" />
                Login as Seller
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-150"></div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How RawSphere Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to transform pharmaceutical waste into valuable resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from pharmaceutical companies using RawSphere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 ${impact.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${impact.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${impact.color} mb-2`}>
                      {impact.stat}
                    </div>
                    <p className="text-gray-600">{impact.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
                <Brain className="w-3 h-3 mr-1" />
                AI-Powered Intelligence
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See how AI predicts surplus and connects buyers with sellers
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced AI algorithms analyze historical data, market trends, and inventory patterns to predict pharmaceutical surplus with 95% accuracy.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                onClick={() => onGetStarted('seller')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Try the Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-700">AI Dashboard Preview</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">₹43.5K</div>
                      <div className="text-sm text-gray-600">Surplus Predicted</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-600">Active Listings</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Paracetamol Base</span>
                      <Badge className="bg-red-100 text-red-700">High Demand</Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      +18% demand increase • 5 companies looking
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">AI Buyer Match</div>
                        <div className="text-sm text-gray-600">MedCorp Industries</div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">95% match</Badge>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Circular Economy
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be Part of RawSphere's Mission to Transform Pharmaceutical Waste into Value
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => onGetStarted('buyer')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Join as Buyer
            </Button>
            <Button 
              size="lg" 
              onClick={() => onGetStarted('seller')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Join as Seller
            </Button>
          </div>
          
          <p className="text-blue-200 mt-6 text-sm">
            Already have an account? Click above to sign in and continue your sustainable journey.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RawSphere</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transforming pharmaceutical supply chains through AI-powered surplus management and sustainable marketplace solutions.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  Blockchain Secure
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  Sustainable
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Platform</h3>
              <div className="space-y-2">
                <p className="text-gray-400">For Sellers</p>
                <p className="text-gray-400">For Buyers</p>
                <p className="text-gray-400">AI Analytics</p>
                <p className="text-gray-400">Compliance</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Impact</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Waste Reduction</p>
                <p className="text-gray-400">Revenue Recovery</p>
                <p className="text-gray-400">Sustainability</p>
                <p className="text-gray-400">Global Network</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 RawSphere. Building the future of pharmaceutical supply chains.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}