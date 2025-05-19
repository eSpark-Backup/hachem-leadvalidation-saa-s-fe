import { useState } from 'react';
import { getCountries } from 'react-phone-number-input/input';
import { Menu, MenuItem, Avatar, Typography, Box } from '@mui/material';
import { APP_COUNTRY_DROPDOWN_STYLE } from '../../constants/components/globals/AppCountryDropdown';
import TooltipText from './TooltipText';
import LanguageIcon from '@mui/icons-material/Language';
import PropTypes from 'prop-types';
import DownArrow from '/src/assets/images/payment/down_arrow.png';

const AppCountryDropdown = ({ title, paymentFormData, onChange, labels }) => {
  const [value, setvalue] = useState();

  const {
    titleStyle,
    selectBoxStyle,
    selectFlagBoxStyle,
    selectImageStyle,
    selectTypoBoxStyle,
    selectTypoStyle,

    // options styling
    menuStyle,
    optionBoxStyle,
    optionLabelStyle,
    optionScrollBoxStyle,
  } = APP_COUNTRY_DROPDOWN_STYLE || {};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const countries = getCountries();

  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleCloseChartModal = (country) => {
    if (country) {
      setvalue(country);
      onChange({
        ...paymentFormData,
        country: labels[country],
      });
    }
    setAnchorEl(null);
  };

  return (
    <Box display={'flex'} flexDirection={'column'} gap={1}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Box onClick={handleClick} sx={selectBoxStyle}>
        {value ? (
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={selectFlagBoxStyle}>
              <Avatar
                src={`https://flagcdn.com/w40/${value?.toLowerCase()}.png`}
                sx={{ width: 20, height: 20 }}
              />
              <img
                width={14}
                height={8}
                style={{ marginTop: '2px' }}
                src={DownArrow}
              />
            </Box>
            <Box sx={selectTypoBoxStyle}>
              <TooltipText
                variant="h6"
                maxLength={18}
                text={labels[value]}
                typographyStyle={selectTypoStyle}
              />
            </Box>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={selectFlagBoxStyle}>
              <LanguageIcon sx={{ width: 24, height: 24 }} />
              <img
                width={14}
                height={8}
                src={DownArrow}
                style={{ marginTop: '2px' }}
              />
            </Box>
            <Box sx={selectTypoBoxStyle}>
              <Typography
                variant="h6"
                sx={{ ...selectTypoStyle, color: '#475569', opacity: 0.5 }}
              >
                Select a country
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleCloseChartModal()}
        PaperProps={{
          sx: { ...menuStyle, ...optionScrollBoxStyle },
        }}
      >
        {countries?.map((country) => (
          <MenuItem
            key={country}
            onClick={() => handleCloseChartModal(country)}
            sx={optionBoxStyle}
          >
            <Avatar
              src={`https://flagcdn.com/w40/${country?.toLowerCase()}.png`}
              sx={selectImageStyle}
            />
            <Typography variant="h6" sx={optionLabelStyle}>
              {labels[country]}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

AppCountryDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  paymentFormData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  labels: PropTypes.any.isRequired,
};

export default AppCountryDropdown;
