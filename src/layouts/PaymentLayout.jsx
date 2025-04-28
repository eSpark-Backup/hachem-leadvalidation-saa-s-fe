import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const PaymentLayout = () => {
  return (
    <Box sx={{ backgroundColor: '#F4F7FE' }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '64px',
          p: 3.5,
          maxWidth: '1400px',
          mx: 'auto',
        }}
      >
        <Box
          alt="logo"
          component={'img'}
          sx={{ width: '120px', height: '34px' }}
          src="/src/assets/images/auth/Group.png"
        />
      </Box>
      <Box
        sx={{
          width: '85%',
          minHeight: 'calc(100vh - 97px)',
          display: 'flex',
          flexDirection: 'column',
          py: { xs: 0, md: 1.5 },
          maxWidth: '1190px',
          mx: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default PaymentLayout;
