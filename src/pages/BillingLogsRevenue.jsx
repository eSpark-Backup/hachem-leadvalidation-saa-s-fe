import AdminBilling from '../components/billing/AdminBilling.jsx';
import { USER_TYPES } from '../constants/components/globals/Auth';
import { USER_TYPE } from '../utils/auth';
import NotFound from './NotFound.jsx';

const BillingLogsRevenue = () => {
  return (
    <>{USER_TYPE === USER_TYPES.admin ? <AdminBilling /> : <NotFound />}</>
  );
};

export default BillingLogsRevenue;
