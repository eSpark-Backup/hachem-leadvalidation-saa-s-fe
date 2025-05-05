import { flexStyles } from './Table';

const paginationBoxStyles = {
  ...flexStyles,
  justifyContent: 'center',

  '& button': {
    color: '#09102B !important',
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '-0.02em',
    fontWeight: 500,
    padding: '4px 0px',
    margin: 0,
    height: 'auto',
    minWidth: '10px',
  },

  '& .Mui-selected': {
    width: '20px',
    height: '19px',
    border: '0.5px solid #09102B',
    borderRadius: '4px',
    backgroundColor: 'transparent !important',
  },
};

export { paginationBoxStyles };