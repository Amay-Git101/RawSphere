import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useEffect, useRef, useState } from 'react';
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
    stat: '₹2.5Cr+',
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

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

// Animation styles as objects
const animationStyles = {
  slideInUp: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: 'all 0.8s ease-out'
  },
  slideInUpHidden: {
    transform: 'translateY(50px)',
    opacity: 0,
    transition: 'all 0.8s ease-out'
  },
  fadeInUp: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: 'all 0.6s ease-out'
  },
  fadeInUpHidden: {
    transform: 'translateY(30px)',
    opacity: 0,
    transition: 'all 0.6s ease-out'
  },
  scaleIn: {
    transform: 'scale(1) translateY(0px)',
    opacity: 1,
    transition: 'all 0.7s ease-out'
  },
  scaleInHidden: {
    transform: 'scale(0.8) translateY(30px)',
    opacity: 0,
    transition: 'all 0.7s ease-out'
  },
  slideInLeft: {
    transform: 'translateX(0px)',
    opacity: 1,
    transition: 'all 0.8s ease-out'
  },
  slideInLeftHidden: {
    transform: 'translateX(-50px)',
    opacity: 0,
    transition: 'all 0.8s ease-out'
  },
  slideInRight: {
    transform: 'translateX(0px)',
    opacity: 1,
    transition: 'all 0.8s ease-out'
  },
  slideInRightHidden: {
    transform: 'translateX(50px)',
    opacity: 0,
    transition: 'all 0.8s ease-out'
  },
  countUp: {
    transform: 'translateY(0px) scale(1)',
    opacity: 1,
    transition: 'all 0.8s ease-out'
  },
  countUpHidden: {
    transform: 'translateY(20px) scale(0.8)',
    opacity: 0,
    transition: 'all 0.8s ease-out'
  }
};

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [stepsRef, stepsVisible] = useScrollAnimation(0.1);
  const [impactRef, impactVisible] = useScrollAnimation(0.1);
  const [demoRef, demoVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50" 
           style={{
             ...animationStyles.fadeInUp,
             animationDelay: '0ms'
           }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">RawSphere</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                onClick={() => onGetStarted('buyer')}
                className="text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
              >
                <span className="hidden sm:inline">Login as </span>Buyer
              </Button>
              <Button
                onClick={() => onGetStarted('seller')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
              >
                <span className="hidden sm:inline">Login as </span>Seller
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs sm:text-sm"
                   style={{
                     ...(heroVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden),
                     transitionDelay: '200ms'
                   }}>
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Supply Chain Innovation
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                style={{
                  ...(heroVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden),
                  transitionDelay: '400ms'
                }}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RawSphere
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto px-4"
               style={{
                 ...(heroVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden),
                 transitionDelay: '600ms'
               }}>
              AI-Powered Supply Chain Marketplace for Pharma
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto px-4"
               style={{
                 ...(heroVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden),
                 transitionDelay: '800ms'
               }}>
              Turn surplus into revenue. Reduce waste. Build sustainability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                 style={{
                   ...(heroVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden),
                   transitionDelay: '1000ms'
                 }}>
              <Button
                size="lg"
                onClick={() => onGetStarted('buyer')}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-transform duration-200"
              >
                <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Login as Buyer
              </Button>
              <Button
                size="lg"
                onClick={() => onGetStarted('seller')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-transform duration-200"
              >
                <Package className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Login as Seller
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-32 sm:w-72 h-32 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-32 sm:w-72 h-32 sm:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-20 bg-white" ref={stepsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16"
               style={stepsVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How RawSphere Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Simple 4-step process to transform pharmaceutical waste into valuable resources
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    ...(stepsVisible ? animationStyles.scaleIn : animationStyles.scaleInHidden),
                    transitionDelay: `${(index + 1) * 200}ms`
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 sm:w-16 h-12 sm:h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm sm:text-base">
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
      <section className="py-12 sm:py-20 bg-gray-50" ref={impactRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16"
               style={impactVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Real results from pharmaceutical companies using RawSphere
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactStats.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    ...(impactVisible ? animationStyles.countUp : animationStyles.countUpHidden),
                    transitionDelay: `${(index + 1) * 200}ms`
                  }}
                >
                  <CardContent className="pt-4 sm:pt-6">
                    <div className={`w-12 sm:w-16 h-12 sm:h-16 ${impact.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                      <Icon className={`w-6 sm:w-8 h-6 sm:h-8 ${impact.color}`} />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-bold ${impact.color} mb-2`}>
                      {impact.stat}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 px-2">{impact.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-20 bg-white" ref={demoRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div style={{
              ...(demoVisible ? animationStyles.slideInLeft : animationStyles.slideInLeftHidden),
              transitionDuration: '1000ms'
            }}>
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
                  <div 
                    key={index} 
                    className="flex items-center space-x-3"
                    style={{
                      ...(demoVisible ? animationStyles.slideInLeft : animationStyles.slideInLeftHidden),
                      transitionDelay: `${(index + 2) * 100}ms`
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                onClick={() => onGetStarted('seller')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-transform duration-200"
                style={{
                  ...(demoVisible ? animationStyles.slideInLeft : animationStyles.slideInLeftHidden),
                  transitionDelay: '800ms'
                }}
              >
                Try the Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative"
                 style={{
                   ...(demoVisible ? animationStyles.slideInRight : animationStyles.slideInRightHidden),
                   transitionDelay: '300ms',
                   transitionDuration: '1000ms'
                 }}>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-700">AI Dashboard Preview</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-200">
                      <div className="text-2xl font-bold text-green-600">₹43.5K</div>
                      <div className="text-sm text-gray-600">Surplus Predicted</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-200">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-600">Active Listings</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Paracetamol Base</span>
                      <Badge className="bg-red-100 text-red-700">High Demand</Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      +18% demand increase • 5 companies looking
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-200">
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <Target className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
             style={ctaVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Circular Economy
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-4">
            Be Part of RawSphere's Mission to Transform Pharmaceutical Waste into Value
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
               style={{
                 ...(ctaVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden),
                 transitionDelay: '400ms'
               }}>
            <Button
              size="lg"
              onClick={() => onGetStarted('buyer')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-transform duration-200"
            >
              <Users className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Join as Buyer
            </Button>
            <Button
              size="lg"
              onClick={() => onGetStarted('seller')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-transform duration-200"
            >
              <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Join as Seller
            </Button>
          </div>
          
          <p className="text-blue-200 mt-4 sm:mt-6 text-xs sm:text-sm px-4"
             style={{
               ...(ctaVisible ? animationStyles.fadeInUp : animationStyles.fadeInUpHidden),
               transitionDelay: '600ms'
             }}>
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