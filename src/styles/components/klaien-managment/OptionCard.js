const containerStyles = {
  px: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
  },
  background: '#C0FBC66B',
  padding: 0,
  margin: 0,
  border: '2px solid #3E844517',
  borderRadius: '5px',
};

const getBoxStyles = (isActive) => ({
  background: isActive ? '#FFFFFF' : '#00000000',
  border: `2px solid ${isActive ? '#FFFFFF' : '#00000000'}`,
  '&:hover': {
    border: `2px solid ${isActive ? '#FFFFFF' : '#00000000'}`,
    transform: 'scale(1.02)',
  },
});

export { containerStyles, getBoxStyles };
