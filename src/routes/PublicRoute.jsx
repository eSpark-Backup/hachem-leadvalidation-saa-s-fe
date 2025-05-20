import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import PropTypes from 'prop-types';
import { ROUTES } from '../constants/components/globals/Auth';

/**
 * PublicRoute is a higher-order component that restricts access to public routes
 * (like login or register) when the user is already authenticated.
 *
 * If the user is authenticated, they are redirected to the dashboard.
 * Otherwise, the public route's children are rendered.
 *
 * @component
 * @example
 * <PublicRoute>
 *   <LoginPage />
 * </PublicRoute>
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Components to render if not authenticated
 * @returns {JSX.Element}
 */
const PublicRoute = ({ children }) => {
  const { dashboard } = ROUTES || {};

  // If user is authenticated, redirect to the dashboard
  return isAuthenticated() ? <Navigate to={dashboard} replace /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
