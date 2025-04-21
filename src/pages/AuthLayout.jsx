import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import bgImage from '../../public/images/auth/Dashboard.svg';
import AuthLogo from '../components/auth/AuthLogo';
import NavigateButton from '../components/auth/NavigateButton';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <NavigateButton />
      <Grid
        container
        alignItems={'center'}
        justifyContent="center"
        flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
        sx={{
          px: '5%',
          width: '100%',
          height: '100%',
          minHeight: 'calc(100vh - 80px)',
          gap: { xs: '9%', md: '9%' },
          py: { xs: '3.5%', sm: '1.5%' },
        }}
      >
        <AuthLogo />
        <Outlet />
      </Grid>
    </Box>
  );
};

export default AuthLayout;
