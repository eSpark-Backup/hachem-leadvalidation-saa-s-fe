import PropTypes from 'prop-types';

import { FormControl, MenuItem, Select } from '@mui/material';

import {
  ALT_ATTRIBUTE,
  ICONS,
} from '../../../constants/components/globals/Table';

import { filterDropdownStyles } from '../../../styles/components/globals/table/DropdownFilter';

const DropdownFilter = ({ label, value = null, onChange = null, options }) => (
  <FormControl size="small" sx={{ minWidth: 84 }}>
    <Select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      sx={filterDropdownStyles}
      IconComponent={(ss) => (
        <img
          src={ICONS.dropdown}
          alt={ALT_ATTRIBUTE.dropdown}
          className={`${ss.className}  MuiSvgIcon-root-MuiSelect-icon`}
        />
      )}
      displayEmpty
    >
      <MenuItem value="" disabled>
        {label}
      </MenuItem>

      {options?.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

DropdownFilter.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropdownFilter;
