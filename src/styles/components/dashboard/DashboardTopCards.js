const cardStyles = {
  boxShadow: '6px 3px 7.2px 0px #09102B21',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '20px',
  height: '100px',
  padding: '20px',
  width: '100%',
};

// const containerStyles = { my: 1 };

const titleStyles = (color) => ({
  fontWeight: 500,
  fontSize: {
    xs: 12,
    sm: 14,
  },
  color: color || '#A3AED0',
});

const valueStyles = (color) => ({
  color: color || '#1B2559',
  fontSize: {
    xs: 20,
    sm: 24,
  },
  fontWeight: '700',
});

const unitStyles = (color) => ({
  color: color || '#212332',
  fontSize: {
    xs: 12,
    sm: 14,
  },
  fontWeight: '500',
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
  alignItems: 'end',
  flexDirection: 'column',
};

export {
  cardStyles,
  // containerStyles,
  titleStyles,
  valueStyles,
  unitStyles,
  layoutStyles,
  textColumnStyles,
  chartTitleStyles,
  iconBoxStyles,
};
