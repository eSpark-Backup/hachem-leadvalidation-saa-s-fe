// Authentication forms constant

export const Auth_FORMS = {
  login: {
    title: 'Login',
    policy: {
      title: 'I agree to the Terms of Service and Privacy Policy.',
      status: false,
    },
    links: [
      { text: 'Forgot password', link: '/forget-password' },
      { text: ' Reset password', link: '/reset-password' },
    ],
    fields: [
      {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'John@gmail.com',
        style: {
          '& input': {
            padding: 0,
            color: '#616161',
          },
          '& fieldset': { border: 'none' },
          textAlign: 'left',
          '& input::placeholder': {
            fontSize: '16px',
            fontWeight: 400,
            color: '#616161',
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '.MuiFormHelperText-contained': {
            marginLeft: 0.5,
          },
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset !important',
            WebkitTextFillColor: '#000 !important',
            transition: 'background-color 5000s ease-in-out 0s !important',
            padding: 0,
          },
          '& .MuiOutlinedInput-root': {
            color: '#616161',
          },
        },
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: '',
        style: {
          '& input': {
            padding: 0,
            color: '#616161',
          },
          '& fieldset': { border: 'none' },
          textAlign: 'left',
          '& input::placeholder': {
            fontSize: '16px',
            fontWeight: 400,
            color: '#616161',
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '.MuiFormHelperText-contained': {
            marginLeft: 0.5,
          },
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset !important',
            WebkitTextFillColor: '#000 !important',
            transition: 'background-color 5000s ease-in-out 0s !important',
            padding: 0,
          },
          '& .MuiOutlinedInput-root': {
            color: '#616161',
          },
        },
      },
    ],
    customInputStyle: {
      m: 1,
      p: 2,
      gap: 0.8,
      width: 'auto',
      height: '100%',
      display: 'flex',
      maxHeight: '68px',
      alignItems: 'center',
      border: '1px solid #E0E0E0',
      borderRadius: '12px',
      '&:hover': {
        border: '1px solid #212121',
      },
    },
  },
};
