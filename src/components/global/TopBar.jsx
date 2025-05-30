import { Box, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ProfileDropDown from './ProfileDropDown';

import { capitalizeFirstLetter } from '../../utils/globals';

import {
  menuIconStyles,
  titleStyles,
  compactTitleContainer,
  containerStyles,
  leftSectionStyles,
} from '../../styles/components/globals/TopBar';

import { TOP_BAR } from '../../constants/components/globals/TopBar';
import { PROFILE, USER_TYPE } from '../../utils/auth';
import { USER_TYPES } from '../../constants/components/globals/Auth';
import { PROFILE_DROP_DOWN } from '../../constants/components/globals/ProfileDropDown';
import TopBarSearch from './TopBarSearch';
import { TOP_BAR_SEARCH_DATA } from '../../constants/components/globals/TopBarSearch';

const TopBar = ({ open, setOpenNav }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const { comapnayName, ID } = TOP_BAR;
  const userTypeCapitalized =
    USER_TYPE === USER_TYPES.client
      ? USER_TYPES.user
      : capitalizeFirstLetter(USER_TYPE);
  const profileID = PROFILE.id || 'N/A';

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
          <Typography variant="h6" sx={titleStyles}>
            {fullTitle}
          </Typography>
        ) : (
          <Box sx={compactTitleContainer}>
            <Typography variant="h6" sx={titleStyles}>
              {compactTitle}
            </Typography>
            <Typography variant="h6" sx={titleStyles}>
              {profileID}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Right Section: Profile Dropdown */}
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 'auto' }}
      >
        <TopBarSearch data={TOP_BAR_SEARCH_DATA} />
        <ProfileDropDown data={PROFILE_DROP_DOWN} />
      </Box>
    </Box>
  );
};

TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpenNav: PropTypes.func.isRequired,
};

export default TopBar;
