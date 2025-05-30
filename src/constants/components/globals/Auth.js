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
  profileImage: '/assets/images/global/profile-Image-default.png',
};
const ADMIN_INFO = {
  role: 'admin',
  id: 'AD10234',
  name: 'Admin Name',
  profileImage: '/assets/images/global/profile-Image-default.png',
};
const CLIENT_INFO = {
  role: 'client',
  id: 'CL10234',
  name: 'User Name',
  profileImage: '/assets/images/global/profile-Image-default.png',
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
const EMAIL_FROM = {
  email: '',
};

const LOGIN_FORM = {
  email: '',
  password: '',
  service_and_policy: false,
};
const NEW_PASSWORD_FORM = {
  current_password: '',
  new_password: '',
  confirm_password: '',
};
const NEW_PASSWORD_FORM_RESET = {
  current_password: false,
  new_password: false,
  confirm_password: false,
};

const RESRT_PASSWORD_FORM = {
  password: '',
  confirm_password: '',
};
const RESRT_PASSWORD_FORM_RESET = {
  password: false,
  confirm_password: false,
};
const SIGNUP_FORM = {
  fullname: '',
  email: '',
  password: '',
  confirm_password: '',
  company: '',
  service_and_policy: false,
  role: '',
};

const SIGNUP_FORM_SHOW = {
  password: false,
  confirm_password: false,
};
export {
  ROUTES,
  SUPPLIER_INFO,
  ADMIN_INFO,
  CLIENT_INFO,
  USER_TYPES,
  KEYS,
  EMAIL_FROM,
  LOGIN_FORM,
  NEW_PASSWORD_FORM,
  NEW_PASSWORD_FORM_RESET,
  RESRT_PASSWORD_FORM,
  RESRT_PASSWORD_FORM_RESET,
  SIGNUP_FORM,
  SIGNUP_FORM_SHOW,
};
