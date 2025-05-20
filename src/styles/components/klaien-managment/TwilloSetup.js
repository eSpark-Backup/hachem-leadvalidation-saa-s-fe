const TwilloStyles = {
  sectionBox: {
    container: true,
    spacing: {
      xs: 1,
      sm: 1.5,
      md: 2,
      lg: 2,
    },
    mt: {
      xs: 2,
      sm: 3,
      md: 4,
      lg: 5,
    },
    p: {
      xs: 0.5,
      sm: 0.75,
      md: 1,
      lg: 1,
    },
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    borderRadius: {
      xs: '16px',
      sm: '24px',
      md: '28px',
      lg: '32px',
    },
    background: '#D9D9D9',
    p: {
      xs: 2,
      sm: 3,
      md: 4,
      lg: 5,
    },
    mt: {
      xs: 1,
      sm: 1.5,
      md: 2,
      lg: 2,
    },
  },
  label: {
    fontWeight: 700,
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '15px',
      lg: '16px',
    },
    color: '#1E293B',
    py: {
      xs: 0.5,
      sm: 0.75,
      md: 1,
      lg: 1,
    },
  },
  input: {
    backgroundColor: 'white',
    borderRadius: {
      xs: '16px',
      sm: '24px',
      md: '28px',
      lg: '32px',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: {
        xs: '16px',
        sm: '24px',
        md: '28px',
        lg: '32px',
      },
    },
  },
  sectionTitle: {
    fontWeight: 600,
    fontSize: {
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '19.49px',
    },
    color: '#1B2559',
  },
  switchBox: {
    display: 'flex',
    justifyContent: 'start',
    gap: {
      xs: '12px',
      sm: '20px',
      md: '25px',
      lg: '30px',
    },
    p: {
      xs: 0.5,
      sm: 0.75,
      md: 1,
      lg: 1,
    },
  },
  addButton: {
    backgroundColor: '#F7F7F7',
    color: '#09102B',
    boxShadow: '1px 2px 3px 0px #4676FB69',
    '&:hover': {
      boxShadow: '1px 2px 3px 0px #4676FB69',
      backgroundColor: '#F7F7F7',
      color: '#09102B',
    },
  },
  resetButton: {
    background: '#fff',
    border: '1px solid #77797D',
    color: ' #77797D',
    '&:hover': {
      background: '#fff',
      border: '1px solid #77797D',
      color: ' #77797D',
    },
  },
};

export { TwilloStyles };
