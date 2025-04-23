// components/PublicRoute.js
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import PropTypes from 'prop-types';
import { ROUTES } from '../constants/components/globals/Auth';

const PublicRoute = ({ children }) => {
  const { dashboard } = ROUTES || {};
  return isAuthenticated() ? <Navigate to={dashboard} replace /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
