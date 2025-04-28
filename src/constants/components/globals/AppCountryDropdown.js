const APP_COUNTRY_DROPDOWN_STYLE = {
  titleStyle: { fontSize: '14px', fontWeight: 700, color: '#1E293B' },

  //   select styling
  selectBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #CBD5E1',
    borderRadius: '28px',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: '#fff',
  },
  selectFlagBoxStyle: {
    width: '70px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    borderRight: '1px solid #CBD5E1',
    gap: 1,
  },
  selectImageStyle: { width: 20, height: 20 },
  selectTypoBoxStyle: { width: 'calc(100% - 70px)', pr: 1.5 },
  selectTypoStyle: {
    flex: 1,
    color: '#475569',
    fontSize: { xs: '13px', sm: '14px', md: '16px' },
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },

  // options styling
  menuStyle: {
    width: '75%',
    maxWidth: '528px',
    mx: 'auto',
    maxHeight: 300,
    borderRadius: 2,
    mt: 1,
    position: 'absolute',
  },
  optionBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },
  optionScrollBoxStyle: {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '5px',
      marginRight: -2,
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(to bottom, #a8e063, #56ab2f)',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'linear-gradient(to bottom, #88d02e, #3d8b1e)',
    },
  },
  optionItemBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    px: 2,
    py: 1,
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#F9FAFB' },
  },
  optionLabelStyle: { ml: 1, fontSize: 14, fontWeight: 400 },
};

export { APP_COUNTRY_DROPDOWN_STYLE };
