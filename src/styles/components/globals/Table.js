const flexStyles = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyles = {
  height: '100%',
  fontSize: '14px',
  letterSpacing: '-0.02em',
  fontWeight: 500,
  color: '#3A3A49',
};

const tableContainerStyles = {
  backgroundColor: 'rgba(9, 16, 43, 0.05)',
  border: '1px solid rgba(43, 49, 64, 0.05)',
  boxShadow: '2px 2px 7.2px rgba(9, 16, 43, 0.11)',
  borderRadius: '17px',
  padding: '17px 10px 29px 13px',
};

const headingBoxStyles = {
  ...flexStyles,
  justifyContent: 'space-between',
};

const filterBoxStyles = {
  gap: '5px',
  ...flexStyles,
};

const tableHeadingStyles = {
  fontSize: '25px !important',
  lineHeight: '32px',
  letterSpacing: '-0.02em',
  color: '#1B2559',
};

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

  '& ::placeholder': {
    color: '#3A3A49',
    fontSize: '14px',
    fontWeight: 500,

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

const filterDropdownStyle = {
  backgroundColor: 'white',
  height: '25px',

  '& input': {
    height: '100%',
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

const dropdownStyle = {
  ...flexStyles,
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  display: 'block',
};

const tableHeaderStyles = {
  backgroundColor: 'rgba(192, 251, 198, 0.42)',
};

const tableHeaderHeadingStyles = {
  fontSize: '14px !important',
  padding: '14px 13px 12px',
  fontWeight: 600,
  lineHeight: '17px',
  color: '#212332',
};

const tableBodyItemStyles = {
  fontSize: '14px !important',
  lineHeight: '17px',
  fontWeight: 500,
  color: '#212332',
  padding: '17px 13px',
};

const tableStyles = {
  marginTop: '10px',
  borderCollapse: 'separate',
  borderSpacing: '0px 12px',

  '& th:first-child, & td:first-child': {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderLeft: '2px solid rgba(62, 132, 69, 0.09)',
  },

  '& th:last-child, & td:last-child': {
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    borderRight: '2px solid rgba(62, 132, 69, 0.09)',
  },

  '& th, & td': {
    borderTop: '2px solid rgba(62, 132, 69, 0.09)',
    borderBottom: '2px solid rgba(62, 132, 69, 0.09)',
    borderLeft: 'none',
    borderRight: 'none',
  },

  '& td': {
    backgroundColor: 'white',
  },

};

const tableBodyStyles = {
  // backgroundColor: 'white',
};

const tableBodyRowStyles = {
  position: 'relative',
  boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.23)',
  borderRadius: '5px',
};

const montSelectStyles = {
  marginLeft: '4px',
};

const monthHeadingStyles = {
  border: '0.541722px solid #09102B',
  borderRadius: '5px',
  padding: '5px 8px',
  fontSize: '14px',
  lineHeight: '12px',
  letterSpacing: '-0.02em',
  color: '#09102B',
  fontWeight: 500,
};

const iconButtonStyles = {
  backgroundColor: 'transparent !important',
  padding: 0,
};

const buttonBoxStyles = (status) => {
  const green = status === 'accepted' || status === 'active';
  const blue = status === 'pending' || status === 'non-active';

  return {
    boxShadow: '1px 2px 3px rgba(70, 118, 251, 0.41)',
    width: 'auto',
    maxWidth: '104px',
    ...flexStyles,
    justifyContent: 'center',
    borderRadius: '7px',
    border: '1px solid',
    borderColor: green ? '#54D14D' : blue ? '#136BE5' : '#FF4343',
    height: '32px',

    '& p': {
      color: green ? '#54D14D' : blue ? '#136BE5' : '#FF4343',
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      minWidth: 0,
      fontWeight: 600,
      backgroundColor: 'transparent !important',
    },
  };
};

const actionButtonBoxStyles = {
  ...flexStyles,
  justifyContent: 'space-between',
};

const eyeButtonStyles = {
  backgroundColor: 'rgba(84, 209, 77, 0.1) !important',
  width: '30px',
  height: '30px',
  padding: 0,
  ...flexStyles,
  justifyContent: 'center',
};

const editButtonStyles = {
  backgroundColor: 'transparent !important',
};

const paginationBox = {
  ...flexStyles,
  justifyContent: 'center',

  '& button': {
    color: '#09102B !important',
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '-0.02em',
    fontWeight: 500,
    padding: "4px 0px",
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

const filterCommonBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '4px 11px 6px 10px',
  height: '25px',
};

const iconStyles = { marginLeft: '10px', display: 'flex' };

const latestItemStyles = {
  position: 'absolute',
  top: 0,
  left: '-30px',
  backgroundColor: '#136BE5',
  boxShadow: 'inset 0px 3.27407px 10.5589px #5D9DF5',
  borderRadius: '20px',
  padding: '3px 13px',
  zIndex: 100,
};

const newLabelStyles = {
  fontSize: '9px',
  letterSpacing: '-0.02em',
  color: '#FFFFFF',
  lineHeight: '12px',
};

export {
  flexStyles,
  tableContainerStyles,
  headingBoxStyles,
  tableHeadingStyles,
  filterSearchStyles,
  filterDropdownStyle,
  filterBoxStyles,
  dropdownStyle,
  tableHeaderStyles,
  tableHeaderHeadingStyles,
  tableBodyItemStyles,
  tableStyles,
  tableBodyStyles,
  montSelectStyles,
  monthHeadingStyles,
  iconButtonStyles,
  buttonBoxStyles,
  actionButtonBoxStyles,
  eyeButtonStyles,
  editButtonStyles,
  paginationBox,
  filterCommonBoxStyles,
  inputStyles,
  iconStyles,
  tableBodyRowStyles,
  latestItemStyles,
  newLabelStyles,
};
