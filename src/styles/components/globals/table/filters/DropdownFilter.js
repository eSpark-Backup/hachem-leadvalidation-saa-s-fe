import { inputStyles } from '../Common';

const filterDropdownStyles = {
  backgroundColor: 'white.main',
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

const menuItemsStyles = {
  ...inputStyles,
  borderLeft: '5px solid',
  borderColor: 'transparent',
  transition: 'border-color 0.3s ease',
  padding: '5px 8px',

  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: '#54D14D',
  },
};

const clearIconStyles = {
  padding: 0,
  fontSize: 'inherit',
  backgroundColor: 'transparent !important',
};

export { filterDropdownStyles, menuItemsStyles, clearIconStyles };
