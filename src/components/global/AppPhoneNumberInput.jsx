import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const AppPhoneNumberInput = ({ value, setValue, placeholder }) => {
  return (
    <PhoneInput placeholder={placeholder} value={value} onChange={setValue} />
  );
};

AppPhoneNumberInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.any.isRequired,
};

export default AppPhoneNumberInput;
