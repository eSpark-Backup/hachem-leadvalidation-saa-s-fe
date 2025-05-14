import { useLocation } from 'react-router-dom';

import GenericTable from '../components/global/table/GenericTable';

import { USER_TYPE } from '../utils/auth';

import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  MY_LEAD_DETAILS,
  TABLE_HEADER,
  TABLE_BODY,
  FILTER_TYPES,
} from '../constants/pages/MyLeadsDetail';
import {
  AVAILABLE_LEAD_DETAILS,
  AVAILABLE_LEAD_FILTER_TYPES,
  AVAILABLE_LEAD_TABLE_BODY,
  AVAILABLE_LEAD_TABLE_HEADER,
} from '../constants/pages/AvailableLeadsDetail';
import NotFound from './NotFound';

const LeadDetails = () => {
  const { state } = useLocation();
  const title = state?.title?.split(':') || [''];
  const mergeTitle = title.join('').replace(/\s+/g, '');

  return (
    <>
      {USER_TYPE === USER_TYPES.supplier || USER_TYPE === USER_TYPES.client ? (
        <GenericTable
          title={
            USER_TYPE === USER_TYPES.client ? `Klairn’s ID ${mergeTitle}` : ''
          }
          filters={
            USER_TYPE === USER_TYPES.client
              ? FILTER_TYPES
              : AVAILABLE_LEAD_FILTER_TYPES
          }
          filterType={
            USER_TYPE === USER_TYPES.client
              ? MY_LEAD_DETAILS.filterType
              : AVAILABLE_LEAD_DETAILS.filterType
          }
          columns={
            USER_TYPE === USER_TYPES.client
              ? TABLE_HEADER
              : AVAILABLE_LEAD_TABLE_HEADER
          }
          data={
            USER_TYPE === USER_TYPES.client
              ? TABLE_BODY
              : AVAILABLE_LEAD_TABLE_BODY
          }
          excelFilter
          marginTop={{ xs: '30px', sm: '14px' }}
        />
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}
    </>
  );
};

export default LeadDetails;
