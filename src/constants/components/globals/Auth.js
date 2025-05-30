import ProfileImageDefault from '/src/assets/images/global/default-img.jpg';

const ROUTES = {
  // public paths
  splash: '/',
  login: '/login',
  signup: '/signup',
  signupType: '/signup/:type',
  forgotPassword: '/forgot-password',
  forgotPasswordEmail: '/forgot-password/:email',
  newpassword: '/new-password',
  resetPassword: '/reset-password',
  verifyEmail: '/verify-email',
  onboardingCredits: '/onboarding/credits',
  onboardingPayment: '/onboarding/payment',
  notFound: '*',

  // private paths
  settings: 'settings',
  dashboard: '/dashboard',
  billingLogsRevenue: 'billing-logs-revenue',
  klaienManagement: 'klaien-management',
  leadMonitoring: 'lead-monitoring',
  leadScoringSetting: 'lead-scoring-setting',
  leadsStatusTracker: 'leads-status-tracker',
  manageClients: 'manage-clients',
  manageSuppliers: 'manage-suppliers',
  myLeads: 'my-leads',
  myLeadDetails: 'my-lead-details',
  reportsAnalytics: 'reports-analytics',
  systemSetting: 'system-setting',
  // uploadLeads: 'upload-leads',
  charts: 'charts',
  avalaibleLeadsDetails: 'available-leads-deails',
};

const SUPPLIER_INFO = {
  role: 'supplier',
  id: 'SP10234',
  name: 'Supplier Name',
  profileImage: ProfileImageDefault,
};

const ADMIN_INFO = {
  role: 'admin',
  id: 'AD10234',
  name: 'Admin Name',
  profileImage: ProfileImageDefault,
};

const CLIENT_INFO = {
  role: 'client',
  id: 'CL10234',
  name: 'User Name',
  profileImage: ProfileImageDefault,
};

const USER_TYPES = {
  supplier: 'supplier',
  client: 'client',
  admin: 'admin',
  user: 'User',
};

const KEYS = {
  token: 'token',
  userType: 'userType',
  tokenKey: 'sample-token',
};

export { ROUTES, SUPPLIER_INFO, ADMIN_INFO, CLIENT_INFO, USER_TYPES, KEYS };
