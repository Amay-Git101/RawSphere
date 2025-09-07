import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Download,
  Leaf,
  DollarSign,
  Package,
  ShoppingCart,
  Target,
  Users,
  Clock,
  Star
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { User } from '../App';

interface BuyerAnalyticsProps {
  user: User;
}

const purchaseTrendData = [
  { month: 'Jan', spent: 12000, saved: 2400, orders: 8 },
  { month: 'Feb', spent: 15000, saved: 3200, orders: 10 },
  { month: 'Mar', spent: 18000, saved: 4100, orders: 12 },
  { month: 'Apr', spent: 22000, saved: 5200, orders: 15 },
  { month: 'May', spent: 19000, saved: 4800, orders: 13 },
  { month: 'Jun', spent: 25000, saved: 6500, orders: 18 },
  { month: 'Jul', spent: 23000, saved: 6100, orders: 16 },
  { month: 'Aug', spent: 28000, saved: 7300, orders: 20 },
  { month: 'Sep', spent: 26000, saved: 6900, orders: 19 },
  { month: 'Oct', spent: 31000, saved: 8200, orders: 22 },
  { month: 'Nov', spent: 29000, saved: 7800, orders: 21 },
  { month: 'Dec', spent: 33000, saved: 8900, orders: 24 }
];

const sustainabilityBreakdown = [
  { name: 'Sustainable Purchases', value: 78, color: '#10B981' },
  { name: 'Traditional Purchases', value: 22, color: '#9CA3AF' }
];

const categorySpending = [
  { 
    category: 'APIs', 
    spent: 186000, 
    orders: 85, 
    avgSavings: '32%',
    sustainability: 85
  },
  { 
    category: 'Excipients', 
    spent: 124000, 
    orders: 62, 
    avgSavings: '28%',
    sustainability: 76
  },
  { 
    category: 'Packaging', 
    spent: 89000, 
    orders: 45, 
    avgSavings: '41%',
    sustainability: 92
  },
  { 
    category: 'Equipment', 
    spent: 156000, 
    orders: 18, 
    avgSavings: '35%',
    sustainability: 68
  }
];

const supplierPerformance = [
  { supplier: 'PharmaCorp Ltd', orders: 28, avgDelivery: 3, rating: 4.9, savings: 15200 },
  { supplier: 'Global Pharma Inc', orders: 22, avgDelivery: 4, rating: 4.7, savings: 12800 },
  { supplier: 'MedSupply Co', orders: 18, avgDelivery: 2, rating: 4.8, savings: 9600 },
  { supplier: 'BioTech Solutions', orders: 15, avgDelivery: 5, rating: 4.6, savings: 8100 },
  { supplier: 'Ingredient Masters', orders: 12, avgDelivery: 3, rating: 4.5, savings: 6900 }
];

const costSavingsAnalysis = [
  { comparison: 'Market Price', value: 285000, color: '#EF4444' },
  { comparison: 'Marketplace Price', value: 198000, color: '#10B981' },
  { comparison: 'Savings', value: 87000, color: '#3B82F6' }
];

const reorderFrequency = [
  { material: 'Paracetamol Base', frequency: 'Monthly', lastOrder: '2024-12-15', nextExpected: '2025-01-15' },
  { material: 'Vitamin C Powder', frequency: 'Bi-weekly', lastOrder: '2024-12-10', nextExpected: '2024-12-24' },
  { material: 'Ibuprofen API', frequency: 'Quarterly', lastOrder: '2024-11-20', nextExpected: '2025-02-20' },
  { material: 'Lactose Monohydrate', frequency: 'Monthly', lastOrder: '2024-12-05', nextExpected: '2025-01-05' }
];

