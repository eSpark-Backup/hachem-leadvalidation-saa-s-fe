'use client';
import { Box } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '../components/global/SideNav';
import TopBar from '../components/global/TopBar';
import {
  LayoutBodyRoot,
  LayoutContainer,
  LayoutRoot,
  privateLayoutBoxStyles,
  privateLayoutOutletBoxStyles,
} from '../styles/layouts/PrivateLayout';

const PrivateLayout = () => {
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(() => {
    setOpenNav(false);
  }, []);

  useEffect(() => {
    handlePathnameChange();
  }, [handlePathnameChange]);

  return (
    <>
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutBodyRoot>
          <LayoutContainer>
            <Box sx={privateLayoutBoxStyles}>
              <TopBar open={openNav} setOpenNav={setOpenNav} />
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
