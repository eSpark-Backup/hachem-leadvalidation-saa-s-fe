const CREDITS_DATA = {
  title: `Supercharge Your Lead CardValidation with <span style="color: #126D30;  ">Pre-Loaded</span> Credits`,
  description:
    'Validate leads faster and more efficiently with our pre-paid credit system. Start with €100 minimum and unlock better rates as you scale.',
  buttonText: 'Pre-Load Credit Now',
  modalData: {
    title: 'Pre-Load Your Account',
    text: 'Add credits to your account to start validating leads. Minimum amount is €100.',
    bill: [
      { billText: 'Credits to add' },
      {
        billText: 'Leads (at high volume)',
        billAmount: '101',
      },
      {
        billText: 'Total',
        color: '#09102B',
        weight: 600,
      },
    ],
    field: {
      label: 'Amount (€)',
      name: 'amount',
      placeholder: '100',
      type: 'number',

      // field style
      style: {
        '& input': {
          fontSize: '15px',
          padding: '9px 0px 9px 15px',
          color: '#000',
          border: '1px solid #263C2870',
          borderRadius: '8.65px',
        },
        '& fieldset': { border: 'none' },
        textAlign: 'left',
        '& input::placeholder': {
          fontSize: '15px',
          fontWeight: 400,
          color: '#8F9BBA',
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          WebkitAppearance: 'block',
          height: 16,
          display: 'flex',
          alignSelf: 'center',
          mx: '15px',
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
    buttons: [
      {
        btnText: 'Cancel',
        buttonStyle: {
          width: { xs: '100%', sm: '68px' },
          height: { xs: '40px', sm: '30px' },
          backgroundColor: '#FFFFFF',
          border: '1px solid #77797D',
          boxShadow: '0.77px 1.53px 2.3px 0px rgba(70, 118, 251, 0.41)',
          textWrap: 'noWrap',
          fontSize: '11px',
        },
      },
      {
        btnText: 'Pay Now',
        buttonStyle: {
          width: { xs: '100%', sm: '77px' },
          height: { xs: '40px', sm: '30px' },
          color: '#FFFFFF',
          backgroundColor: '#136BE5',
          border: '1px solid #FFFFFF',
          boxShadow: '0.77px 1.53px 2.3px 0px rgba(70, 118, 251, 0.41)',
          textWrap: 'noWrap',
          fontSize: '11px',
          '&:hover': {
            color: '#FFFFFF',
            backgroundColor: '#136BE5',
          },
        },
      },
    ],

    // style
    iconButtonStyle: {
      width: '20px',
      height: '20px',
      color: 'black',
      position: 'absolute',
      top: 20,
      right: 20,
      p: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    modalBoxStyle: {
      top: '50%',
      left: '50%',
      width: '90%',
      height: '90%',
      position: 'absolute',
      maxWidth: { xs: '474px', sm: '574px' },
      maxHeight: { xs: '500px', sm: '380px', md: '400px' },
      bgcolor: 'background.paper',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto',
    },
  },
  card: {
    title: 'Lead Validation Credits',
    minimumAmountText: 'Minimum preload amount:',
    volume: [
      {
        vol: 'Low Volume',
        duration: ' (<1,000 leads/month) ',
        price: '€1.99',
        text: 'per validated lead',
      },
      {
        vol: 'High Volume',
        duration: '(≥1,000 leads/month)',
        price: '€0.99',
        text: 'per validated lead',
      },
    ],

    // style
    volumeBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'space-between',
      backgroundColor: 'rgba(70, 118, 251, 0.19)',
      borderRadius: '21px',
      p: 1.5,
    },
  },
};

export default CREDITS_DATA;
