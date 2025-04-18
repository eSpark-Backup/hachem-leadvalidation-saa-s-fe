import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Stack } from '@mui/material';
import bgImage from '../../public/images/auth/Dashboard.svg';
import AuthLogo from '../components/auth/AuthLogo';

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden',
      }}
    >
      <Grid
        container
        alignItems={'center'}
        justifyContent="center"
        flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
        sx={{
          height: '100vh',
          gap: { xs: '0', sm: '9%' },
          overflow: 'hidden',
          p: '5%',
        }}
      >
        <Stack
          spacing={2}
          direction={'row'}
          position={'absolute'}
          sx={{ top: 20, right: 20 }}
        >
          <Button
            variant="loginButton"
            disableRipple
            onClick={() => navigate('/login')}
            sx={{
              py: 1.2,
              px: 2.8,
            }}
          >
            Login
          </Button>
          <Button
            variant="signupButton"
            disableRipple
            onClick={() => navigate('/signup')}
            sx={{
              py: 1.2,
              px: 2.5,
            }}
          >
            Sign up
          </Button>
        </Stack>
        <AuthLogo />
        <Outlet />
      </Grid>
    </Box>
  );
};

export default AuthLayout;
