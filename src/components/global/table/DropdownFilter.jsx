import { FormControl, MenuItem, Select } from '@mui/material';

import ArrowDropdown from '../../../assets/images/global/table-icons/dropdown.svg';

import { filterDropdownStyle } from '../../../styles/components/globals/Table';

const DropdownFilter = ({ label, value = null, onChange = null, options }) => (
  <FormControl size="small" sx={{ minWidth: 84 }}>
    <Select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      sx={filterDropdownStyle}
      IconComponent={(ss) => (
        <img
          src={ArrowDropdown}
          alt="dropdown"
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
export default DropdownFilter;
