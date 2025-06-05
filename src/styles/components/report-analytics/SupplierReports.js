const wrapperStyle = { py: 2 };

const cardStyle = {
  borderRadius: 4,
};
const cardStyles = {
  borderRadius: '16px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  padding: 1,
  backgroundColor: '#fff',
};

const simpleBoxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2,
};

const performanceBoxStyle = {
  mt: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
};

const typographyMainStyle = {
  fontWeight: 600,
  fontSize: '25px',
};

const typographySubStyle = {
  fontSize: '14px',
  color: 'textSecondary',
};

const containerStyle = { py: 2 };

const chartCardStyle = {
  borderRadius: 4,
};

const cardContentStyle = {
  px: 2,
  py: 3,
};

const buttonStyle = {
  backgroundColor: '#F5F5F5',
  textTransform: 'none',
  px: 2,
  py: 1,
  borderRadius: 2,
};

const headerBoxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2,
};

const centerBoxStyle = (py = 5) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  py,
});

export {
  headerBoxStyle,
  typographyMainStyle,
  typographySubStyle,
  containerStyle,
  chartCardStyle,
  cardContentStyle,
  buttonStyle,
  wrapperStyle,
  cardStyle,
  performanceBoxStyle,
  cardStyles,
  simpleBoxStyle,
  centerBoxStyle,
};
