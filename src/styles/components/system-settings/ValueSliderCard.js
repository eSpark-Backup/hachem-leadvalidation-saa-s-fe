const cardStyles = {
  borderRadius: 2,
  my: 2.5,
  p: 1,
};

const containerBoxStyles = {
  p: 1,
};

const headerBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const labelBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
};

const sliderStyles = {
  color: '#0C0C22',
  '& .MuiSlider-thumb': {
    width: 14,
    height: 14,
    backgroundColor: '#fff',
    border: '2px solid #000',
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.1)',
    },
  },
};

const valueLabelStyles = {
  fontWeight: 600,
  fontSize: '13px',
  color: '#77797D',
};

const sliderValueBoxBase = {
  px: 2,
  py: 1,
  borderRadius: 1,
  bgcolor: '#F5F5F5',
  boxShadow: 1,
  width: 80,
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: 0.5,
};

const sliderValueTextStyles = {
  color: '#09102B',
  fontWeight: 500,
  fontSize: '16px',
};

const sliderUnitTextStyles = {
  color: '#09102B',
  fontWeight: 400,
  fontSize: '12px',
};

const labelTypographyStyles = {
  fontWeight: 600,
  fontSize: '16px',
};

const SliderBoxStyles = (isTablet) => ({
  pr: isTablet ? '2%' : '3%',
});

export {
  labelTypographyStyles,
  sliderUnitTextStyles,
  cardStyles,
  sliderValueBoxBase,
  sliderValueTextStyles,
  valueLabelStyles,
  sliderStyles,
  containerBoxStyles,
  headerBoxStyles,
  labelBoxStyles,
  SliderBoxStyles,
};
