import PropTypes from 'prop-types';
import { InputAdornment, TextField } from '@mui/material';
import {
  ALT_ATTRIBUTE,
  ICONS,
  PLACEHOLDERS,
} from '../../../constants/components/globals/Table';

import { filterSearchStyles } from '../../../styles/components/globals/table/Searchbar';

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      sx={filterSearchStyles}
      variant="outlined"
      placeholder={PLACEHOLDERS.search}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img src={ICONS.search} alt={ALT_ATTRIBUTE.search} />
          </InputAdornment>
        ),
      }}
    />
  );
};
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.any.isRequired,
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
