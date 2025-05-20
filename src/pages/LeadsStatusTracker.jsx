import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GenericTable from '../components/global/table/GenericTable';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';

import {
  FILTER_TYPES,
  LEAD_STATUS,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/LeadStatus';

const LeadsStatusTracker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.supplier) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  if (USER_TYPE !== USER_TYPES.supplier) return null;

  return (
    <GenericTable
      title={LEAD_STATUS.title}
      filters={FILTER_TYPES}
      filterType={LEAD_STATUS.filterType}
      columns={TABLE_HEADER}
      data={TABLE_BODY}
      noBg
      leadStatus
      marginTop={{ xs: '30px', sm: '14px' }}
    />
  );
};

export default LeadsStatusTracker;
