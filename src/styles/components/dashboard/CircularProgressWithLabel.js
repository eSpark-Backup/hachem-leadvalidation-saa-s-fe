const containerStyles = {
  position: 'relative',
  display: 'inline-flex',
  width: 100,
  height: 100,
  backgroundColor: '#F2DDD8',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
};

const progressStyles = (color) => ({
  color: color || '#fff',
  position: 'relative',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '12px solid #fff',
    zIndex: -1,
  },
});

const labelBoxStyles = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const labelTypographyStyles = {
  color: 'primary.main',
  fontSize: 13,
};

export {
  containerStyles,
  progressStyles,
  labelBoxStyles,
  labelTypographyStyles,
};
