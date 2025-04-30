import { useLocation } from 'react-router-dom';

import GenericTable from '../components/global/table/GenericTable';

import {
  MY_LEAD_DETAILS,
  TABLE_HEADER,
  TABLE_BODY,
  FILTER_TYPES,
} from '../constants/pages/MyLeadsDetail';
import { USER_TYPES } from '../constants/components/globals/Auth';
import {
  AVAILABLE_LEAD_DETAILS,
  AVAILABLE_LEAD_FILTER_TYPES,
  AVAILABLE_LEAD_TABLE_BODY,
  AVAILABLE_LEAD_TABLE_HEADER,
} from '../constants/pages/AvailableLeadsDetail';

import { USER_TYPE } from '../utils/auth';

const LeadDetails = () => {
  const { state } = useLocation();
  const title = state.title?.split(':');
  const mergeTitle = title.join('').replace(/\s+/g, '');

  return (
    <GenericTable
      title={USER_TYPE === USER_TYPES.client ? `Klairn’s ID ${mergeTitle}` : ''}
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
        USER_TYPE === USER_TYPES.client ? TABLE_BODY : AVAILABLE_LEAD_TABLE_BODY
      }
    />
  );
};

export default LeadDetails;
