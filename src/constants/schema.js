// Static validation messages
const VALIDATION_MESSAGES = {
  emailRequired: 'Email is required',
  emailInvalid: 'Invalid email format',
  passwordMin: 'Password must be at least 10 characters long',
  passwordLower: 'Password must contain at least one lowercase letter',
  passwordUpper: 'Password must contain at least one uppercase letter',
  passwordNumber: 'Password must contain at least one number',
  passwordSpecial: 'Password must contain at least one special character',
  passwordRequired: 'Password is required',
  confirmPasswordRequired: 'Confirm password is required',
  passwordsNotMatch: 'Passwords do not match',
  fullnameMin: 'Full name must be at least 3 characters long',
  fullnameMax: 'Full name must be at most 255 characters long',
  fullnameRequired: 'Full name is required',
  companyMax: 'Company name must be at most 255 characters long',
  roleOneOf: 'Role must be either client or supplier',
  roleRequired: 'Role is required',
  tokenRequired: 'Token is required',
  password: 'password',
  supplier: 'supplier',
  client: 'client',
};

export { VALIDATION_MESSAGES };
