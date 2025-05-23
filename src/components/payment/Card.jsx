import { Box, Button } from '@mui/material';
import AppInputField from '../global/AppInputField';
import CountrySelect from '../global/AppCountryDropdown';
import en from 'react-phone-number-input/locale/en';
import PropTypes from 'prop-types';

import { styles } from '../../styles/components/payments/Card';

const Card = ({ fields, buttonText, paymentFormData, setPaymentFormData }) => {
  const handleChange = (key, val) => {
    setPaymentFormData((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <Box sx={styles.container}>
      {fields?.map(
        (
          { name, label, type, px, placeholder, startAdornment, endAdornment },
          fieldIndex
        ) => (
          <Box key={fieldIndex}>
            {label === fields[2]?.label ? (
              <CountrySelect
                labels={en}
                title={label}
                paymentFormData={paymentFormData}
                onChange={setPaymentFormData}
              />
            ) : (
              <AppInputField
                title={label}
                fontSize="16px"
                py={1.6}
                px={px}
                color="#475569"
                borderRadius="123px"
                border="1px solid #CBD5E1"
                fontWeight={500}
                type={type}
                name={name}
                value={paymentFormData[name] || ''}
                onChange={(e) => handleChange(name, e?.target?.value)}
                formData={paymentFormData}
                setCalenderValue={setPaymentFormData}
                placeholder={placeholder}
                startAdornment={
                  startAdornment && (
                    <Box
                      component="img"
                      src={startAdornment}
                      alt={label}
                      sx={styles.startAdornmentImg}
                    />
                  )
                }
                endAdornment={
                  endAdornment && (
                    <Box sx={styles.endAdornmentBox}>
                      {endAdornment.map((icon, iconIndex) => (
                        <img
                          src={icon}
                          key={iconIndex}
                          alt={label}
                          width={26}
                        />
                      ))}
                    </Box>
                  )
                }
              />
            )}
          </Box>
        )
      )}
      <Button
        type="submit"
        variant="formSubmissionButton"
        sx={styles.submitButton}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

Card.propTypes = {
  fields: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
  paymentFormData: PropTypes.object.isRequired,
  setPaymentFormData: PropTypes.func.isRequired,
};

export default Card;
