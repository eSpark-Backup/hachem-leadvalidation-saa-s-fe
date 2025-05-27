import { Box, Button } from '@mui/material';
import AppInputField from '../global/AppInputField';
import CountrySelect from '../global/AppCountryDropdown';
import en from 'react-phone-number-input/locale/en';
import PropTypes from 'prop-types';

const Card = ({ fields, buttonText, paymentFormData, setPaymentFormData }) => {
  const handleChange = (key, val) => {
    setPaymentFormData((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, my: 2 }}>
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
                fontSize={'16px'}
                py={1.6}
                px={px}
                color={'#475569'}
                borderRadius={'123px'}
                border={'1px solid #CBD5E1'}
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
                      component={'img'}
                      width={18}
                      sx={{
                        width: 20,
                        display: 'flex',
                        alignSelf: 'center',
                      }}
                      src={startAdornment}
                    />
                  )
                }
                endAdornment={
                  endAdornment && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      {endAdornment?.map((icon, iconIndex) => (
                        <img src={icon} key={iconIndex} alt="" width={26} />
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
        sx={{
          mt: 1,
          display: 'flex',
          alignSelf: 'flex-end',
          width: { xs: '100%', sm: '166px' },
          height: '40px',
          fontSize: { xs: '12px', sm: '14px' },
        }}
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
