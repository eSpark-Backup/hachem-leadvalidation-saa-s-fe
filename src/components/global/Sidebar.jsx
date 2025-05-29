import { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import DashboardLogo from '/assets/images/global/dashboard-logo.svg';
import bar from '/assets/images/global/bar.svg';

import { menuItems } from '../../utils/auth';
import {
  logoContainerStyles,
  menuWrapperStyles,
  menuItemStyles,
  menuItemContentStyles,
  logoutBoxStyles,
  dialogTitleStyles,
  dialogContentStyles,
  logoutBtnStyles,
  growBoxSTyles,
  labelStyles,
  logoStyles,
} from '../../styles/components/globals/Sidebar';
import {
  LOG_OUT_MODAL_INFO,
  LOW_CREDITS,
  SETTINGS_PATH,
  OTHER_PATHS,
  SIDE_BAR_LOGOUT_BUTTON,
} from '../../constants/components/globals/SideBar';
import DotBadge from './DotBadge';
import { USER_TYPES } from '../../constants/components/globals/Auth';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../../redux/slices/auth/authApiSlice';
import { handleLogoutMutation } from '../../services/auth';

const Sidebar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const client = USER_TYPES?.client;

  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    const res = await handleLogoutMutation(logout);
    if (!res) return;
  };

  const openLogoutModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Box sx={logoContainerStyles}>
        <Link to="/dashboard">
          <img src={DashboardLogo} style={logoStyles} alt="Dashboard Logo" />
        </Link>
      </Box>

      {/* Menu */}
      <Box sx={growBoxSTyles}>
        <Box sx={menuWrapperStyles}>
          {menuItems(user?.role)?.map((item, index) => (
            <Link
              to={item?.path}
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <Box
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={menuItemStyles(
                  item?.path === pathname ||
                    OTHER_PATHS.some(
                      (p) => p.label === item.label && p.path === pathname
                    )
                )}
              >
                <Box sx={menuItemContentStyles}>
                  {item?.path.startsWith(SETTINGS_PATH) &&
                  user?.role === client &&
                  LOW_CREDITS ? (
                    <DotBadge
                      color={'#FF0000'}
                      icon={
                        <img
                          src={
                            hoveredIndex === index || item?.path === pathname
                              ? item?.hoverIcon
                              : item?.icon
                          }
                          alt={item?.label}
                        />
                      }
                    />
                  ) : (
                    <img
                      src={
                        hoveredIndex === index ||
                        item?.path === pathname ||
                        OTHER_PATHS.some(
                          (p) => p.label === item.label && p.path === pathname
                        )
                          ? item?.hoverIcon
                          : item?.icon
                      }
                      alt={item?.label}
                    />
                  )}

                  <Typography
                    sx={{
                      ...labelStyles,
                      color:
                        item?.path === pathname ||
                        OTHER_PATHS.some(
                          (p) => p.label === item.label && p.path === pathname
                        )
                          ? 'white'
                          : '77797D',
                    }}
                  >
                    {item?.label}
                  </Typography>
                </Box>

                <img src={bar} alt="bar" />
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

      <Box sx={logoutBoxStyles} onClick={openLogoutModal}>
        <LogoutIcon />

        <Typography sx={logoutBtnStyles}>
          {SIDE_BAR_LOGOUT_BUTTON.logoutBtn}
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="logout-dialog-title"
      >
        <DialogTitle id="logout-dialog-title">
          <Typography variant="h3" sx={dialogTitleStyles}></Typography>
        </DialogTitle>

        <DialogContent>
          <Typography sx={dialogContentStyles}>
            {LOG_OUT_MODAL_INFO?.logOutText}
            <br />
            {LOG_OUT_MODAL_INFO?.unsavedChanges}
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            {LOG_OUT_MODAL_INFO?.cancelBtn}
          </Button>

          <Button
            onClick={handleLogout}
            color="error"
            variant="contained"
            autoFocus
            disabled={isLoading}
            sx={{ width: '113px' }}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: ' #444444' }} />
            ) : (
              LOG_OUT_MODAL_INFO?.confirmBtn
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Sidebar;
