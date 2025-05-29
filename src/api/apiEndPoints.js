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
