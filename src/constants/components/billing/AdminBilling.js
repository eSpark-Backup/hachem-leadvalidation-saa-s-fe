export const ADMIN_DASHBOARD = { title: `Billing Logs and Revenue` };
export const data = {
  lastMonth: [
    { label: 'Total Income', value: '14,0700' },
    { label: 'Total Cost of Leads', value: '155,230' },
    { label: 'Gross Profit', value: '124,852', highlight: true },
    { label: 'Net Earning', value: '89,21546' },
  ],
  yearToDate: [
    { label: 'Total Income', value: '14,0700' },
    { label: 'Total Cost of Leads', value: '15,230' },
    { label: 'Gross Profit', value: '124,852', highlight: true },
    { label: 'Net Earning', value: '89,21546' },
  ],
};
export const clientsData = [
  { client: 'CL10042', credits: '€22,500', revenue: '12,25450' },
  { client: 'CL10042', credits: '€22,500', revenue: '12,25450' },
];

export const ADMIN_BILLING = {
  usage: `Usage`,
  TotalClientsRevenue: {
    title: 'Total Clients and Revenue',
    headers: ['Clients', 'Credits Buy', 'Revenue'],
  },
  SalesAnalysis: {
    btnTitle: 'This Year',
    title: 'Sales Analysis',
    color: '#0E5FD9',
    fillColor: '#CFDFF7',
    totalSales: 44452,
    strokeWidth: 3.38,
    curreny: '€',
    pickerID: 'SalesAnalysis',
    up: 0,
    inPer: `-12.2%`,
  },
  ProfitLossOverview: {
    title: 'PROFIT & LOSSES OVERVIEW',
  },
  TotalClientSupplier: {
    title: 'Total Clients & Suppliers',
    dropdownLabel: 'This Month',
    pickerID: 'TopClientsByRevenue',
    centerValue: 1024,
    clientLabel: 'Client',
    supplierLabel: 'Supplier',
  },
  TopClientsByRevenue: {
    dropdownLabel: 'This Month',
    title: 'Top 5 Clients by Revenue',
    pickerID: 'TopClientsByRevenue',
  },
};
