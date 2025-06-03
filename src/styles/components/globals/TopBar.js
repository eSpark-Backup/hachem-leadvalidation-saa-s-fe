const containerStyles = {
  mx: 'auto',
  width: { xs: '100%' },
  minHeight: '46px',
  bgcolor: '#FFFFFF',
  color: '#000',
  border: '1px solid #3E84451F',
  p: '13px',
  pl: { md: '20px', lg: '30px' },
  borderRadius: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftSectionStyles = {
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
  width: { xs: '32px', sm: '35px' },
  height: 'auto',
  cursor: 'pointer',
};

const titleStyles = {
  fontWeight: 700,
  display: 'flex',
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '20px',
    lg: '25px',
  },
  wordBreak: 'break-word',
};

const compactTitleContainer = {
  display: 'flex',
  flexDirection: 'column',
};

export {
  menuIconStyles,
  titleStyles,
  compactTitleContainer,
  containerStyles,
  leftSectionStyles,
};
