import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import KlairnLogo from '/src/assets/images/auth/KlairnLogo.png';

import {
  containerStyle,
  contentWrapperStyle,
  logoImageStyle,
  logoWrapperStyle,
} from '../styles/layouts/PaymentLayout';

/**
 * Layout wrapper for payment-related pages.
 * Displays a centered logo at the top and renders children using React Router's <Outlet />.
 *
 * @component
 * @returns {JSX.Element} A layout with a logo and routed page content.
 */

const PaymentLayout = () => {
  return (
    <Box sx={containerStyle}>
      {/* Logo Section */}
      <Box sx={logoWrapperStyle}>
        <Box alt="logo" component="img" sx={logoImageStyle} src={KlairnLogo} />
      </Box>

      {/* Page Content Section */}
      <Box sx={contentWrapperStyle}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default PaymentLayout;
