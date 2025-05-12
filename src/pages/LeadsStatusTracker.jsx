import GenericTable from '../components/global/table/GenericTable';
import NotFound from './NotFound';

import { USER_TYPE } from '../utils/auth';

import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  FILTER_TYPES,
  LEAD_STATUS,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/LeadStatus';

const LeadsStatusTracker = () => {
  return (
    <>
      {USER_TYPE === USER_TYPES.supplier ? (
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
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}
    </>
  );
};

export default LeadsStatusTracker;
