import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { 
  ShoppingCart, 
  Package, 
  TrendingDown, 
  Bell,
  Calendar,
  Search,
  Star,
  Clock,
  DollarSign,
  Leaf,
  Eye,
  Heart
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { User } from '../App';

interface BuyerDashboardProps {
  user: User;
}

const purchaseTrendData = [
  { month: 'Jan', spent: 12000, saved: 2400 },
  { month: 'Feb', spent: 15000, saved: 3200 },
  { month: 'Mar', spent: 18000, saved: 4100 },
  { month: 'Apr', spent: 22000, saved: 5200 },
  { month: 'May', spent: 19000, saved: 4800 },
  { month: 'Jun', spent: 25000, saved: 6500 }
];

const sustainabilityData = [
  { name: 'Sustainable Purchases', value: 78, color: '#10B981' },
  { name: 'Traditional Purchases', value: 22, color: '#9CA3AF' }
];

const recentOrders = [
  { id: 'ORD-001', item: 'Paracetamol Base - 15kg', status: 'Delivered', date: '2024-12-15', amount: 3750 },
  { id: 'ORD-002', item: 'Vitamin C Powder - 8kg', status: 'Shipping', date: '2024-12-12', amount: 1440 },
  { id: 'ORD-003', item: 'Ibuprofen API - 12kg', status: 'Processing', date: '2024-12-10', amount: 2640 },
  { id: 'ORD-004', item: 'Gelatin Capsules - 30k units', status: 'Delivered', date: '2024-12-08', amount: 2100 }
];

const newArrivals = [
  { name: 'Aspirin Base', quantity: '20kg', price: 2800, expiry: '2026-09-15', seller: 'PharmaCorp', hot: true },
  { name: 'Magnesium Stearate', quantity: '35kg', price: 1950, expiry: '2027-01-20', seller: 'ChemSupply', hot: false },
  { name: 'Lactose Monohydrate', quantity: '60kg', price: 3200, expiry: '2025-11-30', seller: 'BioTech', hot: true },
  { name: 'PVP K30', quantity: '25kg', price: 4100, expiry: '2026-05-10', seller: 'PolymerTech', hot: false }
];

const notifications = [
  { id: 1, type: 'alert', message: 'New Ibuprofen stock available from trusted seller', time: '2 hours ago' },
  { id: 2, type: 'success', message: 'Your order ORD-002 has been shipped', time: '4 hours ago' },
  { id: 3, type: 'info', message: 'Price drop alert: Vitamin C Powder now 15% off', time: '6 hours ago' },
  { id: 4, type: 'warning', message: 'Reminder: Review your order ORD-001', time: '1 day ago' }
];

export function BuyerDashboard({ user }: BuyerDashboardProps) {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Buyer Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user.name}</p>
          <div className="flex items-center mt-2 space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Leaf className="w-3 h-3 mr-1" />
              Sustainable Buyer
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              Premium Member
            </Badge>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 days
          </Button>
          <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
            <Search className="w-4 h-4 mr-2" />
            Browse Marketplace
          </Button>
        </div>
      </div>

      {/* Key Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Purchases Made</CardTitle>
            <ShoppingCart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">43</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8</span> this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <TrendingDown className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹3,00,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">35%</span> vs market price
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">3</div>
            <p className="text-xs text-muted-foreground">
              Estimated delivery: 2-5 days
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cart Value</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">₹4,27,619</div>
            <p className="text-xs text-muted-foreground">
              5 items ready to checkout
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Purchase Analytics */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Analytics</CardTitle>
              <CardDescription>
                Your spending and savings over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={purchaseTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      `₹${value.toLocaleString()}`, 
                      name === 'spent' ? 'Total Spent' : 'Money Saved'
                    ]} />
                    <Line 
                      type="monotone" 
                      dataKey="spent" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      name="spent"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="saved" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      name="saved"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* New Arrivals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  New Arrivals
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </CardTitle>
              <CardDescription>
                Fresh pharmaceutical materials just listed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {newArrivals.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      {item.hot && (
                        <Badge className="bg-red-500 text-white text-xs">HOT</Badge>
                      )}
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          {item.quantity} • Expires: {item.expiry} • by {item.seller}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-lg">₹{item.price.toLocaleString()}</div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <ShoppingCart className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.map((notification) => (
                <Alert key={notification.id} className="border-l-4 border-l-blue-500">
                  <Bell className="h-4 w-4" />
                  <AlertDescription className="flex justify-between items-start">
                    <span className="text-sm">{notification.message}</span>
                    <Badge variant="secondary" className="ml-2 text-xs shrink-0">
                      {notification.time}
                    </Badge>
                  </AlertDescription>
                </Alert>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Sustainability Score */}
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
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sustainabilityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {sustainabilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-green-600">78%</div>
                <p className="text-sm text-gray-600">Sustainable purchases</p>
                <Badge className="bg-green-100 text-green-700 mt-2">
                  <Leaf className="w-3 h-3 mr-1" />
                  Eco Champion
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Recent Orders
            </div>
            <Button variant="outline" size="sm">View All Orders</Button>
          </CardTitle>
          <CardDescription>
            Track your recent pharmaceutical purchases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant={
                      order.status === 'Delivered' ? 'default' :
                      order.status === 'Shipping' ? 'secondary' :
                      'outline'
                    }
                    className={
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'Shipping' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }
                  >
                    {order.status}
                  </Badge>
                  <div>
                    <h4 className="font-medium">{order.item}</h4>
                    <p className="text-sm text-gray-600">Order #{order.id} • {order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹{order.amount.toLocaleString()}</div>
                  <Button size="sm" variant="outline" className="mt-1">
                    Track
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions for Buyers */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks for pharmaceutical procurement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col space-y-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <Search className="w-6 h-6" />
              <span>Browse Materials</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <ShoppingCart className="w-6 h-6" />
              <span>View Cart</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Package className="w-6 h-6" />
              <span>Track Orders</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Star className="w-6 h-6" />
              <span>Saved Items</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}