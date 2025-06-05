const DASHBOARD_TEXT = {
  LEADS_OVERVIEW: 'Leads overview',
  MOST_GENERATE_LEADS: 'Most Generate Leads',
  THIS_YEAR: 'This Year',
  THIS_MONTH: 'This Month',
};
const TEXT_CONSTANTS = {
  leadsPerformance: 'Leads Performance',
  validLeads: 'Valid Leads',
  pendingLeads: 'Pending Leads',
  rejectedLeads: 'Rejected Leads',
  thisMonth: 'This Month',
  leadsImprovement: (percent, duration) =>
    `Your leads performance is ${percent} better compare to ${duration}`,
};

const SUPPLIER_REPORTS = {
  PerformenceLead: 'PerformenceLead',
  ValidLeads: 'ValidLeads',
  PendingLeads: 'PendingLeads',
  RejectedLeads: 'RejectedLeads',
  LeadsOverview: 'LeadsOverview',
  MostGenerateLeads: 'MostGenerateLeads',
};

export { DASHBOARD_TEXT, TEXT_CONSTANTS, SUPPLIER_REPORTS };
