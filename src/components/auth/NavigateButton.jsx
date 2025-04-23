import { Button, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';

const NavigateButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { login: loginRoute, signup: signRoute } = ROUTES || {};
  const { login: loginForm, signup: signupForm } = AUTH_FORMS || {};

  return (
    <Stack
      spacing={0}
      direction={'row'}
      position={'relative'}
      sx={{ width: '100%', justifyContent: 'flex-end' }}
    >
      <Button
        variant="loginButton"
        disableRipple
        onClick={() =>
          navigate(pathname === loginRoute ? signRoute : loginRoute)
        }
        sx={{
          width: '83px',
          height: '44px',
          mr: { xs: 1.5, sm: 2 },
          mt: { xs: 1.5, sm: 2.8 },
          display: pathname === loginRoute ? 'none' : 'flex',
        }}
      >
        {pathname === loginRoute ? signupForm?.title : loginForm?.title}
      </Button>
      <Button
        variant="signupButton"
        disableRipple
        onClick={() =>
          navigate(pathname === signRoute ? loginRoute : signRoute)
        }
        sx={{
          width: '95px',
          height: '44px',
          mt: { xs: 1.5, sm: 2.8 },
          mr: { xs: 1.5, sm: 2.8 },
          display: pathname?.includes(signRoute) ? 'none' : 'flex',
        }}
      >
        {pathname === signRoute ? loginForm?.title : signupForm?.title}
      </Button>
    </Stack>
  );
};

export default NavigateButton;
