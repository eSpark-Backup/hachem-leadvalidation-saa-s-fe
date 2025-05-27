const getProfileInputFields = () => [
  {
    label: 'Full Name',
    placeholder: 'Your Name',
    name: 'name',
    type: 'text',
    startAdornment: true,
    icon: '/src/assets/settings/user.png',
    px: 0.5,
  },
  {
    label: 'Email Address',
    placeholder: 'Your Email',
    startAdornment: true,
    icon: '/src/assets/settings/email.png',
    name: 'email',
    type: 'email',
    px: 0.5,
  },
  {
    label: 'Phone Number',
    type: 'phone',
    name: 'phone',
    placeholder: 'Your Phone Number',
    px: 1.8,
  },
  {
    label: 'Account Type',
    type: 'select',
    name: 'account-type',
    placeholder: 'Select Account Type',
    px: 1.8,
    value: 'regular',
    endAdornment: ['/src/assets/images/payment/down_arrow.png'],
    options: [
      { value: 'regular', label: 'Regular' },
      { value: 'admin', label: 'Admin' },
    ],
  },
];

const CLIENT_INPUT_FIELDS = [
  {
    label: 'Full Name',
    placeholder: 'Your Name',
    startAdornment: true,
    icon: '/src/assets/settings/user.png',
    name: 'name',
    type: 'text',
    px: 0.5,
  },
  {
    label: 'Email Address',
    placeholder: 'Your Email',
    startAdornment: true,
    icon: '/src/assets/settings/email.png',
    name: 'email',
    type: 'email',
    px: 0.5,
  },
  {
    label: 'Phone Number',
    name: 'phone',
    placeholder: 'Your Phone Number',
    type: 'phone',
    px: 1.8,
  },
  {
    name: `supplier-id`,
    label: `Supplier id`,
    placeholder: 'e.g. SP12345',
    type: 'text',
    px: 1.8,
  },
];

const SUPPLIER_REQUEST_INPUT_FIELDS = [
  {
    label: 'Full Name',
    placeholder: 'Your Name',
    startAdornment: true,
    icon: '/src/assets/settings/user.png',
    name: 'name',
    type: 'text',
    px: 0.5,
  },
  {
    label: 'Email Address',
    placeholder: 'Your Email',
    startAdornment: true,
    icon: '/src/assets/settings/email.png',
    name: 'email',
    type: 'email',
    px: 0.5,
  },
  {
    label: 'Phone Number',
    name: 'phone',
    placeholder: 'Your Phone Number',
    type: 'phone',
    px: 1.8,
  },
  {
    name: `client-id`,
    label: `Client id`,
    placeholder: 'e.g. SP12345',
    type: 'text',
    px: 1.8,
  },
];

const SUPPLIER_COMPANY_INPUT_FIELDS = [
  {
    label: 'Company Name',
    placeholder: 'Company Name',
    startAdornment: true,
    icon: '/src/assets/settings/user.png',
    name: 'company_name',
    type: 'text',
    px: 0.5,
  },
  {
    label: 'Email Address',
    placeholder: 'Your Email',
    startAdornment: true,
    icon: '/src/assets/settings/email.png',
    name: 'email',
    type: 'email',
    px: 0.5,
  },
  {
    label: 'Phone Number',
    name: 'phone',
    placeholder: 'Your Phone Number',
    type: 'phone',
    px: 1.8,
  },
  {
    label: 'Business Type',
    type: 'select',
    name: 'business_type',
    placeholder: 'Select Business Type',
    px: 1.8,
    value: 'electronic',
    endAdornment: ['/src/assets/images/payment/down_arrow.png'],
    options: [{ value: 'electronic', label: 'Electronic' }],
  },
  {
    name: 'company_address',
    label: 'Company Address',
    placeholder: 'Location',
    startAdornment: true,
    icon: '/src/assets/settings/location.png',
    type: 'text',
    px: 0.5,
  },
];

export {
  getProfileInputFields,
  CLIENT_INPUT_FIELDS,
  SUPPLIER_COMPANY_INPUT_FIELDS,
  SUPPLIER_REQUEST_INPUT_FIELDS,
};
