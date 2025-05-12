import { inputStyles } from '../Common';

const filterDropdownStyles = {
  backgroundColor: 'white',
 height: { xs: '35px', sm: '25px' },

  '& input': {
    padding: 0,
    border: 'none',
    ...inputStyles,
  },

  '& .MuiInputBase-input': {
    ...inputStyles,
  },

  '& fieldset': {
    border: 'none !important',
    padding: 0,
  },

  '& .MuiSelect-icon': {
    position: 'relative',
    top: 0,
    right: '13px',
  },
};

export { filterDropdownStyles };
