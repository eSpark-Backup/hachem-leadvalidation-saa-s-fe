const inputStyles = {
  height: { xs: 'auto', sm: '100%' },
  fontSize: '14px',
  fontWeight: 500,
  color: '#3A3A49',
};

const placeholderStyles = {
  color: '#3A3A49',
  fontSize: '14px',
  fontWeight: 500,
};

const backdropStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(9, 16, 43, 0.37)',
  backdropFilter: 'blur(2px)',
  zIndex: 1301,
};

const slotsCommonPropsStyles = {
  '&::before': {
    content: '""',
    ...backdropStyles,
  },
};

const paperCommonPropsStyles = {
  zIndex: 1302,
  backgroundColor: 'transparent',
  boxShadow: 'none',
};

const paperPropsStyles = {
  ...paperCommonPropsStyles,
  marginTop: '16px',
  borderRadius: '24px',
};

export {
  inputStyles,
  placeholderStyles,
  backdropStyles,
  slotsCommonPropsStyles,
  paperCommonPropsStyles,
  paperPropsStyles,
};
