// layouts/AuthLayout.js

import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import bgImage from '../assets/images/auth/Dashboard.svg';
import AuthLogo from '../components/auth/AuthLogo';
import NavigateButton from '../components/auth/NavigateButton';
import {
  gridContainerStyle,
  containerStyle,
} from '../styles/layouts/AuthLayout';

/**
 * Layout for authentication pages like login, register, etc.
 * Includes a background image, a logo, and dynamic routed content.
 *
 * @component
 * @returns {JSX.Element} AuthLayout wrapper
 */

const AuthLayout = () => {
  return (
    <Box sx={containerStyle(bgImage)}>
      {/* Navigation button (e.g., back to home or login switch) */}
      <NavigateButton />

      {/* Main content area: logo + auth form */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
        sx={gridContainerStyle}
      >
        <AuthLogo />
        <Outlet />
      </Grid>
    </Box>
  );
};

export default AuthLayout;
