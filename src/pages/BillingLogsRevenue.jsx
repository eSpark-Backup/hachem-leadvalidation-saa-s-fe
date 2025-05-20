import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AdminBilling from '../components/billing/AdminBilling.jsx';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import { USER_TYPE } from '../utils/auth';

const BillingLogsRevenue = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.admin) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  return USER_TYPE === USER_TYPES.admin ? <AdminBilling /> : null;
};

export default BillingLogsRevenue;
