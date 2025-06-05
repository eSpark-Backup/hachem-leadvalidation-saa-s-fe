const containerStyle = (bgImage) => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  minHeight: '100vh',
});

const gridContainerStyle = {
  px: '5%',
  width: '100%',
  height: '100%',
  minHeight: 'calc(100vh - 80px)',
  gap: { xs: '9%', md: '9%' },
  py: { xs: '3.5%', sm: '1.5%' },
};

export { containerStyle, gridContainerStyle };
