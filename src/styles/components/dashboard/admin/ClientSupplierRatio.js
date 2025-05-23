const styles = {
  cardContent: { p: 2 },
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
  },
  chartBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    py: 4,
  },
  footerBox: {
    mt: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    mx: -1,
  },
  legendBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    mx: 1,
    minWidth: 100,
  },
  legendTitleBox: { display: 'flex', alignItems: 'center', gap: 1 },
  colorDot: (color) => ({
    width: 10,
    height: 10,
    bgcolor: color,
    borderRadius: '50%',
  }),
  valueText: { fontWeight: 'bold' },
};

export { styles };
