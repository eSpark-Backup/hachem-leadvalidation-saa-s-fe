const LEADS_TABLE = [
  {
    leadType: 'Accepted',
    totalLeads: 13170,
    validRate: 60,
    color: '#00C853',
  }, // green
  {
    leadType: 'Pending',
    totalLeads: 4390,
    validRate: 20,
    color: '#2979FF',
  }, // blue
  {
    leadType: 'Rejected',
    totalLeads: 4390,
    validRate: 20,
    color: '#D50000',
  }, // red
];

const HEADERS = ['Leads', 'Total Leads', 'Valid Rate'];

const CLIENT_LEADS_TABLE = [
  {
    leadType: 'Iceland',
    totalLeads: 13170,
    validRate: 60,
    color: '#0E5FD9',
  }, // green
  {
    leadType: 'Germany',
    totalLeads: 4390,
    validRate: 20,
    color: '#FF9500',
  }, // blue
  {
    leadType: 'Reunion',
    totalLeads: 4390,
    validRate: 20,
    color: '#E84646',
  }, // red
];

const CLIENT_HEADERS = ['Country', 'Total Leads', 'Valid Rate'];

export { LEADS_TABLE, HEADERS, CLIENT_LEADS_TABLE, CLIENT_HEADERS };
