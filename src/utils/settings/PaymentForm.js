import {
  PAY_FORM_ERROR_TEXT,
  REGEX,
} from '../../constants/components/settings/PaymentForm';
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

export { validateForm };

export const handleSwitchChange = (key, setFormState) => {
  setFormState((prev) => ({ ...prev, [key]: !prev[key] }));
};

export const handleInputChange = (key, value, setFormState, setErrors) => {
  setFormState((prev) => ({ ...prev, [key]: value }));
  setErrors((prev) => ({ ...prev, [key]: '' }));
};

export const handlePayNow = (formState, setErrors, alertText) => {
  if (validateForm(setErrors, formState)) {
    localStorage.setItem(
      PAY_FORM_ERROR_TEXT.paymentInfo,
      JSON.stringify(formState)
    );
    alert(alertText);
  }
};
