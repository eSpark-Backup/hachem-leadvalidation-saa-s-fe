// TEXT CONSTANTS
const NEW_PASSWORD = {
  confirmPassword: 'confrim_password',
  password: 'password',
  formAction: '#',
  inputAutoComplete: 'off',
  typographyVariant: 'body2',
  inputLabelVariant: 'inputLabel',
  buttonVariant: 'signupButton',
};

const USERS_DEFAULT = {
  [NEW_PASSWORD.password]: '',
  [NEW_PASSWORD.confirmPassword]: '',
};

const SHOW_USERS_DEFAULT = {
  [NEW_PASSWORD.password]: false,
  [NEW_PASSWORD.confirmPassword]: false,
};

const PASSWORD_DEFAULT = { password: '', confrim_password: '' };

export { NEW_PASSWORD, USERS_DEFAULT, SHOW_USERS_DEFAULT, PASSWORD_DEFAULT };
