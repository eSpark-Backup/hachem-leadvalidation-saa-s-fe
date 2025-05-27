import { Box, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ProfileDropDown from './ProfileDropDown';

import { capitalizeFirstLetter } from '../../utils/globals';

import {
  menuIconStyles,
  titleStyles,
  compactTitleContainer,
  smallTitleStyles,
  idStyles,
  containerStyles,
  leftSectionStyles,
} from '../../styles/components/globals/TopBar';

import { TOP_BAR } from '../../constants/components/globals/TopBar';
import { USER_TYPE } from '../../utils/auth';
import { USER_TYPES } from '../../constants/components/globals/Auth';
import { useSelector } from 'react-redux';

const TopBar = ({ open, setOpenNav }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const { user } = useSelector((state) => state.auth);

  const { comapnayName, ID } = TOP_BAR;

  const userTypeCapitalized =
    USER_TYPE === USER_TYPES.client
      ? USER_TYPES.user
      : capitalizeFirstLetter(USER_TYPE);
  const profileID = user?.id || 'N/A';

  const fullTitle = `${comapnayName} ${userTypeCapitalized} ${ID} ${profileID}`;

  const compactTitle = `${comapnayName} ${userTypeCapitalized} ${ID}`;

  return (
    <Box sx={containerStyles}>
      {/* Left Section: Menu Icon + Title */}
      <Box sx={leftSectionStyles}>
        {!lgUp && (
          <MenuOpenIcon
            sx={menuIconStyles}
            onClick={() => setOpenNav(!open)}
            aria-label="Toggle navigation menu"
          />
        )}
        {!mdDown ? (
          <Typography variant="h6" component="div" sx={titleStyles}>
            {fullTitle}
          </Typography>
        ) : (
          <Box sx={compactTitleContainer}>
            <Typography sx={smallTitleStyles}>{compactTitle}</Typography>
            <Typography sx={idStyles}>{profileID}</Typography>
          </Box>
        )}
      </Box>

      {/* Right Section: Profile Dropdown */}
      <ProfileDropDown />
    </Box>
  );
};

TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpenNav: PropTypes.func.isRequired,
};

export default TopBar;
