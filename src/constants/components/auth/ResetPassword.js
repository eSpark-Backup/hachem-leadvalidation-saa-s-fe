const RESET_PASSWORD = {
  password: 'confrim_password',
  confirmPassword: 'confrim_password',
  formAction: '#',
  autoCompleteOff: 'off',
  labelVariant: 'inputLabel',
  typographyVariant: 'body2',
  submitVariant: 'signupButton',
};

const RESET_USERS_DEFAULT = {
  current_password: '',
  new_password: '',
  confrim_password: '',
};

const RESET_SHOW_USERS_DEFAULT = {
  current_password: false,
  new_password: false,
  confrim_password: false,
};

export { RESET_PASSWORD, RESET_USERS_DEFAULT, RESET_SHOW_USERS_DEFAULT };
