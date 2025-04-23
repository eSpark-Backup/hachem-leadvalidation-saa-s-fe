import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  handleLoginAsAdmin,
  handleLoginAsSupplier,
  handleLoginAsClient,
  handleLogout,
} from '../utils/auth';
import { LOGIN_PAGE } from '../constants/pages/Login';

/**
 * @component Login
 * @description Renders a basic login screen with buttons to log in as different user types or log out.
 * Uses localStorage to simulate auth and redirects accordingly.
 *
 * @returns {JSX.Element} The login interface with admin, client, supplier login, and logout options.
 */
const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{LOGIN_PAGE.title}</h2>

      {/* Admin login button */}
      <Button onClick={() => handleLoginAsAdmin(navigate)}>
        {LOGIN_PAGE.adminBtnTitle}
      </Button>
      <br />

      {/* Client login button */}
      <Button onClick={() => handleLoginAsClient(navigate)}>
        {LOGIN_PAGE.clientBtnTitle}
      </Button>
      <br />

      {/* Supplier login button */}
      <Button onClick={() => handleLoginAsSupplier(navigate)}>
        {LOGIN_PAGE.supplierBtnTitle}
      </Button>
      <br />

      {/* Logout button */}
      <Button onClick={() => handleLogout(navigate)}>
        {LOGIN_PAGE.logoutBtnTitle}
      </Button>
    </div>
  );
};

export default Login;
