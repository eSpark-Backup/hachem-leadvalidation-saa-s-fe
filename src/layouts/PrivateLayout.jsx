'use client';

import { Box } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '/src/components/global/SideNav';
import TopBar from '/src/components/global/TopBar';
import {
  LayoutBodyRoot,
  LayoutContainer,
  LayoutRoot,
  privateLayoutBoxStyles,
  privateLayoutOutletBoxStyles,
} from '/src/styles/layouts/PrivateLayout';

/**
 * PrivateLayout component wraps all authenticated (private) pages.
 * It provides a common layout structure with side navigation,
 * a top bar, and dynamic route outlet.
 *
 * Features:
 * - Responsive sidebar toggle
 * - Closes sidebar on route change
 * - Applies consistent layout styling from MUI and custom styles
 *
 * @component
 * @example
 * <PrivateLayout />
 *
 * @returns {JSX.Element} The wrapped layout for private routes
 */
const PrivateLayout = () => {
  const [openNav, setOpenNav] = useState(false);

  /**
   * Closes the sidebar navigation.
   * Memoized to avoid unnecessary re-renders.
   */
  const handlePathnameChange = useCallback(() => {
    setOpenNav(false);
  }, []);

  /**
   * Closes the sidebar whenever the route changes.
   * Acts like componentDidMount + componentDidUpdate (on handlePathnameChange change).
   */
  useEffect(() => {
    handlePathnameChange();
  }, [handlePathnameChange]);

  return (
    <>
      {/* Sidebar component */}
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />

      {/* Main layout wrapper */}
      <LayoutRoot>
        <LayoutBodyRoot>
          <LayoutContainer>
            <Box sx={privateLayoutBoxStyles}>
              {/* Top bar with hamburger/menu toggle */}
              <TopBar open={openNav} setOpenNav={setOpenNav} />

              {/* Render nested routes inside this layout */}
              <Box sx={privateLayoutOutletBoxStyles}>
                <Outlet />
              </Box>
            </Box>
          </LayoutContainer>
        </LayoutBodyRoot>
      </LayoutRoot>
    </>
  );
};

export default PrivateLayout;
