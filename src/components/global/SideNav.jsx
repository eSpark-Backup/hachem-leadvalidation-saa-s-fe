import { Backdrop, Drawer, useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import {
  backDropStyles,
  drawerPropsStyles,
  mobileDrawerStyles,
} from '../../styles/components/globals/SideNav';

export const SideNav = ({ open, onClose }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  if (lgUp) {
    return (
      <>
        <Drawer
          anchor="left"
          open
          PaperProps={{
            sx: drawerPropsStyles,
          }}
          variant="permanent"
        >
          <Sidebar setOpenNav={onClose(false)} />
        </Drawer>
      </>
    );
  }

  return (
    <Drawer
      disableScrollLock
      disableEnforceFocus
      disableRestoreFocus
      disableAutoFocus
      anchor="left"
      onClose={onClose}
      open={open}
      ModalProps={{ keepMounted: true }}
      BackdropComponent={(props) => <Backdrop {...props} sx={backDropStyles} />}
      PaperProps={{
        sx: drawerPropsStyles,
      }}
      sx={mobileDrawerStyles}
      variant="temporary"
    >
      <Sidebar setOpenNav={onClose} />
    </Drawer>
  );
};

SideNav.propTypes = {
  open: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
