const ScriptAi = {
  containerBox: {
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
  },
  titleBox: {
    fontWeight: 500,
    fontSize: {
      xs: '24px',
      sm: '32px',
      md: '36px',
      lg: '40px',
    },
    p: {
      xs: 0.5,
      sm: 0.75,
      md: 1,
      lg: 1,
    },
  },
  textField: {
    p: {
      xs: 1,
      sm: 1.5,
      md: 2,
      lg: 2,
    },
    borderRadius: {
      xs: '12px',
      sm: '16px',
      md: '18px',
      lg: '20px',
    },
    background: '#fff',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      height: '100%',
      alignItems: 'flex-start',
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '17px',
        lg: '18px',
      },
      color: '#333',
      '& fieldset': {
        border: 'none',
      },
      '& textarea': {
        fontSize: {
          xs: '14px',
          sm: '16px',
          md: '17px',
          lg: '18px',
        },
        color: '#000',
        '&::placeholder': {
          color: '#333',
          opacity: 1,
        },
      },
    },
  },
  buttonGroup: {
    display: 'flex',
    gap: {
      xs: 1,
      sm: 1.5,
      md: 2,
      lg: 2,
    },
  },
  outlinedButton: {
    background: '#fff',
    border: '1px solid #77797D',
    color: '#77797D',
  },
};

export default ScriptAi;
