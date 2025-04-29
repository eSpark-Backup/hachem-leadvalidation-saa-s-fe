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

const getSupplierInputFields = [
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
    name: 'supplier-id',
    label: 'Supplier ID',
    placeholder: 'e.g. SP12345',
    type: 'text',
    px: 1.8,
  },
];

export { getProfileInputFields, getSupplierInputFields };
