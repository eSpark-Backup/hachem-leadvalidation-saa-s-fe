const stackWrapperStyle = {
  minHeight: { xs: 'auto', sm: 'auto', lg: '690px' },
  maxWidth: { xs: '420px', sm: '482px', lg: '572px' },
  maxHeight: { xs: '90%', sm: '420px', lg: '690px' },
  py: { xs: 4.2, sm: 3, lg: 1 },
  px: { xs: 2.5, sm: 2, md: 2 },
  justifyContent: { lg: 'center' },
  alignItems: 'center',
  direction: 'column',
  useFlexGap: true,
  spacing: 2,
  variant: 'authStack',
};

const formBoxStyle = {
  width: '100%',
  maxWidth: '380px',
  display: 'flex',
  flexDirection: 'column',
};

const orTextStyle = {
  fontSize: '12px',
  fontWeight: 400,
  color: '#000',
};

const googleImageStyle = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

const iconBox = { mr: -1.5 };

export {
  stackWrapperStyle,
  formBoxStyle,
  orTextStyle,
  googleImageStyle,
  iconBox,
};
