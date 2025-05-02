import { inputStyles } from './Common';

export const filterDropdownStyles = {
  backgroundColor: 'white',
  height: '25px',

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
