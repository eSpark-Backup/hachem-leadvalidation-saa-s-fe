import { useLocation } from 'react-router-dom';

const BillingLogsRevenue = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default BillingLogsRevenue;
