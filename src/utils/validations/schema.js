import * as yup from 'yup';

// Email verification schema
const strictEmail = yup
  .string()
  .required('Email is required')
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email format');

// Password validation schema
const passwordSchema = yup
  .string()
  .min(10, 'Password must be at least 10 characters long')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(
    /[^a-zA-Z0-9]/,
    'Password must contain at least one special character'
  )
  .required('Password is required');

// Registration validation schema
const registrationSchema = yup.object({
  fullname: yup
    .string()
    .min(3, 'Full name must be at least 3 characters long')
    .max(255, 'Full name must be at most 255 characters long')
    .required('Full name is required'),
  email: strictEmail,
  password: passwordSchema,
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
  company: yup
    .string()
    .max(255, 'Company name must be at most 255 characters long')
    .nullable(),
  role: yup
    .string()
    .oneOf(['client', 'supplier'], 'Role must be either client or supplier')
    .required('Role is required'),
});

// Password reset schema
const resetPasswordSchema = yup.object({
  password: passwordSchema,
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
  token: yup.string().required('Token is required'),
});

export { registrationSchema, resetPasswordSchema };
