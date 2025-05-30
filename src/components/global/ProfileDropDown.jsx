import { useState } from 'react';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
} from '@mui/material';
import { PROFILE_DROPDOWN_STYLE } from '../../styles/components/globals/ProfileDropDown';
import PropTypes from 'prop-types';

const ProfileDropDown = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event?.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const { defaultImage, welcomeText, user, arrowImage, menuItems } = data || {};
  const {
    profileDropdownStyle,
    avatarStyle,
    contentBoxStyle,
    welcomeTextStyle,
    userTextStyle,
    arrowImageStyle,
    menuStyle,
  } = PROFILE_DROPDOWN_STYLE || {};

  return (
    <Box sx={{ position: 'relative' }}>
      <Box onClick={handleClick} sx={profileDropdownStyle}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Avatar alt={user} sx={avatarStyle} src={defaultImage} />
          <Box sx={contentBoxStyle}>
            <Typography sx={welcomeTextStyle}>{welcomeText}</Typography>
            <Typography sx={userTextStyle}>{user}</Typography>
          </Box>
        </Box>
        <Box component={'img'} src={arrowImage} sx={arrowImageStyle(open)} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        id="account-menu"
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 3,
          sx: menuStyle,
        }}
      >
        {menuItems.map((item, i) =>
          item === 'divider' ? (
            <Divider key={i} />
          ) : (
            <MenuItem key={i}>
              {item?.icon && <ListItemIcon>{item?.icon}</ListItemIcon>}
              {item?.label}
            </MenuItem>
          )
        )}
      </Menu>
    </Box>
  );
};

ProfileDropDown.propTypes = {
  data: PropTypes.object,
};

export default ProfileDropDown;
