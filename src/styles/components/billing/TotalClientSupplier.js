const styles = {
  cardContent: (cardStyle) => ({
    ...cardStyle,
  }),
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    mb: 2,
  },
  clientBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  supplierBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    textAlign: 'end',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  colorCircle: (color) => ({
    width: 10,
    height: 10,
    bgcolor: color,
    borderRadius: '50%',
  }),
  chartLegendWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 2,
    flexWrap: 'wrap',
  },
  chartWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2,
  },
};

export { styles };
