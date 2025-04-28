import {
  ADMIN_INFO,
  CLIENT_INFO,
  ROUTES,
  SUPPLIER_INFO,
  USER_TYPES,
  KEYS,
} from '../constants/components/globals/Auth';
import {
  SIDE_BAR_MENU_ADMIN,
  SIDE_BAR_MENU_CLIENT,
  SIDE_BAR_MENU_SUPPLIER,
} from '../constants/components/globals/SideBar';

/**
 * @function handleLoginasAdmin
 * @description Simulates login as admin by saving a token and userType to localStorage.
 * Navigates to the dashboard.
 */
const handleLoginAsAdmin = (navigate) => {
  localStorage.setItem('token', KEYS.tokenKey);
  localStorage.setItem('userType', USER_TYPES.admin);
  navigate(ROUTES.dashboard);
};

/**
 * @function handleLoginAsClient
 * @description Simulates login as client by saving a token and userType to localStorage.
 * Navigates to the dashboard.
 */
const handleLoginAsClient = (navigate) => {
  localStorage.setItem('token', KEYS.tokenKey);
  localStorage.setItem('userType', USER_TYPES.client);
  navigate(ROUTES.dashboard);
};

/**
 * @function handleLoginasSupplier
 * @description Simulates login as supplier by saving a token and userType to localStorage.
 * Navigates to the dashboard.
 */
const handleLoginAsSupplier = (navigate) => {
  localStorage.setItem('token', KEYS.tokenKey);
  localStorage.setItem('userType', USER_TYPES.supplier);
  navigate(ROUTES.dashboard);
};

/**
 * @function handleLogout
 * @description Logs the user out by removing the token and userType from localStorage.
 * Navigates to the homepage.
 */
const handleLogout = (navigate) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userType');
  navigate(ROUTES.login);
};

const TOKEN = localStorage.getItem('token');
const USER_TYPE = localStorage.getItem('userType');
const MENU_ITEMS =
  USER_TYPE === USER_TYPES.supplier
    ? SIDE_BAR_MENU_SUPPLIER
    : USER_TYPE === USER_TYPES.client
      ? SIDE_BAR_MENU_CLIENT
      : SIDE_BAR_MENU_ADMIN;

const PROFILE =
  USER_TYPE === USER_TYPES.supplier
    ? SUPPLIER_INFO
    : USER_TYPE === USER_TYPES.client
      ? CLIENT_INFO
      : ADMIN_INFO;

const isAuthenticated = () => {
  return localStorage.getItem('token'); 
};

export {
  handleLoginAsAdmin,
  handleLoginAsClient,
  handleLoginAsSupplier,
  handleLogout,
  isAuthenticated,
  MENU_ITEMS,
  TOKEN,
  USER_TYPE,
  PROFILE,
};
