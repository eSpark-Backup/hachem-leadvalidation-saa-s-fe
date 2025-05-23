import { Button, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';
import {
  stackStyles,
  loginButtonStyles,
  signupButtonStyles,
} from '../../constants/components/auth/NavigationButton';

const { login: LOGIN_ROUTE, signup: SIGNUP_ROUTE } = ROUTES || {};

const NavigateButton = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isLoginPage = pathname === LOGIN_ROUTE;

  const isSignupPage = pathname === SIGNUP_ROUTE;

  return (
    <Stack spacing={0} direction="row" position="relative" sx={stackStyles}>
      {!isLoginPage && (
        <Button
          variant="loginButton"
          disableRipple
          onClick={() => navigate(LOGIN_ROUTE)}
          sx={loginButtonStyles}
        >
          {AUTH_FORMS?.login?.title || 'Login'}
        </Button>
      )}
      {!isSignupPage && (
        <Button
          variant="signupButton"
          disableRipple
          onClick={() => navigate(SIGNUP_ROUTE)}
          sx={signupButtonStyles}
        >
          {AUTH_FORMS?.signup?.title || 'Signup'}
        </Button>
      )}
    </Stack>
  );
};

export default NavigateButton;
