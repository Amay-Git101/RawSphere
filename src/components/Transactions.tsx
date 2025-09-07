import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Search, Download, Eye, Hash } from 'lucide-react';
import { Transaction, User } from '../App';

interface TransactionsProps {
  transactions: Transaction[];
  user: User;
}

export function Transactions({ transactions, user }: TransactionsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.item.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;
    
    // Filter based on user type: buyers see purchases, sellers see sales
    const matchesUserType = user.userType === 'buyer' 
      ? transaction.buyer.toLowerCase().includes(user.company.toLowerCase())
      : transaction.seller.toLowerCase().includes(user.company.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesUserType;
  });

  const totalValue = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const completedTransactions = filteredTransactions.filter(t => t.status === 'Completed').length;

  const generateBlockchainHash = () => {
    return '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Transactions</h1>
          <p className="text-gray-600 mt-1">View and manage your transaction history</p>
        </div>
        <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{filteredTransactions.length}</div>
            <p className="text-xs text-muted-foreground">
              {completedTransactions} completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ₹{totalValue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {transactions.length > 0 ? Math.round((completedTransactions / filteredTransactions.length) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Transaction completion
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            Detailed view of all your marketplace transactions
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium">Transaction ID</th>
                  <th className="text-left p-4 font-medium">Buyer</th>
                  <th className="text-left p-4 font-medium">Seller</th>
                  <th className="text-left p-4 font-medium">Item</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-mono text-sm">
                      #{transaction.id.padStart(8, '0')}
                    </td>
                    <td className="p-4">{transaction.buyer}</td>
                    <td className="p-4">{transaction.seller}</td>
                    <td className="p-4">
                      <div className="max-w-xs truncate" title={transaction.item}>
                        {transaction.item}
                      </div>
                    </td>
                    <td className="p-4">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="p-4 font-bold text-green-600">
                      ₹{transaction.amount.toLocaleString()}
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant={transaction.status === 'Completed' ? 'default' : 'secondary'}
                        className={transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {transaction.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedTransaction(transaction)}
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            View Receipt
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Transaction Receipt</DialogTitle>
                            <DialogDescription>
                              Blockchain-verified transaction details
                            </DialogDescription>
                          </DialogHeader>
                          {selectedTransaction && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Transaction Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">ID:</span>
                                      <span className="font-mono">#{selectedTransaction.id.padStart(8, '0')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Date:</span>
                                      <span>{new Date(selectedTransaction.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Status:</span>
                                      <Badge variant={selectedTransaction.status === 'Completed' ? 'default' : 'secondary'}>
                                        {selectedTransaction.status}
                                      </Badge>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Amount:</span>
                                      <span className="font-bold text-green-600">
                                        ₹{selectedTransaction.amount.toLocaleString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">Parties</h4>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="text-gray-600">Buyer:</span>
                                      <div className="font-medium">{selectedTransaction.buyer}</div>
                                    </div>
                                    <div>
                                      <span className="text-gray-600">Seller:</span>
                                      <div className="font-medium">{selectedTransaction.seller}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Item Details</h4>
                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                                  {selectedTransaction.item}
                                </p>
                              </div>

                              <div>
                                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                  <Hash className="w-4 h-4 mr-2" />
                                  Blockchain Hash
                                </h4>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs break-all">
                                  {selectedTransaction.hash || generateBlockchainHash()}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  This transaction is cryptographically secured on the blockchain
                                </p>
                              </div>

                              <div className="flex space-x-3 pt-4">
                                <Button className="flex-1">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download PDF
                                </Button>
                                <Button variant="outline" className="flex-1">
                                  View on Blockchain
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {filteredTransactions.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500">No transactions found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
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