import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../utils/auth';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
