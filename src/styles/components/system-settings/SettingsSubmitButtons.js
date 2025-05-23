const boxStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 2,
};

const cancelButtonStyles = {
  display: 'flex',
  width: { xs: '100%', sm: '100px' },
  fontSize: { xs: '12px', sm: '14px' },
  height: '40px',
  border: '1px solid #CBD5E1',
  color: '#475569',
  borderRadius: 5,
  textTransform: 'none',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#475569',
  },
};

const requestButtonStyles = {
  width: { xs: '100%', sm: '117px' },
  fontSize: { xs: '12px', sm: '14px' },
  height: '40px',
};

export { boxStyles, cancelButtonStyles, requestButtonStyles };
