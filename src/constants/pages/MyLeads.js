import { location, service, validation } from './DropdownOptions';

export const MY_LEADS = {
  title: 'Leads',
  filterType: {
    search: 'search',
    dropdown: 'dropdown',
    month: 'month',
  },
};

export const TABLE_HEADER = [
  { key: 'supplier_id', label: 'Supplier’s ID' },
  { key: 'country', label: 'Country' },
  { key: 'leads_validation', label: 'Leads Validation Rate' },
  { key: 'date', label: 'Date' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: '' },
];

export const TABLE_BODY = [
  {
    id: 1,
    supplier_id: 'SP: 43756',
    country: 'United States',
    leads_validation: '78%',
    date: new Date('8/30/14'),
    status: 'Accepted',
    isLatest: true,
    isLatestText: 'New Leads',
  },
  {
    id: 2,
    supplier_id: 'SP: 43178',
    country: 'Greece',
    leads_validation: '80%',
    date: new Date('4/21/12'),
    status: 'Accepted',
    isLatest: true,
    isLatestText: 'New Leads',
  },
  {
    id: 3,
    supplier_id: 'SP: 22739',
    country: 'Saint Barthélemy',
    leads_validation: '75%',
    date: new Date('7/18/17'),
    status: 'Reject',
    isLatest: true,
    isLatestText: 'New Leads',
  },
  {
    id: 4,
    supplier_id: 'SP: 97174',
    country: 'Russian Federation',
    leads_validation: '80%',
    date: new Date('1/15/12'),
    status: 'Pending',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 5,
    supplier_id: 'SP: 43178',
    country: 'Palestine',
    leads_validation: '90%',
    date: new Date('1/31/14'),
    status: 'Accepted',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 6,
    supplier_id: 'SP: 39635',
    country: 'Sao Tome and Principe',
    leads_validation: '90%',
    date: new Date('4/4/18'),
    status: 'Accepted',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 7,
    supplier_id: 'SP: 22739',
    country: 'South Africa',
    leads_validation: '85%',
    date: new Date('9/18/16'),
    status: 'Reject',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 8,
    supplier_id: 'SP: 70668',
    country: 'Guinea',
    leads_validation: '70%',
    date: new Date('7/27/13'),
    status: 'Pending',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 9,
    supplier_id: 'SP: 97174',
    country: 'Poland',
    leads_validation: '90%',
    date: new Date('12/4/17'),
    status: 'Reject',
    isLatest: false,
    isLatestText: 'New Leads',
  },
];

export const FILTER_TYPES = [
  { type: 'search', key: 'search' },
  {
    type: 'dropdown',
    key: 'dropdown',
  },
  { type: 'month', key: 'month' },
];

export const SELECT_FILTERS = [
  // { options: service, label: 'Services', key: 'services' },
  { options: validation, label: 'Validation', key: 'leads_validation' },
  { options: location, label: 'Select Location', key: 'country' },
];
