const stackStyle = {
  minHeight: { xs: 'auto', sm: '450px', lg: '549px' },
  maxWidth: { xs: '420px', sm: '482px', lg: '572px' },
  maxHeight: { xs: '90%', lg: '570px' },
  justifyContent: { lg: 'center' },
  py: { xs: 4.2, sm: 3, lg: 1 },
  px: { xs: 2.5, sm: 2, md: 2 },
  alignItems: 'center',
};

const formBoxStyle = {
  width: '100%',
  maxWidth: '380px',
  display: 'flex',
  flexDirection: 'column',
};

const eyeButtonStyle = { mr: -1.5 };

const linkStyle = {
  color: '#136BE5',
  fontSize: { xs: '12px', sm: '14px', md: '17px' },
  fontWeight: 400,
  '@media(max-width: 319px)': {
    fontSize: '10px',
  },
};

const googleImageStyle = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

const orTextStyle = {
  fontSize: '12px',
  fontWeight: 400,
  color: '#000',
};

export {
  stackStyle,
  formBoxStyle,
  eyeButtonStyle,
  linkStyle,
  googleImageStyle,
  orTextStyle,
};
