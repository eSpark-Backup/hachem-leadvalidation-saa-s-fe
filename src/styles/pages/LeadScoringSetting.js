const stackContainerStyles = {
  backgroundColor: 'rgba(192, 251, 198, 0.42)',
  border: '2px solid rgba(62, 132, 69, 0.09)',
  borderRadius: '16px',
  padding: '21px 17px 12px',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: { xs: '44px', sm: '62px' },
  marginTop: '25px',
  marginBottom: '16px',
};

const scoringInputBoxStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '13px',
  justifyContent: 'center',
};

const actionButtonStyles = {
  backgroundColor: '#136BE5',
  borderRadius: '8px',
  padding: '10px 50px',
  color: '#FFFFFF',
  fontSize: '17px',
  lineHeight: '26px',
  fontWeight: 500,
  width: '217px',

  '&:hover': {
    backgroundColor: 'rgba(19, 107, 229, 0.8)',
  },

  '@media(max-width:500px)': {
    width: '100%',
  },
};

const scoringInputStyles = (incWidth) => {
  return {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    color: '#09102B',
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 500,
    padding: '7px 16px',
    height: 'fit-content',
    whiteSpace: 'pre',
    width: incWidth ? { xs: 'auto', md: '215px' } : 'auto',

    '& input': {
      height: 'auto',
      padding: 0,
    },

    '&::before, &::after': {
      border: 'none !important',
    },

    '@media(max-width:500px)': {
      width: '100%',
      height: '40px',
    },
  };
};

const scoringButtonStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '8px',
  border: '1px solid rgba(38, 60, 40, 0.44)',
  padding: '4px 12px 4px 8px',
  justifyContent: 'space-between',
};

const validRateStyles = {
  color: '#373B5C',
  fontSize: '14px !important',
  lineHeight: '15px !important',
  fontWeight: 500,
};

const pointsStyles = {
  fontSize: '17px !important',
  lineHeight: '22px !important',
  color: '#373B5C',
  fontWeight: 600,
  textAlign: 'left',
};

const modalStyles = {
  borderRadius: '20px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  zIndex: 1310,
};

const headingStyles = {
  fontSize: '25px !important',
  lineHeight: '31px',
};

const buttonStyles = {
  backgroundColor: '#136be5',
  boxShadow: '1px 2px 3px rgba(70, 118, 251, 0.41)',
  border: '1px solid #FFFFFF',
  borderRadius: '7px',
  lineHeight: '16px',
  color: '#FFFFFF',
  fontWeight: 600,

  '&:hover': {
    backgroundColor: 'rgba(19, 107, 229, 0.8)',
  },
};

export {
  stackContainerStyles,
  scoringInputBoxStyles,
  actionButtonStyles,
  scoringInputStyles,
  scoringButtonStyles,
  validRateStyles,
  pointsStyles,
  modalStyles,
  headingStyles,
  buttonStyles,
};
