const PAYMENT_DATA = {
  title: 'Payments',
  text: 'You can change  your payment credentials here.',
  formData: {
    buttonText: 'Pay Now',
    methods: [
      { method: 'card', text: 'Payment Via Credit Card' },
      { method: 'stripe', text: 'Payment Via Stripe' },
    ],
    switchs: [
      {
        title: 'Enable Auto Payout',
        text: 'AutoPay out occurs at the end of Credits.',
        name: 'payout',
      },
      {
        title: 'Notify New Payments',
        text: 'You will be notified when a payment has been made.',
        name: 'new_payment',
      },
    ],
    fields: [
      {
        px: 1.8,
        label: 'Credit Card Number',
        name: 'credit_card_number',
        type: 'number',
        placeholder: 'Card number',
        endAdornment: [
          '/src/assets/images/payment/visa.png',
          '/src/assets/images/payment/amex.png',
          '/src/assets/images/payment/maestro.png',
        ],
      },
      {
        px: 0.3,
        label: 'Card Holder Name',
        name: 'card_holder_name',
        type: 'text',
        placeholder: 'Holder name',
        startAdornment: '/src/assets/images/payment/card.png',
      },
      {
        px: 1.8,
        label: 'Country',
        name: 'country',
        type: 'text',
        placeholder: 'Country',
      },
      {
        px: 1.8,
        label: 'Expiry Date',
        name: 'date',
        type: 'month',
        placeholder: 'MMMM YYYY',
      },
      {
        px: 1.8,
        label: 'CVV',
        name: 'cvv',
        type: 'number',
        placeholder: 'CVV',
      },
    ],
  },
};

const LOW_CREDITS_DATA = {
  title:
    'low Credits please recharge your Klairn Subscription To get more Credits !',

  // style
  style: {
    mainBoxStyle: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1.5,
      mb: 3,
    },
    circleStyle: {
      width: '20px',
      height: '20px',
      backgroundColor: '#FF4343',
      borderRadius: '50%',
      mt: 0.2,
    },
    titleStyle: {
      width: 'calc(100% - 20px)',
      fontSize: { xs: '12px', sm: '14px' },
      fontWeight: 400,
      color: '#475569',
    },
  },
};

export { PAYMENT_DATA, LOW_CREDITS_DATA };
