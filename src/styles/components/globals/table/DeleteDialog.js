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
  padding: '36px 74px 60px',
  display: 'inline-block',
  textAlign: 'center',
};

const textStyles = {
  color: '#1B2559',
  lineHeight: '32px',
  fontSize: '25px',
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

const deleteButtonStyles = {
  ...buttonStyles,
  backgroundColor: '#136be5',
  color: '#FFFFFF',

  ':hover': {
    backgroundColor: 'rgba(19, 107, 229, 0.8)',
  },
};

const cancelButtonStyles = {
  ...buttonStyles,
  backgroundColor: '#FFFFFF',
  color: '#136BE5',
};

export {
  paperStyles,
  boxContainerstyles,
  textStyles,
  stackStyles,
  deleteButtonStyles,
  cancelButtonStyles,
};
