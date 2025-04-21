// Authentication forms constant

export const Auth_FORMS = {
  // forms data
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
        label: 'EMAIL',
        name: 'email',
        type: 'email',
        placeholder: 'John@gmail.com',
      },
      {
        label: 'PASSWORD',
        name: 'password',
        type: 'password',
        placeholder: '******',
      },
    ],
  },
  signup_as: {
    title: 'Sign up as A',
    buttons: [
      {
        text: 'SUPPLIER',
      },
      {
        text: 'CLIENT',
      },
    ],

    // styles
    signupTypeButtonStyle: (selectedOption, text) => ({
      mb: 1,
      pr: 3,
      width: '100%',
      maxWidth: '380px',
      height: '68px',
      fontWeight: 500,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#212121',
      fontSize: { xs: '15px', sm: '17px', md: '19px', lg: '21px' },
      border: selectedOption[text?.toLowerCase()]
        ? '1px solid #fff'
        : '1px solid #212121',
      background: selectedOption[text?.toLowerCase()]
        ? 'linear-gradient(to right, #a8e063, #56ab2f)'
        : 'transparent',
      borderRadius: '12px',
      '&:hover': {
        border: selectedOption[text?.toLowerCase()]
          ? '1px solid #fff'
          : '1px solid #212121',
        background: selectedOption[text?.toLowerCase()]
          ? 'linear-gradient(to right, #a8e063, #56ab2f)'
          : 'transparent',
      },
    }),
  },
  signup: {
    title: 'Sign up',
    policy: {
      title: 'I agree to the Terms of Service and Privacy Policy.',
      status: false,
    },
    fields: [
      {
        label: 'FULL NAME',
        name: 'name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        label: 'EMAIL',
        name: 'email',
        type: 'email',
        placeholder: 'John@gmail.com',
      },
      {
        label: 'PASSWORD',
        name: 'password',
        type: 'password',
        placeholder: '******',
      },
      {
        label: 'CONFRIM PASSWORD',
        name: 'confrim_password',
        type: 'password',
        placeholder: '******',
      },
      {
        label: 'COMPANY NAME (Optional)',
        name: 'company_name',
        type: 'text',
        placeholder: 'Klairn',
      },
    ],
  },
  verify_email: {
    title: 'Verify your Email',
    text: 'A verification code has been sent to your email',
    buttonText: 'Verify',
    link: {
      text: 'Resend',
      link: '/signup',
    },
    // styles
    textStyle: {
      fontSize: '20px',
      fontWeight: 400,
      color: '#212121',
      mb: 2,
      mx: 1.5,
    },
    linkStyle: {
      color: '#136BE5',
      fontSize: { xs: '15px', md: '18px', lg: '20px' },
      fontFamily: 'Inter',
      fontWeight: 400,
      '@media(max-width: 319px)': {
        fontSize: '10px',
      },
    },
    otpXsStyle: {
      width: '2.3rem',
      height: '2.3rem',
      margin: '0 0.5rem',
      fontSize: '1.2rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    otpSmStyle: {
      width: '3rem',
      height: '3rem',
      margin: '0 0.5rem',
      fontSize: '1.5rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    },
  },

  // forms styles
  customInputStyle: {
    m: 0.6,
    gap: 0.8,
    width: 'auto',
    height: '100%',
    display: 'flex',
    maxHeight: '68px',
    alignItems: 'center',
    border: '1px solid #E0E0E0',
    py: { xs: 1, lg: 1.2 },
    px: { xs: 1.5, lg: 2 },
    borderRadius: '12px',
    '&:hover': {
      border: '1px solid #212121',
    },
  },
  fieldStyle: {
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
  scrollBoxStyle: {
    pr: 1.5,
    my: 1.5,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  formSubmissionButtonStyle: {
    height: { xs: '54px', lg: '64px' },
    borderRadius: '12px',
    textTransform: 'uppercase',
    fontWeight: 500,
    '&.Mui-disabled': {
      backgroundColor: '#ccc',
      color: '#666',
    },
  },
};
