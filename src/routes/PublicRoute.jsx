// components/PublicRoute.js
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
