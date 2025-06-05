const styles = {
  paper: (minHeight) => ({
    width: 300,
    p: 2,
    bgcolor: '#e8f5e9',
    position: 'relative',
    overflow: 'hidden',
    minHeight,
  }),
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
    flexWrap: 'nowrap',
    width: '100%',
  },
  arrowButton: {
    minWidth: 32,
    padding: 0,
    color: '#2e7d32',
  },
  monthYearButton: {
    minWidth: 48,
    padding: '0 8px',
    color: '#2e7d32',
  },
  dayButton: {
    minWidth: 0,
    width: 36,
    height: 36,
    borderRadius: '50%',
  },
  overlayBox: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    maxHeight: 300,
    bgcolor: '#e8f5e9',
    zIndex: 10,
    overflowY: 'auto',
    p: 1,
  },
  overlayItem: (isSelected) => ({
    display: 'flex',
    justifyContent: 'start',
    gap: '10px',
    background: isSelected ? '#CAC4D070' : '#e8f5e9',
    p: 1,
    cursor: 'pointer',
    borderRadius: 1,
    transition: 'background 0.3s ease',
    '&:hover': {
      background: '#c8e6c9',
    },
  }),
  overlayIcon: (isSelected) => ({
    color: isSelected ? '#2e7d32' : '#c8e6c9',
    fontWeight: 600,
  }),
  overlayText: (isSelected) => ({
    color: isSelected ? '#2e7d32' : '#000',
    fontWeight: isSelected ? 600 : 500,
  }),
  arrowNavBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
  },
  actionsBox: {
    mt: 3,
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export { styles };
