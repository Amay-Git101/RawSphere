import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Download,
  Recycle,
  DollarSign,
  Package,
  Brain,
  Target,
  Users,
  AlertTriangle
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

interface SellerAnalyticsProps {
  user: User;
}

const revenueData = [
  { month: 'Jan', revenue: 18500, predictedSurplus: 4200 },
  { month: 'Feb', revenue: 22000, predictedSurplus: 5100 },
  { month: 'Mar', revenue: 19800, predictedSurplus: 4800 },
  { month: 'Apr', revenue: 26700, predictedSurplus: 6200 },
  { month: 'May', revenue: 24500, predictedSurplus: 5900 },
  { month: 'Jun', revenue: 31200, predictedSurplus: 7400 },
  { month: 'Jul', revenue: 28900, predictedSurplus: 6950 },
  { month: 'Aug', revenue: 34500, predictedSurplus: 8100 },
  { month: 'Sep', revenue: 32100, predictedSurplus: 7650 },
  { month: 'Oct', revenue: 38700, predictedSurplus: 9200 },
  { month: 'Nov', revenue: 41200, predictedSurplus: 9800 },
  { month: 'Dec', revenue: 45800, predictedSurplus: 10900 }
];

const stockPerformance = [
  { category: 'Sold (High Demand)', value: 62, color: '#10B981' },
  { category: 'Sold (Normal)', value: 23, color: '#3B82F6' },
  { category: 'At Risk (Expiring)', value: 8, color: '#F59E0B' },
  { category: 'Expired/Waste', value: 7, color: '#EF4444' }
];

const aiInsights = [
  {
    type: 'opportunity',
    title: 'High Demand Alert',
    message: 'Paracetamol Base demand increased 23% this month. Consider raising prices.',
    urgency: 'high',
    potentialValue: 12500
  },
  {
    type: 'warning',
    title: 'Surplus Risk',
    message: '5 Vitamin C batches show low selling probability. List at discount soon.',
    urgency: 'medium',
    potentialValue: -8900
  },
  {
    type: 'success',
    title: 'Optimal Pricing',
    message: 'Your Ibuprofen API prices are 15% above market average with 90% sell rate.',
    urgency: 'low',
    potentialValue: 15600
  }
];

const categoryPerformance = [
  { 
    category: 'APIs', 
    sold: 45, 
    revenue: 156000, 
    avgPrice: 3467,
    aiPrediction: '+18%',
    trend: 'up'
  },
  { 
    category: 'Excipients', 
    sold: 32, 
    revenue: 89500, 
    avgPrice: 2797,
    aiPrediction: '+8%',
    trend: 'up'
  },
  { 
    category: 'Packaging', 
    sold: 18, 
    revenue: 34200, 
    avgPrice: 1900,
    aiPrediction: '-5%',
    trend: 'down'
  },
  { 
    category: 'Equipment', 
    sold: 5, 
    revenue: 28900, 
    avgPrice: 5780,
    aiPrediction: '+12%',
    trend: 'up'
  }
];

const sellingTimeAnalysis = [
  { material: 'Paracetamol Base', avgDays: 3, closeRate: 95 },
  { material: 'Ibuprofen API', avgDays: 8, closeRate: 90 },
  { material: 'Vitamin C', avgDays: 14, closeRate: 78 },
  { material: 'Lactose', avgDays: 21, closeRate: 65 },
  { material: 'Gelatin Capsules', avgDays: 12, closeRate: 82 }
];

export function SellerAnalytics({ user }: SellerAnalyticsProps) {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Seller Analytics</h1>
          <p className="text-gray-600 mt-1">AI-powered insights for your pharmaceutical surplus business</p>
          <div className="flex items-center mt-2 space-x-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <Brain className="w-3 h-3 mr-1" />
              AI Enhanced
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Real-time Data
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
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹8,47,200</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +23.8% from last year
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Prevented</CardTitle>
            <Recycle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">52.8 Tons</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15.2% from last year
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Surplus Predicted</CardTitle>
            <Brain className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">₹43,500</div>
            <div className="flex items-center text-xs text-orange-600">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Next quarter forecast
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">87%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2.3% from last year
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Panel */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-blue-600" />
            AI Insights & Recommendations
          </CardTitle>
          <CardDescription>
            Real-time intelligence to optimize your selling strategy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-white rounded-lg border">
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    insight.urgency === 'high' ? 'bg-red-500' :
                    insight.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <h4 className="font-medium">{insight.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{insight.message}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={insight.urgency === 'high' ? 'destructive' : 'secondary'}
                    className={insight.urgency === 'high' ? '' : 'bg-green-100 text-green-700'}
                  >
                    {insight.potentialValue > 0 ? '+' : ''}₹{Math.abs(insight.potentialValue).toLocaleString()}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue & Surplus Prediction */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Predicted Surplus</CardTitle>
            <CardDescription>
              Monthly revenue with AI surplus predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    `₹${value.toLocaleString()}`, 
                    name === 'revenue' ? 'Revenue' : 'Predicted Surplus'
                  ]} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    name="revenue"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predictedSurplus" 
                    stroke="#EF4444" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="predictedSurplus"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stock Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Performance Analysis</CardTitle>
            <CardDescription>
              AI-categorized stock performance breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stockPerformance}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {stockPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {stockPerformance.map((entry, index) => (
                <div key={entry.category} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-xs text-gray-600">{entry.category}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Performance & Selling Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Performance with AI Predictions */}
        <Card>
          <CardHeader>
            <CardTitle>Category Performance & AI Forecasts</CardTitle>
            <CardDescription>
              Performance breakdown with next quarter predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryPerformance.map((category) => (
                <div key={category.category} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{category.category}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{category.sold} sold</Badge>
                      <Badge className={`${
                        category.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        <Brain className="w-3 h-3 mr-1" />
                        {category.aiPrediction}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Total Revenue:</span>
                      <div className="font-bold text-green-600">
                        ₹{category.revenue.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600">Avg. Price:</span>
                      <div className="font-bold text-blue-600">
                        ₹{category.avgPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Selling Time Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Selling Time Analysis</CardTitle>
            <CardDescription>
              Average days to sell and close rates by material
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sellingTimeAnalysis.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{item.material}</h4>
                    <p className="text-sm text-gray-600">
                      Avg. {item.avgDays} days to sell
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${
                      item.closeRate >= 90 ? 'text-green-600' :
                      item.closeRate >= 75 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {item.closeRate}%
                    </div>
                    <div className="text-xs text-gray-500">Close Rate</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700">
                <Brain className="w-4 h-4 inline mr-1" />
                <strong>AI Insight:</strong> 90% of your Ibuprofen sales close within 2 weeks of listing. 
                Consider premium pricing for fast-moving inventory.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Your Sustainability Impact</CardTitle>
          <CardDescription>
            Environmental benefits from your pharmaceutical surplus sales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">52.8 Tons</div>
              <div className="text-sm text-gray-600">Waste Prevented</div>
              <p className="text-xs text-gray-500 mt-2">
                Equivalent to 105.6 tons of CO₂ emissions avoided
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">₹847K</div>
              <div className="text-sm text-gray-600">Value Recovered</div>
              <p className="text-xs text-gray-500 mt-2">
                From materials that would have been waste
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">127</div>
              <div className="text-sm text-gray-600">Companies Served</div>
              <p className="text-xs text-gray-500 mt-2">
                Helping other pharma companies reduce costs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}