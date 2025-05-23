const modalBoxStyle = {
  top: '50%',
  left: '50%',
  width: '70%',
  height: '70%',
  position: 'absolute',
  borderRadius: '20px',
  maxWidth: { xs: '404px' },
  maxHeight: { xs: '333px', md: '373px' },
  bgcolor: 'background.paper',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
  p: 3,
};

const contentBoxStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: 2,
  px: 2.5,
};

const closeButtonStyle = {
  width: '20px',
  height: '20px',
  color: 'black',
  position: 'absolute',
  top: 20,
  right: 20,
  p: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
};

const titleStyle = {
  color: '#1B2559',
  fontSize: { xs: '20px', sm: '22px', md: '25px' },
  fontWeight: 600,
};

const imageStyle = {
  width: { xs: '164px', md: 'auto' },
  height: 'auto',
};

const linkStyle = {
  color: '#136BE5',
  fontSize: { xs: '17px', sm: '18px', md: '20px' },
  textTransform: 'uppercase',
  fontWeight: 400,
};

export {
  modalBoxStyle,
  contentBoxStyle,
  closeButtonStyle,
  titleStyle,
  imageStyle,
  linkStyle,
};
