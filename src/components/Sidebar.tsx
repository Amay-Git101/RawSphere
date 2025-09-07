import { 
  LayoutDashboard, 
  ShoppingCart, 
  Plus, 
  Receipt, 
  BarChart3, 
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Page, User } from '../App';
import { useState } from 'react';

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onGoHome: () => void;
  user: User;
}

const getNavigationItems = (userType: 'seller' | 'buyer'): Array<{ id: Page, label: string, icon: any }> => {
  const commonItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'marketplace' as Page, label: 'Marketplace', icon: ShoppingCart },
    { id: 'transactions' as Page, label: 'Transactions', icon: Receipt },
    { id: 'analytics' as Page, label: 'Analytics', icon: BarChart3 },
    { id: 'settings' as Page, label: 'Settings', icon: Settings },
  ];

  if (userType === 'seller') {
    // Insert "Add Listing" for sellers after marketplace
    return [
      commonItems[0], // Dashboard
      commonItems[1], // Marketplace
      { id: 'add-listing' as Page, label: 'Add Listing', icon: Plus },
      ...commonItems.slice(2) // Rest of the items
    ];
  } else {
    // Buyers don't see "Add Listing"
    return commonItems;
  }
};

export function Sidebar({ currentPage, onPageChange, onGoHome, user }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleLogout = () => {
    onGoHome();
  };

  const navigationItems = getNavigationItems(user.userType);

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <button 
          onClick={onGoHome}
          className="flex items-center space-x-3 hover:opacity-75 transition-opacity w-full text-left"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">RawSphere</h2>
            <p className="text-sm text-gray-500">Supply Chain AI</p>
          </div>
        </button>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            user.userType === 'seller' ? 'bg-green-100' : 'bg-blue-100'
          }`}>
            <span className={`text-sm font-medium ${
              user.userType === 'seller' ? 'text-green-700' : 'text-blue-700'
            }`}>
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <Badge 
                variant="secondary" 
                className={`text-xs ${
                  user.userType === 'seller' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {user.userType}
              </Badge>
            </div>
            <p className="text-xs text-gray-500 truncate">{user.company}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={`w-full justify-start ${
                isActive 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => {
                onPageChange(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-3" />
          Go to Home
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white shadow-md"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative flex flex-col w-64 bg-white border-r border-gray-200">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}