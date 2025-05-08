import {
  PAY_FORM_ERROR_TEXT,
  REGEX,
} from '../../../constants/components/settings/PaymentForm';
/**
 * Validates the payment form fields and sets error messages for invalid inputs.
 *
 * @param {Function} setErrors - A function to update the error state with validation messages.
 * @param {Object} formState - The current state of the form containing payment details.
 * @param {string} formState.cardNumber - The credit card number to validate.
 * @param {string} formState.expDate - The expiration date of the credit card.
 * @param {string} formState.cvv - The CVV code of the credit card.
 * @param {string} formState.cardHolder - The name of the cardholder.
 * @param {string} formState.country - The selected country for the payment.
 * @returns {boolean} - Returns `true` if the form is valid (no errors), otherwise `false`.
 */
const validateForm = (setErrors, formState) => {
  const newErrors = {};

  if (!formState.cardNumber.match(REGEX.cardNumber)) {
    newErrors.cardNumber = PAY_FORM_ERROR_TEXT.cardNumber;
  }
  if (!formState.expDate) {
    newErrors.expDate = PAY_FORM_ERROR_TEXT.expDate;
  }
  if (!formState.cvv.match(REGEX.cvv)) {
    newErrors.cvv = PAY_FORM_ERROR_TEXT.cvv;
  }
  if (!formState.cardHolder.trim()) {
    newErrors.cardHolder = PAY_FORM_ERROR_TEXT.cardHolder;
  }
  if (!formState.country) {
    newErrors.country = PAY_FORM_ERROR_TEXT.selectCountry;
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

/**
 * Toggles the boolean value of a specified key in the form state.
 *
 * @param {string} key - The key in the form state object to toggle.
 * @param {Function} setFormState - A state updater function to update the form state.
 */
export const handleSwitchChange = (key, setFormState) => {
  setFormState((prev) => ({ ...prev, [key]: !prev[key] }));
};

/**
 * Handles input changes by updating the form state and clearing any associated errors.
 *
 * @param {string} key - The key of the form field being updated.
 * @param {any} value - The new value for the form field.
 * @param {Function} setFormState - A state setter function to update the form state.
 * @param {Function} setErrors - A state setter function to update the error state.
 */
export const handleInputChange = (key, value, setFormState, setErrors) => {
  setFormState((prev) => ({ ...prev, [key]: value }));
  setErrors((prev) => ({ ...prev, [key]: '' }));
};

/**
 * Handles the "Pay Now" action by validating the form, storing the form state in local storage,
 * and displaying an alert with the provided text.
 *
 * @param {Object} formState - The current state of the payment form.
 * @param {Function} setErrors - A function to set validation errors for the form.
 * @param {string} alertText - The text to display in the alert if the form is valid.
 */
export const handlePayNow = (formState, setErrors, alertText) => {
  if (validateForm(setErrors, formState)) {
    localStorage.setItem(
      PAY_FORM_ERROR_TEXT.paymentInfo,
      JSON.stringify(formState)
    );
    alert(alertText);
  }
};
