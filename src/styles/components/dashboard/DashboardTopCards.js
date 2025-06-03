const cardStyles = {
  boxShadow: {
    xs: '0px 3px 5.2px 0px #09102B21',
    sm: '6px 3px 7.2px 0px #09102B21',
  },
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '20px',
  height: { xs: '77px', sm: '87px', md: '97px' },
  padding: '20px',
  width: '100%',
};

const titleStyles = (color) => ({
  fontWeight: 500,
  color: color || '#A3AED0',
});

const valueStyles = (color) => ({
  color: color || '#1B2559',
  fontWeight: '700',
});

const unitStyles = (color) => ({
  color: color || '#212332',
  fontSize: {
    xs: 10.5,
  },
  fontWeight: '500',
  mb: { xs: 0.1, md: 0.2 },
});

const layoutStyles = (isInverted) => ({
  display: 'flex',
  flexDirection: isInverted ? 'row-reverse' : 'row',
  justifyContent: isInverted ? 'flex-end' : 'space-between',
  gap: 2,
  alignItems: 'center',
  width: '100%',
});

const textColumnStyles = (hasChartTitle) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: hasChartTitle ? 2 : 0,
});

const chartTitleStyles = (color) => ({
  fontWeight: 500,
  fontSize: {
    xs: '12px',
    sm: '14px',
  },
  color: color || '#A3AED0',
  cursor: 'pointer',
  textDecoration: 'none',
});

const iconBoxStyles = {
  display: 'flex',
  width: 'fit-content',
};

export {
  cardStyles,
  titleStyles,
  valueStyles,
  unitStyles,
  layoutStyles,
  textColumnStyles,
  chartTitleStyles,
  iconBoxStyles,
};
