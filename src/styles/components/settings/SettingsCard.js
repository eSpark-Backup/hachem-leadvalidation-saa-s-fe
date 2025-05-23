const SettingCardStyles = {
  container: {
    my: 2,
  },
  titleContainer: {
    display: 'flex',
    textWrap: 'noWrap',
  },
  titleText: {
    color: '#1E293B',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: 2.5,
  },
  descriptionText: {
    color: '#475569',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.6,
  },
  contentBox: {
    borderRadius: '32px',
    border: '1px solid #E2E8F0',
    backgroundColor: '#FFFFFF',
    minHeight: '200px',
    p: { xs: '20px', sm: '24px' },
  },
  gridBoxStyles: { xs: 1.8, md: 0 },
  toolTip: { marginLeft: 3, cursor: 'pointer' },
};

export { SettingCardStyles };
