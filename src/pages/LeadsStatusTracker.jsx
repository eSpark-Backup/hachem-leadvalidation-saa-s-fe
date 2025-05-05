import GenericTable from '../components/global/table/GenericTable';

import {
  FILTER_TYPES,
  LEAD_STATUS,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/LeadStatus';

const LeadsStatusTracker = () => {
  return (
    <GenericTable
      title={LEAD_STATUS.title}
      filters={FILTER_TYPES}
      filterType={LEAD_STATUS.filterType}
      columns={TABLE_HEADER}
      data={TABLE_BODY}
      noBg
    />
  );
};

export default LeadsStatusTracker;
