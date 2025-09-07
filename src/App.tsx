import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { Marketplace } from './components/Marketplace';
import { AddListing } from './components/AddListing';
import { Transactions } from './components/Transactions';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';
import { Sidebar } from './components/Sidebar';
import { Toaster } from './components/ui/sonner';

export type Page = 'landing' | 'login' | 'dashboard' | 'marketplace' | 'add-listing' | 'transactions' | 'analytics' | 'settings';

export interface User {
  name: string;
  email: string;
  company: string;
  userType: 'seller' | 'buyer';
}

export interface Listing {
  id: string;
  name: string;
  quantity: string;
  expiryDate: string;
  price: number;
  category: string;
  seller: string;
  complianceCert?: string;
}

export interface Transaction {
  id: string;
  buyer: string;
  seller: string;
  item: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending';
  hash?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [loginUserType, setLoginUserType] = useState<'seller' | 'buyer' | null>(null);
  const [listings, setListings] = useState<Listing[]>([
    {
      id: '1',
      name: 'Paracetamol Base',
      quantity: '25kg',
      expiryDate: '2026-08-15',
      price: 5000,
      category: 'APIs',
      seller: 'PharmaCorp Ltd'
    },
    {
      id: '2',
      name: 'Ibuprofen API',
      quantity: '10kg',
      expiryDate: '2025-12-20',
      price: 2200,
      category: 'APIs',
      seller: 'Global Pharma Inc'
    },
    {
      id: '3',
      name: 'Gelatin Capsules',
      quantity: '50,000 units',
      expiryDate: '2027-03-10',
      price: 3500,
      category: 'Excipients',
      seller: 'MedSupply Co'
    },
    {
      id: '4',
      name: 'Vitamin C Powder',
      quantity: '15kg',
      expiryDate: '2026-01-30',
      price: 1800,
      category: 'APIs',
      seller: 'BioTech Solutions'
    },
    {
      id: '5',
      name: 'Lactose Monohydrate',
      quantity: '100kg',
      expiryDate: '2025-09-15',
      price: 4200,
      category: 'Excipients',
      seller: 'Ingredient Masters'
    }
  ]);

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      buyer: 'MedCorp Industries',
      seller: 'PharmaCorp Ltd',
      item: 'Acetaminophen Base - 20kg',
      date: '2024-12-15',
      amount: 4500,
      status: 'Completed',
      hash: '0x7f8e2c4a9b1d6e3f5a8c2e1b9d4f6a3c8e2b5d7f9c1a4e6b8d2f5a9c3e1b7d4f'
    },
    {
      id: '2',
      buyer: 'Global Health Ltd',
      seller: 'BioTech Solutions',
      item: 'Vitamin D3 - 5kg',
      date: '2024-12-10',
      amount: 3200,
      status: 'Completed',
      hash: '0x9a3e1c7f4b6d8e2a5c9f1e4b7d6a8c2e5f3b9d1a7c4e8f2b6d5a9c3e1f7b4d8'
    },
    {
      id: '3',
      buyer: 'PharmaPlus Co',
      seller: 'MedSupply Co',
      item: 'Hard Gelatin Capsules - 25,000 units',
      date: '2024-12-05',
      amount: 1800,
      status: 'Pending',
      hash: '0x5c2e8f1b4d7a9c3e6f2b8d1a5c7e9f4b2d6a8c1e5f9b3d7a4c8e2f6b1d9a5c3'
    },
    {
      id: '4',
      buyer: 'MedCorp Industries',
      seller: 'Ingredient Masters',
      item: 'Microcrystalline Cellulose - 50kg',
      date: '2024-11-28',
      amount: 2600,
      status: 'Completed',
      hash: '0x1f4b8d2a6c9e3f7b1d5a8c4e2f6b9d3a7c1e5f8b4d2a9c6e1f7b3d5a8c2e4f'
    }
  ]);

  const login = (userData: User) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const goToLogin = (userType: 'seller' | 'buyer') => {
    setLoginUserType(userType);
    setCurrentPage('login');
  };

  const goHome = () => {
    setUser(null);
    setLoginUserType(null);
    setCurrentPage('landing');
  };

  const addListing = (newListing: Omit<Listing, 'id'>) => {
    const listing: Listing = {
      ...newListing,
      id: Date.now().toString(),
      seller: user?.company || 'Unknown Company'
    };
    setListings(prev => [listing, ...prev]);
  };

  if (currentPage === 'landing') {
    return (
      <>
        <LandingPage onGetStarted={goToLogin} />
        <Toaster />
      </>
    );
  }

  if (!user && currentPage === 'login') {
    return (
      <>
        <LoginPage onLogin={login} preselectedUserType={loginUserType} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        onGoHome={goHome}
        user={user}
      />
      
      <main className="flex-1 overflow-y-auto lg:ml-0 ml-0">
        <div className="lg:p-0 pt-16 lg:pt-0">
          {currentPage === 'dashboard' && <Dashboard user={user} />}
          {currentPage === 'marketplace' && <Marketplace listings={listings} user={user} />}
          {currentPage === 'add-listing' && user.userType === 'seller' && <AddListing onAddListing={addListing} />}
          {currentPage === 'transactions' && <Transactions transactions={transactions} user={user} />}
          {currentPage === 'analytics' && <Analytics user={user} />}
          {currentPage === 'settings' && <Settings user={user} />}
        </div>
      </main>
      
      <Toaster />
    </div>
  );
}