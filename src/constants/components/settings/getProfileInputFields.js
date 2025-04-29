const PROFILE_TEXT = {
  name: {
    label: 'Full Name',
    placeholder: 'Your Name',
    name: 'name',
    type: 'text',
  },
  email: {
    label: 'Email Address',
    placeholder: 'Your Email',
    name: 'email',
    type: 'text',
  },
  phone: {
    label: 'Phone Number',
    placeholder: 'Your Phone Number',
    name: 'phone',
    type: 'tel',
    imgSRC: 'https://flagcdn.com/gb.svg',
    imgAlt: 'UK Flag',
  },
  accountType: {
    label: 'Account Type',
    type: 'select',
    name: 'account-type',
    placeholder: 'Select Account Type',
    options: [
      { value: 'regular', label: 'Regular' },
      { value: 'admin', label: 'Admin' },
    ],
  },
};

const SUPPLIER_TEXT = {
  name: {
    label: 'Full Name',
    placeholder: 'Your Name',
    type: 'text',
    name: 'name',
  },
  email: {
    label: 'Email Address',
    placeholder: 'Your Email',
    type: 'email',
    name: 'email',
  },
  phone: {
    label: 'Phone Number',
    placeholder: 'Your Phone Number',
    name: 'phone',
    type: 'tel',
    imgSRC: 'https://flagcdn.com/gb.svg',
    imgAlt: 'UK Flag',
  },
  supplierId: {
    label: 'Supplier ID',
    placeholder: 'e.g. SP12345',
    name: 'supplier-id',
    type: 'text',
  },
};

export { SUPPLIER_TEXT, PROFILE_TEXT };
