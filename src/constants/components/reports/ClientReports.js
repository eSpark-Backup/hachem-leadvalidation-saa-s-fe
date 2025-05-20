const CLIENT_REPORTS = {
  reportCards: {
    activeSuppliers: {
      title: 'ACTIVE SUPPLIERS',
      value: '421',
      label: 'This Month',
      packerID: 'ActiveSuppliers',
    },
    supplierBreakdown: {
      title: 'Breakdown BY Supplier',
      value: '69.25%',
      label: 'This Month',
      packerID: 'SupplierBreakdown',
    },
    weeklyCreditScore: {
      title: 'WEEKLY Credits Score',
      value: '50%',
      label: 'This Month',
      packerID: 'WeeklyCreditScore',
    },
    leadUsage: {
      title: 'LEAD USEAGE',
      value: '81.94%',
      label: 'This Month',
      packerID: 'LeadUsage',
    },
  },
  creditUsage: {
    title: 'Credit Usage',
    label: 'This Month',
    packerID: 'CreditUsage',
  },
  mostGenerateLeads: {
    title: 'Most Generate Leads',
    label: 'This Month',
    packerID: 'MostGenerateLeads',
  },
  clientsMostGenerateLeads: 'ClientMostGenerateLeads',
  suppliersMostGenerateLeads: 'SupplierMostGenerateLeads',
};
// Text Constants
const MODAL_WIDTHS = {
  CreditUsage: 800,
  Default: 400,
};

const CHART_COLORS = {
  creditBar: '#0E5FD9',
  creditFill: '#CFDFF7',
  weeklyCredit: '#8884d8',
  leadColor: '#0FAF62',
};

const styles = {
  section: { py: 2 },
  card: { borderRadius: 4, p: 1 },
  clientCardWrapper: { p: 1 },
  popper: { zIndex: 99999 },
};

export { MODAL_WIDTHS, CHART_COLORS, styles, CLIENT_REPORTS };
