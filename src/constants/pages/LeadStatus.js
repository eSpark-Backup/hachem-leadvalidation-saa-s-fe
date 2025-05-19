const LEAD_STATUS = {
  title: 'Leads Status Tracking',
  filterType: {
    date: 'date',
  },
};

const TABLE_HEADER = [
  { key: 'client_id', label: 'Client ID' },
  { key: 'lead_created', label: 'Lead Created' },
  { key: 'company', label: 'Company' },
  { key: 'service', label: 'Service' },
  { key: 'country', label: 'Country' },
  { key: 'accepted_leads', label: 'Accepted Leads' },
  { key: 'validation', label: 'Validation' },
];

const TABLE_BODY = [
  {
    id: 1,
    client_id: 'CL:5626',
    lead_created: '28200',
    company: 'SP Installation',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '5560',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
  {
    id: 2,
    client_id: 'CL:3536',
    lead_created: '16627',
    company: '-',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '4349',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
  {
    id: 3,
    client_id: 'CL:9151',
    lead_created: '9631',
    company: 'SP Installation',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '1374',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
  {
    id: 4,
    client_id: 'CL:1148',
    lead_created: '50963',
    company: '-',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '5045',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
  {
    id: 5,
    client_id: 'CL:1374',
    lead_created: '50364',
    company: 'SP Installation',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '7791',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
  {
    id: 6,
    client_id: 'CL:4349',
    lead_created: '83676',
    company: 'SP Installation',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '4152',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
  {
    id: 7,
    client_id: 'CL:4152',
    lead_created: '39235',
    company: 'SP Installation',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '5626',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
  {
    id: 8,
    client_id: 'CL:8861',
    lead_created: '20796',
    company: 'SP Installation',
    service: 'Solar installation',
    country: 'Saint Vincent',
    accepted_leads: '8811',
    validation: { valid: '+80%', positive_result: '+60%', negative_result: 0 },
  },
];

const FILTER_TYPES = [{ type: 'date', key: 'date' }];

export { TABLE_BODY, FILTER_TYPES, TABLE_HEADER, LEAD_STATUS };
