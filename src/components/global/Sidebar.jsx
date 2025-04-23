import { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoutIcon from '@mui/icons-material/Logout';
import DashboardLogo from '../../assets/images/global/dashboard-logo.svg';
import bar from '../../assets/images/global/bar.svg';

import { handleLogout, MENU_ITEMS } from '../../utils/auth';
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
  SIDE_BAR_LOGOUT_BUTTON,
} from '../../constants/components/globals/SideBar';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

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
          {MENU_ITEMS?.map((item, index) => (
            <Link
              to={item?.path}
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <Box
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={menuItemStyles}
              >
                <Box sx={menuItemContentStyles}>
                  <img
                    src={hoveredIndex === index ? item?.hoverIcon : item?.icon}
                    alt={item?.label}
                  />
                  <Typography sx={labelStyles}>{item?.label}</Typography>
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
            onClick={() => handleLogout(navigate)}
            color="error"
            variant="contained"
            autoFocus
          >
            {LOG_OUT_MODAL_INFO?.confirmBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.node.isRequired,
  setOpenNav: PropTypes.node.isRequired,
  path: PropTypes.node.isRequired,
};

export default Sidebar;
