export const CLIENT_DASHBOARD_LEADS = {
  title: 'Leads',
  filterType: {
    search: 'search',
    dropdown: 'dropdown',
    month: 'month',
  },
};

export const CLIENT_LEADS_TABLE_HEADER = [
  { key: 'supplier_id', label: 'Supplier’s ID' },
  { key: 'lead_id', label: 'Lead ID' },
  { key: 'country', label: 'Country' },
  { key: 'services', label: 'Services' },
  { key: 'leads_validation', label: 'Leads Validation Rate' },
  { key: 'date', label: 'Date' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: '' },
];

export const CLIENT_LEADS_TABLE_BODY = [
  {
    id: 1,
    supplier_id: 'SP: 43756',
    lead_id: '10025',
    country: 'United States',
    services: 'EV Charger',
    leads_validation: '78%',
    date: new Date('8/30/14'),
    status: 'Accepted',
    isLatest: false,
  },
  {
    id: 2,
    supplier_id: 'SP: 43178',
    lead_id: '12025',
    country: 'Greece',
    services: 'EV Charger',
    leads_validation: '80%',
    date: new Date('4/21/12'),
    status: 'Accepted',
    isLatest: false,
  },
  {
    id: 3,
    supplier_id: 'SP: 22739',
    lead_id: '10035',
    country: 'Saint Barthélemy',
    services: 'EV Charger',
    leads_validation: '75%',
    date: new Date('7/18/17'),
    status: 'Reject',
    isLatest: false,
  },
  {
    id: 4,
    supplier_id: 'SP: 97174',
    lead_id: '10048',
    country: 'Russian Federation',
    services: 'EV Charger',
    leads_validation: '80%',
    date: new Date('1/15/12'),
    status: 'Pending',
    isLatest: false,
  },
];

export const CLIENT_LEADS_FILTER_TYPES = [
  { type: 'search', key: 'search' },
  {
    type: 'dropdown',
    key: 'dropdown',
  },
  { type: 'month', key: 'month' },
];

export const CLIENT_LEADS_SELECT_FILTERS = [
  { options: [], label: 'Validation', key: 'validation' },
  { options: [], label: 'Select Location', key: 'location' },
];
