import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const AuthLogo = () => {
  const { pathname } = useLocation();
  return (
    <Box
      component={'img'}
      src="/images/auth/Group.png"
      sx={{
        width: pathname === '/login' ? '35%' : '55%',
        maxWidth: pathname === '/login' ? '360px' : '512px',
        height: 'auto',
        position: 'relative',
        aspectRatio: pathname === '/login' ? '360 / 100' : '512 / 145',
        mx: { xs: 2, sm: 0 },
        mt: {
          xs: pathname === '/login' ? 'auto' : 'calc(-100vh * 0.12)',
          sm: `calc(-100vh * ${pathname === '/login' ? 0.05 : 0.13})`,
        },
      }}
    />
  );
};

export default AuthLogo;
