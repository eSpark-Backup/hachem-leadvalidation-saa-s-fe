const SIDE_NAV_WIDTH = 0;
const BODY_WIDTH = 280;

// Menus
const SIDE_BAR_MENU_SUPPLIER = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: '/src/assets/images/global/menu-icons/dashboard-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/dashboard-white-icon.svg',
  },
  {
    label: 'Upload Leads',
    path: '/dashboard/upload-leads',
    icon: '/src/assets/images/global/menu-icons/filter-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/filter-white-icon.svg',
  },
  {
    label: 'Reports & Analytics ',
    path: '/dashboard/reports-analytics',
    icon: '/src/assets/images/global/menu-icons/report-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/report-white-icon.svg',
  },
  {
    label: 'Leads Status Tracker ',
    path: '/dashboard/leads-status-tracker',
    icon: '/src/assets/images/global/menu-icons/location-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/location-white-icon.svg',
  },
  {
    label: 'Settings ',
    path: '/dashboard/settings',
    icon: '/src/assets/images/global/menu-icons/setting-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/setting-white-icon.svg',
  },
];

const SIDE_BAR_MENU_ADMIN = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: '/src/assets/images/global/menu-icons/dashboard-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/dashboard-white-icon.svg',
  },
  {
    label: 'Manage Clients',
    path: '/dashboard/manage-clients',
    icon: '/src/assets/images/global/menu-icons/client-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/client-white-icon.svg',
  },
  {
    label: 'Manage Suppliers',
    path: '/dashboard/manage-suppliers',
    icon: '/src/assets/images/global/menu-icons/supplier-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/supplier-white-icon.svg',
  },
  {
    label: 'Lead Monitoring',
    path: '/dashboard/lead-monitoring',
    icon: '/src/assets/images/global/menu-icons/analytics-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/analytics-white-icon.svg',
  },
  {
    label: 'Billing logs & Revenue',
    path: '/dashboard/billing-logs-revenue',
    icon: '/src/assets/images/global/menu-icons/money-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/money-white-icon.svg',
  },
  {
    label: 'System Setting',
    path: '/dashboard/system-setting',
    icon: '/src/assets/images/global/menu-icons/setting-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/setting-white-icon.svg',
  },
  {
    label: 'Klaien Management',
    path: '/dashboard/klaien-management',
    icon: '/src/assets/images/global/menu-icons/call-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/call-white-icon.svg',
  },
];

const SIDE_BAR_MENU_CLIENT = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: '/src/assets/images/global/menu-icons/dashboard-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/dashboard-white-icon.svg',
  },
  {
    label: 'My Leads',
    path: '/dashboard/my-leads',
    icon: '/src/assets/images/global/menu-icons/filter-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/filter-white-icon.svg',
  },
  {
    label: 'Upload Leads',
    path: '/dashboard/upload-leads',
    icon: '/src/assets/images/global/menu-icons/add-filter-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/add-filter-white-icon.svg',
  },
  {
    label: 'Report & Analytics',
    path: '/dashboard/reports-analytics',
    icon: '/src/assets/images/global/menu-icons/report-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/report-white-icon.svg',
  },
  {
    label: 'Lead Scoring Setting',
    path: '/dashboard/lead-scoring-setting',
    icon: '/src/assets/images/global/menu-icons/lead-setting-gray-icon.svg',
    hoverIcon:
      '/src/assets/images/global/menu-icons/lead-setting-white-icon.svg',
  },
  {
    label: 'Settings',
    path: '/dashboard/settings',
    icon: '/src/assets/images/global/menu-icons/setting-gray-icon.svg',
    hoverIcon: '/src/assets/images/global/menu-icons/setting-white-icon.svg',
  },
];

const OTHER_PATHS = [
  {
    label: 'My Leads',
    path: '/dashboard/my-lead-details',
  },
];

const SIDE_BAR_LOGOUT_BUTTON = { logoutBtn: 'Log Out' };

const LOG_OUT_MODAL_INFO = {
  title: 'Logout Confirmation',
  logOutText: 'Are you sure you want to log out?',
  unsavedChanges: 'Any unsaved changes will be lost.',
  cancelBtn: 'Cancel',
  confirmBtn: 'Yes, Log Out',
};

export {
  BODY_WIDTH,
  SIDE_NAV_WIDTH,
  SIDE_BAR_MENU_SUPPLIER,
  SIDE_BAR_MENU_ADMIN,
  SIDE_BAR_MENU_CLIENT,
  LOG_OUT_MODAL_INFO,
  SIDE_BAR_LOGOUT_BUTTON,
  OTHER_PATHS,
};
