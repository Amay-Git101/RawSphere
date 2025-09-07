import { SellerDashboard } from './SellerDashboard';
import { BuyerDashboard } from './BuyerDashboard';
import { User } from '../App';

interface DashboardProps {
  user: User;
}

export function Dashboard({ user }: DashboardProps) {
  // Route to appropriate dashboard based on user type
  if (user.userType === 'seller') {
    return <SellerDashboard user={user} />;
  } else {
    return <BuyerDashboard user={user} />;
  }
}