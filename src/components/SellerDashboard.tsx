import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { 
  DollarSign, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  Calendar,
  Users,
  Plus,
  Brain,
  Target,
  Zap,
  ArrowRight,
  TrendingDown,
  ShoppingCart
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { User } from '../App';

interface SellerDashboardProps {
  user: User;
}

const surplusForecastData = [
  { month: 'Jan', value: 45000, predicted: true },
  { month: 'Feb', value: 52000, predicted: true },
  { month: 'Mar', value: 48000, predicted: true },
  { month: 'Apr', value: 61000, predicted: false },
  { month: 'May', value: 55000, predicted: false },
  { month: 'Jun', value: 67000, predicted: false }
];

const demandInsights = [
  { material: 'Paracetamol Base', demand: 'High', change: '+18%', urgency: 'high' },
  { material: 'Ibuprofen API', demand: 'Rising', change: '+12%', urgency: 'medium' },
  { material: 'Vitamin C', demand: 'Stable', change: '+3%', urgency: 'low' },
  { material: 'Lactose', demand: 'Declining', change: '-8%', urgency: 'low' }
];

const priceOptimizations = [
  { material: 'Gelatin Capsules', currentPrice: 3400, suggestedPrice: 3200, improvement: '+20%' },
  { material: 'Vitamin C Powder', currentPrice: 1800, suggestedPrice: 1950, improvement: '+15%' },
  { material: 'Lactose Monohydrate', currentPrice: 4200, suggestedPrice: 3900, improvement: '+25%' }
];

const buyerMatches = [
  { company: 'MedCorp Industries', interest: 'Ibuprofen API', score: 95, history: '8 purchases' },
  { company: 'Global Health Ltd', interest: 'Vitamin C Powder', score: 89, history: '5 purchases' },
  { company: 'PharmaPlus Co', interest: 'Paracetamol Base', score: 82, history: '12 purchases' }
];

const inventoryRisk = [
  { name: 'High Risk', value: 8, color: '#EF4444' },
  { name: 'Medium Risk', value: 15, color: '#F59E0B' },
  { name: 'Low Risk', value: 42, color: '#10B981' }
];

export function SellerDashboard({ user }: SellerDashboardProps) {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600 mt-1">AI-Powered Insights for {user.name}</p>
          <div className="flex items-center mt-2 space-x-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <Brain className="w-3 h-3 mr-1" />
              AI Analytics Active
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Seller Pro
            </Badge>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 days
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Brain className="w-4 h-4 mr-2" />
            AI Insights
          </Button>
        </div>
      </div>

      {/* Key Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue Earned</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹8,47,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
            <Package className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5</span> added this week
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock at Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">8 Items</div>
            <p className="text-xs text-muted-foreground">
              Expiring within 30 days
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Surplus Predicted</CardTitle>
            <Brain className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">₹43,500</div>
            <p className="text-xs text-muted-foreground">
              Next quarter forecast
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Analytics Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center text-xl">
                <Brain className="w-5 h-5 mr-2 text-blue-600" />
                AI Analytics Hub
              </CardTitle>
              <CardDescription>
                Intelligence-driven insights to maximize your pharmaceutical surplus value
              </CardDescription>
            </div>
            <Badge className="bg-blue-600 text-white">
              <Zap className="w-3 h-3 mr-1" />
              Live
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Surplus Forecast */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Surplus Forecast
                </CardTitle>
                <CardDescription>
                  AI prediction of materials with low usage probability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={surplusForecastData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Predicted Surplus']} />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3B82F6" 
                        strokeWidth={2}
                        dot={{ fill: '#3B82F6', r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  List Predicted Surplus Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Inventory Risk Analysis
                </CardTitle>
                <CardDescription>
                  Stock expiry risk assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={inventoryRisk}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {inventoryRisk.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  {inventoryRisk.map((item) => (
                    <div key={item.name} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Demand Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Market Demand Insights
              </CardTitle>
              <CardDescription>
                Real-time demand analysis for your materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {demandInsights.map((insight, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        insight.urgency === 'high' ? 'bg-red-500' :
                        insight.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <span className="font-medium">{insight.material}</span>
                      <Badge variant={insight.urgency === 'high' ? 'destructive' : 'secondary'}>
                        {insight.demand}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium ${
                        insight.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {insight.change}
                      </span>
                      <Button size="sm" variant="outline">
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price Optimization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Price Optimization
              </CardTitle>
              <CardDescription>
                AI-suggested pricing to improve selling probability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {priceOptimizations.map((opt, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <h4 className="font-medium">{opt.material}</h4>
                      <p className="text-sm text-gray-600">
                        Current: ₹{opt.currentPrice.toLocaleString()} → Suggested: ₹{opt.suggestedPrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-600 text-white">
                        {opt.improvement} better chance
                      </Badge>
                      <Button size="sm" className="ml-2 bg-green-600 hover:bg-green-700">
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Buyer Matching */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                AI Buyer Matching
              </CardTitle>
              <CardDescription>
                Potential buyers based on purchase history and needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {buyerMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <h4 className="font-medium">{match.company}</h4>
                      <p className="text-sm text-gray-600">
                        Interested in: {match.interest} • {match.history}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-600 text-white">
                        {match.score}% match
                      </Badge>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <ShoppingCart className="w-3 h-3 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Quick Actions for Sellers */}
      <Card>
        <CardHeader>
          <CardTitle>Seller Actions</CardTitle>
          <CardDescription>
            Manage your pharmaceutical surplus efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col space-y-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <Plus className="w-6 h-6" />
              <span>Add New Listing</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Package className="w-6 h-6" />
              <span>Manage Inventory</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <TrendingUp className="w-6 h-6" />
              <span>Sales Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Brain className="w-6 h-6" />
              <span>AI Recommendations</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}