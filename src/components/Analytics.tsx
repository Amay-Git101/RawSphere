import { SellerAnalytics } from './SellerAnalytics';
import { BuyerAnalytics } from './BuyerAnalytics';
import { User } from '../App';

interface AnalyticsProps {
  user: User;
}

export function Analytics({ user }: AnalyticsProps) {
  // Route to appropriate analytics based on user type
  if (user.userType === 'seller') {
    return <SellerAnalytics user={user} />;
  } else {
    return <BuyerAnalytics user={user} />;
  }
}