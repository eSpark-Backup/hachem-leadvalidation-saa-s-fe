const containerStyles = {
  bgcolor: '#FFFFFF',
  color: '#000',
  border: '1px solid #3E84451F',
  p: {
    xs: 1.5,
    sm: 2,
    md: 2.5,
  },
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'row',
  alignItems: {
    xs: 'flex-start',
    sm: 'space-between',
  },
  justifyContent: 'space-between',
  gap: {
    xs: 1.5,
    sm: 2,
  },
};

const leftSectionStyles = {
  width: '50%',
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: {
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.6rem',
    lg: '2rem',
  },
  wordBreak: 'break-word',
  gap: 1,
};

const menuIconStyles = {
  color: '#000',
  height: {
    xs: '50px',
    lg: '40px',
  },
  width: '40px',
  cursor: 'pointer',
};

const titleStyles = {
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: {
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.6rem',
    lg: '2rem',
  },
  wordBreak: 'break-word',
};

const compactTitleContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const smallTitleStyles = {
  fontSize: {
    xs: '.5rem',
    sm: '.7rem',
    md: '.8rem',
    lg: '1rem',
  },
};

const idStyles = {
  fontSize: {
    xs: '1rem',
    sm: '1.3rem',
    md: '1.6rem',
    lg: '2rem',
  },
};

export {
  menuIconStyles,
  titleStyles,
  compactTitleContainer,
  smallTitleStyles,
  idStyles,
  containerStyles,
  leftSectionStyles,
};
