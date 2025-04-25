import { Email, HelpOutline, Person } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const getProfileInputFields = (accountType, setAccountType) => [
  {
    label: 'Full Name',
    placeholder: 'Your Name',
    name: 'name',
    startAdornment: <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>,
  },
  {
    label: 'Email Address',
    placeholder: 'Your Email',
    startAdornment: <Email />,
    name: 'email',
  },
  {
    label: 'Phone Number',
    type: 'phone',
    name: 'phone',
    placeholder: 'Your Phone Number',
    startAdornment: (
      <img
        src="https://flagcdn.com/gb.svg"
        alt="UK Flag"
        style={{ width: 24 }}
      />
    ),
  },
  {
    label: 'Account Type',
    type: 'select',
    name: 'account-type',
    placeholder: 'Select Account Type',
    startAdornment: null,
    value: accountType,
    onChange: (e) => setAccountType(e.target.value),
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
    icon: <Person />,
    name: 'name',
  },
  {
    label: 'Email Address',
    placeholder: 'Your Email',
    icon: <Email />,
    name: 'eamil',
  },
  {
    label: 'Phone Number',
    name: 'phone',
    placeholder: 'Your Phone Number',
    icon: (
      <img
        src="https://flagcdn.com/gb.svg"
        alt="UK"
        style={{ width: 24, borderRadius: '50%' }}
      />
    ),
    endIcon: <HelpOutline fontSize="small" />,
  },
  { name: 'supplier-id', label: 'Supplier ID', placeholder: 'e.g. SP12345' },
];

export { getProfileInputFields, getSupplierInputFields };
