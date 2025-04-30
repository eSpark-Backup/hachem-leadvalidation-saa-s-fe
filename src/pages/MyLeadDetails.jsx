import { useLocation } from 'react-router-dom';

import GenericTable from '../components/global/table/GenericTable';

import {
  MY_LEAD_DETAILS,
  TABLE_HEADER,
  TABLE_BODY,
  FILTER_TYPES,
} from '../constants/pages/MyLeadsDetail';

const MyLeadDetails = () => {
  const { state } = useLocation();
  const title = state.title?.split(':');
  const mergeTitle = title.join('').replace(/\s+/g, '');

  return (
    <GenericTable
      title={`Klairn’s ID ${mergeTitle}`}
      filters={FILTER_TYPES}
      filterType={MY_LEAD_DETAILS.filterType}
      columns={TABLE_HEADER}
      data={TABLE_BODY}
    />
  );
};

export default MyLeadDetails;
