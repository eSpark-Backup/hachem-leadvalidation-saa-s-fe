// components/PrivateRoute.js

import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../utils/auth';
import { ROUTES } from '../constants/components/globals/Auth';

/**
 * PrivateRoute is a higher-order component that protects private routes
 * (like dashboard or user profile) from unauthenticated access.
 *
 * If the user is authenticated, the protected component is rendered.
 * Otherwise, the user is redirected to the login page.
 *
 * @component
 * @example
 * <PrivateRoute>
 *   <DashboardPage />
 * </PrivateRoute>
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Components to render if authenticated
 * @returns {JSX.Element}
 */
const PrivateRoute = ({ children }) => {
  const { login } = ROUTES || {};

  // If user is not authenticated, redirect to the login page
  return isAuthenticated() ? children : <Navigate to={login} replace />;
};

// Prop types validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
