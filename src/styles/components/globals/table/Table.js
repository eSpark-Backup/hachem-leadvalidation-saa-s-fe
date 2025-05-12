const flexStyles = {
  display: 'flex',
  alignItems: 'center',
};

const tableContainerStyles = {
  backgroundColor: 'rgba(9, 16, 43, 0.05)',
  border: '1px solid rgba(43, 49, 64, 0.05)',
  boxShadow: '2px 2px 7.2px rgba(9, 16, 43, 0.11)',
  borderRadius: '17px',
  padding: '17px 10px 29px 13px',
};

const headingBoxStyles = (leadMonitoring, leadStatus) => {
  return {
    ...flexStyles,
    justifyContent: 'space-between',
    flexDirection: {
      xs: leadMonitoring || leadStatus ? 'row' : 'column',
      sm: 'row',
    },
    gap: { xs: 1.5, sm: 0 },
    alignItems: { xs: 'flex-start', sm: 'center' },

    '@media(max-width: 400px)': {
      flexDirection: leadMonitoring && 'column',
    },
  };
};

const genericTableHeadingBoxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: { xs: '100%', sm: 'auto' },
};

const tableHeadingStyles = {
  fontSize: '25px !important',
  lineHeight: '32px',
  color: '#1B2559',
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
  minWidth: '100px',
};

const tableStyles = {
  marginTop: '10px',
  borderCollapse: 'separate',
  borderSpacing: '0px 12px',
  minWidth: 800,

  '& th:first-of-type, & td:first-of-type': {
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
};

const tableBodyRowStyles = (excelFilter, isSelected, lead) => {
  return {
    position: 'relative',
    boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.23)',
    borderRadius: '5px',
    cursor: excelFilter ? 'pointer' : 'auto',
    backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.04)' : '#ffffff',

    '&:hover': {
      '& .edit-icon': {
        display: lead && 'block',
      },
    },
  };
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

const filterCommonBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '4px 11px 6px 10px',
  height: { xs: '35px', sm: '25px' },
  width: { xs: '100%', sm: 'auto' },
};

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
  color: '#FFFFFF',
  lineHeight: '12px',
};

export {
  flexStyles,
  tableContainerStyles,
  headingBoxStyles,
  genericTableHeadingBoxStyles,
  tableHeadingStyles,
  tableHeaderStyles,
  tableHeaderHeadingStyles,
  tableStyles,
  buttonBoxStyles,
  actionButtonBoxStyles,
  eyeButtonStyles,
  editButtonStyles,
  filterCommonBoxStyles,
  tableBodyRowStyles,
  latestItemStyles,
  newLabelStyles,
};
