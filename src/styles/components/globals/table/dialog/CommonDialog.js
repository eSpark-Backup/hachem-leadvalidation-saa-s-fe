const paperStyles = {
  '& .MuiDialog-paper': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderRadius: '20px',
  },
};

const boxContainerstyles = {
  border: '3px solid rgba(0, 0, 0, 0.19)',
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  padding: { xs: '30px 54px 50px', sm: '36px 74px 60px' },
  display: 'inline-block',
  textAlign: 'center',
};

const textStyles = {
  color: '#1B2559',
  lineHeight: { xs: '28px', sm: '32px' },
  fontSize: { xs: '22px', sm: '25px' },
  fontWeight: 600,
  marginBottom: '12px',
};

const stackStyles = {
  gap: '26px',
  justifyContent: 'center',
  flexDirection: 'row',
};

const buttonStyles = {
  boxShadow: '1px 2px 3px rgba(70, 118, 251, 0.41)',
  borderRadius: '7px',
  padding: '10px 35px',
  fontSize: '13px',
  lineHeight: '15px',
};

const deleteButtonStyles = (lead) => {
  return {
    ...buttonStyles,
    backgroundColor: lead ? 'transparent' : '#136be5',
    color: lead ? '#54d14d' : '#FFFFFF',
    border: lead ? '1px solid #54d14d' : 'none',
    boxShadow: lead ? '1px 2px 3px rgba(70, 118, 251, 0.41)' : 'none',

    ':hover': {
      backgroundColor: lead
        ? 'rgba(25, 118, 210, 0.04)'
        : 'rgba(19, 107, 229, 0.8)',
    },
  };
};

const cancelButtonStyles = (lead) => {
  return {
    ...buttonStyles,
    backgroundColor: lead ? 'transparent' : '#FFFFFF',
    color: lead ? '#FF4343' : '#136BE5',
    boxShadow: lead
      ? '1px 2px 3px rgba(70, 118, 251, 0.41)'
      : '1px 2px 3px rgba(70, 118, 251, 0.41)',
    border: lead ? '1px solid #FF4343' : '1px solid #136BE5',
  };
};

export {
  paperStyles,
  boxContainerstyles,
  textStyles,
  stackStyles,
  deleteButtonStyles,
  cancelButtonStyles,
};
