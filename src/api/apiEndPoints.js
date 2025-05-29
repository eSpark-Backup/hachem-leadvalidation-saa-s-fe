/**
 * API endpoint paths for multiple operations.
 * These constants are used throughout the application to reference specific routes.
 */

// AUTHENTICATION ENDPOINTS
// POSTS ENDPOINTS
export const REGISTER = '/auth/register';                        // Register a new user
export const VERIFY_EMAIL = '/auth/verify-email';                // Verify user email with verification code
export const RESEND_VERIFICATION = '/auth/resend-verification';  // Resend verification email
export const LOGIN = '/auth/login';                              // Login with email and password
export const REFRESH = '/auth/refresh';                          // Refresh access token
export const LOGOUT = '/auth/logout';                            // Logout user
export const RESET_REQUEST = '/auth/reset-request';              // Request password reset
export const RESET_PASSWORD = '/auth/reset-password';            // Reset password with token
export const GOOGLE = '/auth/google';                            // Authenticate with Google
// GET ENDPOINT
export const PROFILE = '/auth/me';                                    // Get current user information
