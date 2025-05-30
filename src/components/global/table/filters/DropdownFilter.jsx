import PropTypes from 'prop-types';

import { FormControl, IconButton, MenuItem, Select } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import {
  ALT_ATTRIBUTE,
  ICONS,
} from '../../../../constants/components/globals/Table';

import {
  clearIconStyles,
  filterDropdownStyles,
  menuItemsStyles,
} from '../../../../styles/components/globals/table/filters/DropdownFilter';

const DropdownFilter = ({ label, value = null, onChange = null, options }) => {
  return (
    <FormControl size="small" sx={{ width: { xs: '100%', sm: 'auto' } }}>
      <Select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        sx={filterDropdownStyles}
        IconComponent={(selectClass) => (
          <img
            src={ICONS.dropdown}
            alt={ALT_ATTRIBUTE.dropdown}
            className={`${selectClass.className}  MuiSvgIcon-root-MuiSelect-icon`}
          />
        )}
        displayEmpty
        endAdornment={
          value && (
            <IconButton
              sx={clearIconStyles}
              disableRipple
              onClick={() => onChange('')}
            >
              <ClearIcon fontSize="inherit" />
            </IconButton>
          )
        }
      >
        <MenuItem value="" disabled sx={menuItemsStyles}>
          {label}
        </MenuItem>

        {options?.map((opt, i) => (
          <MenuItem key={i} value={opt.label} sx={menuItemsStyles}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

DropdownFilter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownFilter;
