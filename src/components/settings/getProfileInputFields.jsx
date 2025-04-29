import { Email, HelpOutline, Person } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import {
  PROFILE_TEXT,
  SUPPLIER_TEXT,
} from '../../constants/components/settings/getProfileInputFields';

// Functions to get input field definitions
const getProfileInputFields = (accountType, setAccountType) => [
  {
    label: PROFILE_TEXT.name.label,
    placeholder: PROFILE_TEXT.name.placeholder,
    name: PROFILE_TEXT.name.name,
    type: PROFILE_TEXT.name.type,
    startAdornment: <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>,
  },
  {
    label: PROFILE_TEXT.email.label,
    placeholder: PROFILE_TEXT.email.placeholder,
    startAdornment: <Email />,
    name: PROFILE_TEXT.email.name,
    type: PROFILE_TEXT.email.type,
  },
  {
    label: PROFILE_TEXT.phone.label,
    placeholder: PROFILE_TEXT.phone.placeholder,
    type: PROFILE_TEXT.phone.type,
    name: PROFILE_TEXT.phone.name,
    startAdornment: (
      <img
        src={PROFILE_TEXT.phone.imgSRC}
        alt={PROFILE_TEXT.phone.imgAlt}
        style={{ width: 24 }}
      />
    ),
  },
  {
    label: PROFILE_TEXT.accountType.label,
    type: PROFILE_TEXT.accountType.type,
    name: PROFILE_TEXT.accountType.name,
    placeholder: PROFILE_TEXT.accountType.placeholder,
    startAdornment: null,
    value: accountType,
    onChange: (e) => setAccountType(e.target.value),
    options: PROFILE_TEXT.accountType.options,
  },
];

const getSupplierInputFields = [
  {
    label: SUPPLIER_TEXT.name.label,
    placeholder: SUPPLIER_TEXT.name.placeholder,
    icon: <Person />,
    name: SUPPLIER_TEXT.name.name,
    type: SUPPLIER_TEXT.name.type,
  },
  {
    label: SUPPLIER_TEXT.email.label,
    placeholder: SUPPLIER_TEXT.email.placeholder,
    icon: <Email />,
    name: SUPPLIER_TEXT.email.name,
    type: SUPPLIER_TEXT.email.type,
  },
  {
    label: SUPPLIER_TEXT.phone.label,
    placeholder: SUPPLIER_TEXT.phone.placeholder,
    name: SUPPLIER_TEXT.phone.name,
    type: SUPPLIER_TEXT.phone.type,
    icon: (
      <img
        src={SUPPLIER_TEXT.phone.imgSRC}
        alt={SUPPLIER_TEXT.phone.imgAlt}
        style={{ width: 24, borderRadius: '50%' }}
      />
    ),
    endIcon: <HelpOutline fontSize="small" />,
  },
  {
    label: SUPPLIER_TEXT.supplierId.label,
    placeholder: SUPPLIER_TEXT.supplierId.placeholder,
    name: SUPPLIER_TEXT.supplierId.name,
    type: SUPPLIER_TEXT.supplierId.type,
  },
];

export { getProfileInputFields, getSupplierInputFields };
