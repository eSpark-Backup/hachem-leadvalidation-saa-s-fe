import { InputAdornment, TextField } from '@mui/material';

import SearchIcon from '../../../assets/images/global/table-icons/search-icon.svg';

import { filterSearchStyles } from '../../../styles/components/globals/Table';

const SearchBar = ({ value, onChange }) => {
  console.log(value)
  return (
    <TextField
      sx={filterSearchStyles}
      variant="outlined"
      placeholder="Search"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img src={SearchIcon} alt="Search" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
