import AnalyticsGrayIcon from '/src/assets/images/global/menu-icons/analytics-gray-icon.svg';
import AnalyticsWhiteIcon from '/src/assets/images/global/menu-icons/analytics-white-icon.svg';

import CallGrayIcon from '/src/assets/images/global/menu-icons/call-gray-icon.svg';
import CallWhiteIcon from '/src/assets/images/global/menu-icons/call-white-icon.svg';

import ClientGrayIcon from '/src/assets/images/global/menu-icons/client-gray-icon.svg';
import ClientWhiteIcon from '/src/assets/images/global/menu-icons/client-white-icon.svg';

import DashboardGrayIcon from '/src/assets/images/global/menu-icons/dashboard-gray-icon.svg';
import DashboardWhiteIcon from '/src/assets/images/global/menu-icons/dashboard-white-icon.svg';

import FilterGrayIcon from '/src/assets/images/global/menu-icons/filter-gray-icon.svg';
import FilterWhiteIcon from '/src/assets/images/global/menu-icons/filter-white-icon.svg';

import LeadSettingGrayIcon from '/src/assets/images/global/menu-icons/lead-setting-gray-icon.svg';
import LeadSettingWhiteIcon from '/src/assets/images/global/menu-icons/lead-setting-white-icon.svg';

import LocationGrayIcon from '/src/assets/images/global/menu-icons/location-gray-icon.svg';
import LocationWhiteIcon from '/src/assets/images/global/menu-icons/location-white-icon.svg';

import MoneyGrayIcon from '/src/assets/images/global/menu-icons/money-gray-icon.svg';
import MoneyWhiteIcon from '/src/assets/images/global/menu-icons/money-white-icon.svg';

import ReportGrayIcon from '/src/assets/images/global/menu-icons/report-gray-icon.svg';
import ReportWhiteIcon from '/src/assets/images/global/menu-icons/report-white-icon.svg';

import SettingGrayIcon from '/src/assets/images/global/menu-icons/setting-gray-icon.svg';
import SettingWhiteIcon from '/src/assets/images/global/menu-icons/setting-white-icon.svg';

import SupplierGrayIcon from '/src/assets/images/global/menu-icons/supplier-gray-icon.svg';
import SupplierWhiteIcon from '/src/assets/images/global/menu-icons/supplier-white-icon.svg';

const SIDE_NAV_WIDTH = 0;

const BODY_WIDTH = 280;

const SIDE_BAR_MENU_SUPPLIER = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: DashboardGrayIcon,
    hoverIcon: DashboardWhiteIcon,
  },
  {
    label: 'Reports & Analytics ',
    path: '/dashboard/reports-analytics',
    icon: ReportGrayIcon,
    hoverIcon: ReportWhiteIcon,
  },
  {
    label: 'Leads Status Tracker ',
    path: '/dashboard/leads-status-tracker',
    icon: LocationGrayIcon,
    hoverIcon: LocationWhiteIcon,
  },
  {
    label: 'Settings',
    path: '/dashboard/settings',
    icon: SettingGrayIcon,
    hoverIcon: SettingWhiteIcon,
  },
];

const SIDE_BAR_MENU_ADMIN = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: DashboardGrayIcon,
    hoverIcon: DashboardWhiteIcon,
  },
  {
    label: 'Manage Clients',
    path: '/dashboard/manage-clients',
    icon: ClientGrayIcon,
    hoverIcon: ClientWhiteIcon,
  },
  {
    label: 'Manage Suppliers',
    path: '/dashboard/manage-suppliers',
    icon: SupplierGrayIcon,
    hoverIcon: SupplierWhiteIcon,
  },
  {
    label: 'Lead Monitoring',
    path: '/dashboard/lead-monitoring',
    icon: AnalyticsGrayIcon,
    hoverIcon: AnalyticsWhiteIcon,
  },
  {
    label: 'Billing logs & Revenue',
    path: '/dashboard/billing-logs-revenue',
    icon: MoneyGrayIcon,
    hoverIcon: MoneyWhiteIcon,
  },
  {
    label: 'System Setting',
    path: '/dashboard/system-setting',
    icon: SettingGrayIcon,
    hoverIcon: SettingWhiteIcon,
  },
  {
    label: 'Klaien Management',
    path: '/dashboard/klaien-management',
    icon: CallGrayIcon,
    hoverIcon: CallWhiteIcon,
  },
];

const SIDE_BAR_MENU_CLIENT = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: DashboardGrayIcon,
    hoverIcon: DashboardWhiteIcon,
  },
  {
    label: 'My Leads',
    path: '/dashboard/my-leads',
    icon: FilterGrayIcon,
    hoverIcon: FilterWhiteIcon,
  },
  {
    label: 'Report & Analytics',
    path: '/dashboard/reports-analytics',
    icon: ReportGrayIcon,
    hoverIcon: ReportWhiteIcon,
  },
  {
    label: 'Lead Scoring Setting',
    path: '/dashboard/lead-scoring-setting',
    icon: LeadSettingGrayIcon,
    hoverIcon: LeadSettingWhiteIcon,
  },
  {
    label: 'Settings',
    path: '/dashboard/settings',
    icon: SettingGrayIcon,
    hoverIcon: SettingWhiteIcon,
  },
];

const OTHER_PATHS = [
  {
    label: 'My Leads',
    path: '/dashboard/my-lead-details',
  },
  {
    label: 'Dashboard',
    path: '/dashboard/available-leads-deails',
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

const LOW_CREDITS = true;

const SETTINGS_PATH = '/dashboard/settings';

export {
  BODY_WIDTH,
  SIDE_NAV_WIDTH,
  SIDE_BAR_MENU_SUPPLIER,
  SIDE_BAR_MENU_ADMIN,
  SIDE_BAR_MENU_CLIENT,
  LOG_OUT_MODAL_INFO,
  SIDE_BAR_LOGOUT_BUTTON,
  LOW_CREDITS,
  SETTINGS_PATH,
  OTHER_PATHS,
};
