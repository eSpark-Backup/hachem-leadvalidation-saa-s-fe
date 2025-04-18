// components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
