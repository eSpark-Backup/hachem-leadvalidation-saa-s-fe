/**
 * API endpoint paths for multiple operations.
 * These constants are used throughout the application to reference specific routes.
 */

// AUTHENTICATION ENDPOINTS
// POSTS ENDPOINTS
export const REGISTER = '/auth/register'; // Register a new user
export const VERIFY_EMAIL = '/auth/verify-email'; // Verify user email with verification code
export const RESEND_VERIFICATION = '/auth/resend-verification'; // Resend verification email
export const LOGIN = '/auth/login'; // Login with email and password
export const REFRESH = '/auth/refresh'; // Refresh access token
export const LOGOUT = '/auth/logout'; // Logout user
export const RESET_REQUEST = '/auth/reset-request'; // Request password reset
export const RESET_PASSWORD = '/auth/reset-password'; // Reset password with token
export const GOOGLE = '/auth/google'; // Authenticate with Google
// GET ENDPOINT
export const PROFILE = '/auth/me'; // Get current user information

// Client API Endpoints
export const CLIENTS_SETTINGS = 'api/client/settings'; // Get client settings
export const CLIENTS_LEAD = 'api/client/lead'; // Get list of clients
export const CLIENTS_STATS = 'api/client/stats'; // Get client statistics
export const CLIENTS_STATS_BULK = 'api/client/stats/bulk'; // Get bulk client statistics
export const CLIENTS_LEAD_STATS = 'api/client/lead-stats'; // Get client statistics
export const CLIENTS_LEAD_STATS_BULK = 'api/client/lead-stats/bulk'; // Get bulk client statistics
export const CLIENTS_LEAD_STATS_SUMMARY = 'api/client/lead-stats-summary'; // Get client lead statistics summary
export const CLIENTS_REPORTS_ANALYTICS = 'api/supplier/report-analytics'; // Get client reports analytics
export const CLIENTS_LEADS_SCORING_SETTING = 'api/client/lead-scoring-setting'; // Get lead scoring settings

// Supplier API Endpoints
export const SUPPLIER_DASHBOARD = 'api/supplier/dashboard'; // Get supplier dashboard data
export const SUPPLIER_LEADS = 'api/supplier/leads'; // Get list of supplier leads
export const SUPPLIER_LEADS_STATUS_TRACKER =
  'api/supplier/leads-status-tracker'; // Get supplier leads status tracker
export const SUPPLIER_REPORTS_ANALYTICS = 'api/supplier/report-analytics'; // Get supplier reports analytics
export const SUPPLIER_SETTINGS = 'api/supplier/settings'; // Get client settings

// Admin API Endpoints
export const ADMIN_DASHBOARD = 'api/supplier/leads-stats'; // Get admin dashboard data
export const ADMIN_CLIENTS = 'api/admin/clients'; // Get list of clients
export const ADMIN_SUPPLIERS = 'api/admin/suppliers'; // Get list of suppliers
export const ADMIN_LEAD_MONITORING = 'api/admin/lead-monitoring'; // Get lead monitoring data
export const ADMIN_BILLING_LOGS_REVENUE = 'api/admin/billing-logs-revenue'; // Get billing logs revenue data
export const ADMIN_SYSTEM_SETTINGS = 'api/admin/system-settings'; // Get system settings
export const ADMIN_KLAIRN_CALL_MANAGMENT = 'api/admin/klarna-call-management'; // Get Klarna call management data
