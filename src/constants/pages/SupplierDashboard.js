import { location, validation } from './DropdownOptions';

export const SUPPLIER_DASHBOARD_AVAILABLE_LEADS = {
  title: 'Available Leads',
  filterType: {
    dropdown: 'dropdown',
    month: 'month',
  },
};

export const SUPPLIER_AVAILABLE_LEADS_TABLE_HEADER = [
  { key: 'client_id', label: 'Client ID' },
  { key: 'country', label: 'Country' },
  { key: 'leads_validation', label: 'Leads Validation Rate' },
  { key: 'date', label: 'Date' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: '' },
];

export const SUPPLIER_AVAILABLE_LEADS_TABLE_BODY = [
  {
    id: 1,
    client_id: 'Cl:51912',
    country: 'United States',
    leads_validation: '78%',
    date: new Date('8/30/14'),
    status: 'Accepted',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 2,
    client_id: 'CL81613',
    country: 'Greece',
    leads_validation: '80%',
    date: new Date('4/21/12'),
    status: 'Accepted',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 3,
    client_id: 'CL11716',
    country: 'Saint Barthélemy',
    leads_validation: '75%',
    date: new Date('7/18/17'),
    status: 'Reject',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 4,
    client_id: 'CL11512',
    country: 'Russian Federation',
    leads_validation: '80%',
    date: new Date('1/15/12'),
    status: 'Pending',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 5,
    client_id: 'CL91816',
    country: 'Palestine',
    leads_validation: '90%',
    date: new Date('1/31/14'),
    status: 'Accepted',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 6,
    client_id: 'CL72713',
    country: 'Sao Tome and Principe',
    leads_validation: '90%',
    date: new Date('4/4/18'),
    status: 'Accepted',
    isLatest: false,
    isLatestText: 'New Leads',
  },
  {
    id: 7,
    client_id: 'CL13114',
    country: 'South Africa',
    leads_validation: '85%',
    date: new Date('9/18/16'),
    status: 'Reject',
    isLatest: false,
    isLatestText: 'New Leads',
  },
];

export const SUPPLIER_AVAILABLE_LEADS_FILTER_TYPES = [
  {
    type: 'dropdown',
    key: 'dropdown',
  },
  { type: 'month', key: 'month' },
];

export const SUPPLIER_AVAILABLE_LEADS_SELECT_FILTERS = [
  { options: validation, label: 'Validation', key: 'validation' },
  { options: location, label: 'Select Location', key: 'location' },
];
