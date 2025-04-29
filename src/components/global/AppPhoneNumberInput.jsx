import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const AppPhoneNumberInput = ({ value, setValue }) => {
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
    />
  );
};

AppPhoneNumberInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default AppPhoneNumberInput;
