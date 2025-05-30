import { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { TOP_BAR_SEARCH_STYLE } from '../../styles/components/globals/TopBarSearch';

const TopBarSearch = ({ data }) => {
  const { icon } = data || {};
  const { fieldStyle } = TOP_BAR_SEARCH_STYLE || {};
  const [searchValue, setsearchValue] = useState('');
  console.log({ searchValue: searchValue });

  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      size="small"
      value={searchValue}
      onChange={(e) => setsearchValue(e?.target?.value)}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box component={'img'} src={icon} />
          </InputAdornment>
        ),
        sx: { borderRadius: '8px' },
      }}
      sx={fieldStyle}
    />
  );
};

TopBarSearch.propTypes = {
  data: PropTypes.object,
};

export default TopBarSearch;
