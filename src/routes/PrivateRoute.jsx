import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../utils/auth';
import { ROUTES } from '../constants/components/globals/Auth';

const PrivateRoute = ({ children }) => {
  const { login } = ROUTES || {};
  return isAuthenticated() ? children : <Navigate to={login} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