export function BuyerAnalytics({ user }: BuyerAnalyticsProps) {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Buyer Analytics</h1>
          <p className="text-gray-600 mt-1">Track your procurement performance and sustainability impact</p>
          <div className="flex items-center mt-2 space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Leaf className="w-3 h-3 mr-1" />
              78% Sustainable
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              Premium Buyer
            </Badge>
          </div>
        </div>
        <div className="flex space-x-3">
          <Select defaultValue="12m">
            <SelectTrigger className="w-32">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="12m">Last 12 Months</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₹3,12,000</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +18.2% from last year
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <TrendingDown className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹87,000</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              35% vs market price
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders Placed</CardTitle>
            <ShoppingCart className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">210</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +25.3% from last year
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Delivery Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">3.2 Days</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingDown className="w-3 h-3 mr-1" />
              -0.8 days improvement
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Purchase Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Purchase Trends & Savings</CardTitle>
          <CardDescription>
            Monthly spending, savings, and order volume analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={purchaseTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'orders') return [value, 'Orders'];
                  return [`₹${value.toLocaleString()}`, name === 'spent' ? 'Amount Spent' : 'Money Saved'];
                }} />
                <Line 
                  type="monotone" 
                  dataKey="spent" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  name="spent"
                />
                <Line 
                  type="monotone" 
                  dataKey="saved" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="saved"
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  yAxisId="right"
                  name="orders"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sustainability Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="w-4 h-4 mr-2 text-green-600" />
              Sustainability Impact
            </CardTitle>
            <CardDescription>
              Your contribution to pharmaceutical waste reduction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center">
              <ResponsiveContainer width="50%" height="100%">
                <PieChart>
                  <Pie
                    data={sustainabilityBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {sustainabilityBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 pl-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">78%</div>
                    <p className="text-sm text-gray-600">Sustainable Purchases</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-semibold text-green-700">24.6 Tons</div>
                    <p className="text-xs text-gray-600">Materials saved from waste</p>
                  </div>
                  <Badge className="w-full justify-center bg-green-100 text-green-700">
                    <Leaf className="w-3 h-3 mr-1" />
                    Eco Champion Status
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Savings Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Savings Analysis</CardTitle>
            <CardDescription>
              Comparison with traditional market pricing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costSavingsAnalysis} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="comparison" type="category" width={100} />
                  <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
                  <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Your Savings Rate:</span>
                <Badge className="bg-blue-600 text-white">30.5%</Badge>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                You're saving 30.5% compared to traditional market prices through sustainable procurement
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Category Performance</CardTitle>
          <CardDescription>
            Spending breakdown and sustainability metrics by category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categorySpending.map((category) => (
              <div key={category.category} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">{category.category}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{category.orders} orders</Badge>
                    <Badge className="bg-green-100 text-green-700">
                      {category.avgSavings} saved
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Total Spent:</span>
                    <div className="font-bold text-blue-600">
                      ₹{category.spent.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Avg. Savings:</span>
                    <div className="font-bold text-green-600">
                      {category.avgSavings}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Sustainability:</span>
                    <div className="flex items-center">
                      <div className="font-bold text-green-600">{category.sustainability}%</div>
                      <Leaf className="w-3 h-3 ml-1 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Supplier Performance & Reorder Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Suppliers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Top Suppliers Performance
            </CardTitle>
            <CardDescription>
              Your most trusted pharmaceutical suppliers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {supplierPerformance.slice(0, 4).map((supplier, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{supplier.supplier}</h4>
                    <p className="text-sm text-gray-600">
                      {supplier.orders} orders • {supplier.avgDelivery} days avg delivery
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{supplier.rating}</span>
                    </div>
                    <div className="text-sm text-green-600">
                      ₹{supplier.savings.toLocaleString()} saved
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reorder Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Reorder Pattern Analysis
            </CardTitle>
            <CardDescription>
              Your regular purchasing patterns and predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reorderFrequency.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{item.material}</h4>
                    <p className="text-sm text-gray-600">
                      Orders {item.frequency.toLowerCase()} • Last: {item.lastOrder}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      Next: {item.nextExpected}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700">
                <Target className="w-4 h-4 inline mr-1" />
                <strong>Smart Suggestion:</strong> Based on your patterns, consider setting up 
                auto-reorder alerts for Vitamin C Powder (due in 2 weeks).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Your Procurement Impact</CardTitle>
          <CardDescription>
            Summary of your sustainable procurement achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="text-xl font-bold text-green-600">24.6 Tons</div>
              <div className="text-sm text-gray-600">Materials Saved</div>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div className="text-xl font-bold text-blue-600">₹87K</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div className="text-xl font-bold text-purple-600">210</div>
              <div className="text-sm text-gray-600">Orders Placed</div>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="text-xl font-bold text-orange-600">4.8</div>
              <div className="text-sm text-gray-600">Avg Rating Given</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
