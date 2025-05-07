const inputStyles = {
  height: '100%',
  fontSize: '14px',
  fontWeight: 500,
  color: '#3A3A49',
};

const placeholderStyles = {
  color: '#3A3A49',
  fontSize: '14px',
  fontWeight: 500,
};

const slotsCommonPropsStyles = {
  '&::before': {
    content: '""',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(9, 16, 43, 0.1)',
    backdropFilter: 'blur(2px)',
    opacity: '0.38',
    zIndex: 1301,
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
  slotsCommonPropsStyles,
  paperCommonPropsStyles,
  paperPropsStyles,
};
