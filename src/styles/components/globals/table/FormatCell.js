import { flexStyles } from './Table';

const tableBodyItemStyles = (hasPoints, colKey) => {
  return {
    fontSize: '14px !important',
    lineHeight: '17px',
    fontWeight: 500,
    color: '#212332',
    height: { xs: hasPoints ? '85px' : '60px', md: '60px' },
    minWidth: '100px',
    textAlign:
      colKey === 'date'
        ? 'center'
        : colKey === 'leads_validation'
          ? 'center'
          : 'left',
    padding: hasPoints ? '0px' : '0px 18px',

    '&:first-of-type': {
      paddingLeft: hasPoints ? '6px' : '18px',
    },

    '&:last-child': {
      paddingRight: hasPoints ? '6px' : '18px',
    },
  };
};

const latestItemStyles = {
  position: 'absolute',
  top: 0,
  left: '0px',
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

const actionButtonBoxStyles = {
  ...flexStyles,
  gap: '12px',
};

const buttonBoxStyles = (status) => {
  const green = status === 'accepted' || status === 'active';
  const blue = status === 'pending' || status === 'non-active';

  return {
    boxShadow: '1px 2px 3px rgba(70, 118, 251, 0.41)',
    width: '104px',
    ...flexStyles,
    justifyContent: 'center',
    borderRadius: '7px',
    border: '1px solid',
    borderColor: green ? '#54D14D' : blue ? '#136BE5' : '#FF4343',
    height: '32px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: green ? '#54D14D' : blue ? '#136BE5' : '#FF4343',
    },
    '&:hover p': {
      color: '#fff',
    },
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

const editButtonStyles = {
  backgroundColor: 'transparent !important',
  padding: 0,
};

const eyeButtonStyles = {
  backgroundColor: 'rgba(84, 209, 77, 0.1) !important',
  mx: 'auto',
  width: '30px',
  height: '30px',
  padding: 0,
  ...flexStyles,
  justifyContent: 'center',
};

const trashButtonStyles = {
  backgroundColor: 'rgba(255, 0, 0, 0.05) !important',
  width: '30px',
  height: '30px',
  padding: 0,
  ...flexStyles,
  justifyContent: 'center',
};

const fontStyles = {
  fontSize: '14px',
  lineHeight: '17px',
};

const validTextStyles = {
  ...fontStyles,
  color: '#54D14D',
  whiteSpace: 'nowrap',
};

const positiveResultTextStyles = {
  ...fontStyles,
  color: '#136BE5',
  whiteSpace: 'nowrap',
};

const creditBoxStyles = {
  padding: '10px 0px',
  width: '90px',
  textAlign: 'center',
};

const lowCreditBoxStyles = {
  ...creditBoxStyles,
  backgroundColor: 'rgba(255, 67, 67, 0.13)',
  border: '1px solid #FBBEBE',
  borderRadius: '5px',
};

const creditTextStyles = {
  fontSize: '14px',
  lineHeight: '17px',
};

const lowCreditTextStyles = {
  ...creditTextStyles,
  color: '#FF4343',
};

const scoringBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const scoringHeadStyles = {
  ...fontStyles,
  borderBottom: '1px solid rgba(0, 0, 0, 0.19)',
  padding: { xs: '0px 9px 7px', md: '0px 13px 7px' },
  marginBottom: '8px',
  color: '#212332',
  height: { xs: '40px', md: 'auto' },
};

const scoringPointsStyles = {
  ...fontStyles,
  padding: { xs: '0px 9px', md: '0px 13px' },
  color: '#77797D',
};

export {
  tableBodyItemStyles,
  latestItemStyles,
  newLabelStyles,
  actionButtonBoxStyles,
  buttonBoxStyles,
  editButtonStyles,
  eyeButtonStyles,
  trashButtonStyles,
  validTextStyles,
  positiveResultTextStyles,
  lowCreditBoxStyles,
  creditBoxStyles,
  lowCreditTextStyles,
  creditTextStyles,
  scoringBoxStyles,
  scoringHeadStyles,
  scoringPointsStyles,
};
