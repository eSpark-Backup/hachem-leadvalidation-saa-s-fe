import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../utils/auth';
import { HOME_PAGE } from '../constants/pages/Home';

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
      <h2>{HOME_PAGE.title}</h2>
      {/* Admin login button */}
      <Button onClick={() => navigate(HOME_PAGE.btnLink)}>
        {HOME_PAGE.btnTitle}
      </Button>
      <br />
      {/* Logout button */}
      <Button onClick={() => handleLogout(navigate)}>
        {HOME_PAGE.logoutBtn}
      </Button>
    </div>
  );
};

export default Login;
