import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const AuthLogo = () => {
  const { pathname } = useLocation();
  return (
    <Box
      component={'img'}
      src="/src/assets/images/auth/Group.png"
      sx={{
        width: pathname === '/' ? '55%' : '35%',
        maxWidth: pathname === '/' ? '512px' : '360px',
        height: 'auto',
        position: 'relative',
        aspectRatio: pathname === '/' ? '512 / 145' : '360 / 100',
        mx: { xs: 2, sm: 0 },
        mt: {
          xs: pathname === '/' ? 'calc(-100vh * 0.15)' : 'auto',
          sm: `calc(-100vh * ${pathname === '/' ? 0.19 : 0.1})`,
        },
        mb: {
          xs: pathname === '/' ? 0 : '6%',
          sm: 0,
        },
      }}
    />
  );
};

export default AuthLogo;
