const styles = {
  modalBox: {
    overflow: 'auto',
  },
  containerBox: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 3.5,
    p: 4.5,
  },
  titleTypography: {
    color: '#09102B',
    fontWeight: 600,
    fontSize: { xs: '20px', sm: '22px', md: '25px' },
  },
  textTypography: {
    color: '#212332',
    fontWeight: 400,
    fontSize: { xs: '13px', md: '14px' },
  },
  labelTypography: {
    color: '#212332',
    fontWeight: 500,
    fontSize: { xs: '12px' },
  },
  billText: (color, weight) => ({
    color: color || '#77797D',
    fontWeight: weight || 500,
    fontSize: { xs: '14px' },
  }),
  billAmount: {
    color: '#09102B',
    fontWeight: 500,
    fontSize: { xs: '14px' },
  },
  buttonStack: {
    justifyContent: 'flex-end',
    spacing: 2,
  },
};

export { styles };
