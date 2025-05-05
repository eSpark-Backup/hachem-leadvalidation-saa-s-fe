import { inputStyles } from './Common';

const filterSearchStyles = {
  width: '131px',
  height: '25px',
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '4px 11px 6px 10px',

  '& .MuiInputBase-root': {
    height: '100%',
    padding: 0,
  },

  '& input': {
    ...inputStyles,
    lineHeight: '12px',
    padding: '0px 5px 0px 0px',
  },

  '& fieldset': {
    border: 'none !important',
    padding: 0,
  },

  '& .MuiInputAdornment-root': {
    margin: 0,
  },
};

export { filterSearchStyles };