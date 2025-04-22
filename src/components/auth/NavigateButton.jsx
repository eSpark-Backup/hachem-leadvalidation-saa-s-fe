import { Button, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigateButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Stack
      spacing={0}
      direction={'row'}
      position={'relative'}
      display={pathname === '/login' ? 'flex' : 'flex'}
      sx={{ width: '100%', justifyContent: 'flex-end' }}
    >
      <Button
        variant="loginButton"
        disableRipple
        onClick={() => navigate(pathname === '/login' ? '/signup' : '/login')}
        sx={{
          width: '83px',
          height: '44px',
          mr: { xs: 1.5, sm: 2 },
          mt: { xs: 1.5, sm: 2.8 },
          display: pathname === '/login' ? 'none' : 'flex',
        }}
      >
        {pathname === '/login' ? 'Sign up' : 'log in'}
      </Button>
      <Button
        variant="signupButton"
        disableRipple
        onClick={() => navigate(pathname === '/signup' ? '/login' : '/signup')}
        sx={{
          width: '95px',
          height: '44px',
          mt: { xs: 1.5, sm: 2.8 },
          mr: { xs: 1.5, sm: 2.8 },
          display: pathname?.includes('/signup') ? 'none' : 'flex',
        }}
      >
        {pathname === '/signup' ? 'Log in' : 'Sign up'}
      </Button>
    </Stack>
  );
};

export default NavigateButton;
