const COUNTRIES = [
  { code: 'GB', label: 'United Kingdom', emoji: '🇬🇧' },
  { code: 'US', label: 'United States', emoji: '🇺🇸' },
];

const SWITCHES = [
  {
    label: 'Enable Auto Payout',
    stateKey: 'autoPayout',
    description: 'AutoPayout occurs at the end of credits.',
  },
  {
    label: 'Notify New Payments',
    stateKey: 'notifyPayment',
    description: 'You will be notified when a payment has been made.',
  },
];

const FORM_STATE_DEFAULT = {
  autoPayout: false,
  notifyPayment: true,
  paymentMethod: 'creditCard',
  cardNumber: '',
  expDate: null,
  cvv: '',
  cardHolder: '',
  country: 'GB',
};

const PAY_FORM_TEXT = {
  handlePayNowAlertText: 'Payment info saved to localStorage!',
  paymentMethodLegend: 'Payment Method',
  creditCardOption: 'Payment Via Credit Card',
  stripeOption: 'Payment Via Stripe',
  cardNumberLabel: 'Credit Card Number',
  cardNumberPlaceholder: 'e.g. 1234567812345678',
  expiryDateLabel: 'Expiry Date (MM/YY)',
  cvvLabel: 'CVV',
  cvvPlaceholder: 'e.g. 123',
  cardHolderLabel: 'Card Holder Name',
  cardHolderPlaceholder: 'John Smith',
  countryLabel: 'Country',
  payNowButton: 'Pay Now',
  creditCard: 'creditCard',
  cardNumber: 'cardNumber',
  datePickerOptions: ['month', 'year'],
  expDate: 'expDate',
  cvv: 'cvv',
  cardHolder: 'cardHolder',
  country: 'country',
  paymentMethod: 'paymentMethod',
  stripe: 'stripe',
};

const PAY_FORM_ERROR_TEXT = {
  paymentInfo: 'paymentInfo',
  selectCountry: 'Select a country',
  cardHolder: 'Card holder name is required',
  cvv: 'CVV must be 3 digits',
  cardNumber: 'Card number must be 16 digits',
  expDate: 'Expiration date is required',
};

const REGEX = {
  cardNumber: /^\d{16}$/,
  cvv: /^\d{3}$/,
};

export {
  SWITCHES,
  COUNTRIES,
  FORM_STATE_DEFAULT,
  PAY_FORM_TEXT,
  PAY_FORM_ERROR_TEXT,
  REGEX,
};
