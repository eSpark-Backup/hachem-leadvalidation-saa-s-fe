import { Box, useMediaQuery, useTheme } from '@mui/system';
import { useEffect, useState } from 'react';
import { PROFILE_DROP_DOWN } from '../../constants/components/globals/ProfileDropDown';
import {
  ClickAwayListener,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  clickableBoxStyles,
  userInfoBoxStyles,
  dropdownMenuStyles,
  menuItemStyles,
  dropdownBoxStyles,
  innerRowStyles,
  containerBoxStyles,
  textFieldStyles,
  welcomdeTextStyles,
  profileNameStyles,
} from '../../styles/components/globals/ProfileDropDown';
import { PROFILE } from '../../utils/auth';
import { useSelector } from 'react-redux';

const ProfileDropDown = () => {
  const [open, setOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const [filteredData, setFilteredData] = useState([]);
  console.log(filteredData);

  const theme = useTheme();

  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { user } = useSelector((state) => state.auth);

  const mockData = [];

  const usersOptionsDropDownOptions = [];
  useEffect(() => {
    setFilteredData(
      searchTerm.trim() === ''
        ? []
        : mockData?.filter((item) =>
            item?.toLowerCase()?.includes(searchTerm?.toLowerCase())
          )
    );
  }, [searchTerm]);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleCloseChartModal = () => setOpen(false);

  const handleClear = () => setSearchTerm('');

  return (
    <Box sx={containerBoxStyles}>
      <Box sx={innerRowStyles}>
        {!mdDown && (
          <TextField
            autoFocus={!lgUp}
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={textFieldStyles}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear} edge="end">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}

        <ClickAwayListener onClickAway={handleCloseChartModal}>
          <Box sx={dropdownBoxStyles(lgUp)}>
            <Box onClick={handleToggle} sx={clickableBoxStyles}>
              <Box sx={userInfoBoxStyles}>
                <img src={PROFILE.profileImage} alt="Profile" />
                {lgUp && (
                  <>
                    <Box>
                      <Typography sx={welcomdeTextStyles}>
                        {PROFILE_DROP_DOWN.welcomeText}
                      </Typography>
                      <Typography sx={profileNameStyles}>
                        {user?.fullname}
                      </Typography>
                    </Box>
                    <ExpandMoreIcon />
                  </>
                )}
              </Box>
            </Box>
            {open && (
              <Box sx={dropdownMenuStyles}>
                {usersOptionsDropDownOptions?.map((item, index) => (
                  <MenuItem
                    key={index}
                    sx={menuItemStyles}
                    onClick={handleCloseChartModal}
                  >
                    {item?.label}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>
        </ClickAwayListener>
      </Box>
    </Box>
  );
};

export default ProfileDropDown;
