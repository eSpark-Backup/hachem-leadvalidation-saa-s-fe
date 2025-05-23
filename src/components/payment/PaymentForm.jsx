import { Box, Typography, RadioGroup } from '@mui/material';
import { useState } from 'react';
import PaymentFormSwitch from './PaymentFormSwitch';
import Card from './Card';
import PropTypes from 'prop-types';

import {
  PAYMENT_FORM,
  PAYMENTS_FORM_DEFAULT,
} from '../../constants/components/payment/PaymentForm';

import { styles } from '../../styles/components/payments/PaymentForm';

const PaymentForm = ({ data, maxWidth, border, padding, lowCreditText }) => {
  const [paymentMethod, setPaymentMethod] = useState(
    PAYMENT_FORM.defaultPaymentMethod
  );

  const [paymentFormData, setPaymentFormData] = useState(PAYMENTS_FORM_DEFAULT);

  const { switchs, buttonText, fields, methods } = data || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ paymentFormData });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={styles.formContainer(maxWidth, border, padding)}
    >
      {lowCreditText}

      <Box sx={styles.switchesWrapper}>
        {switchs?.map(({ title, text, name }, index) => (
          <PaymentFormSwitch
            key={index}
            label={{ title, text }}
            checked={paymentFormData[name]}
            onChange={(e) =>
              setPaymentFormData({
                ...paymentFormData,
                [name]: e?.target?.checked,
              })
            }
          />
        ))}
      </Box>

      {methods?.map(({ method, text }, index) => (
        <RadioGroup
          key={index}
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e?.target?.value)}
          sx={styles.radioGroupWrapper}
        >
          <Box sx={styles.radioItem}>
            <Box
              onClick={() => setPaymentMethod(method)}
              sx={styles.radioCircle}
            />
            <Typography sx={styles.radioText}>{text}</Typography>
          </Box>

          {[paymentMethod, method].every(
            (val) => val === methods[0]?.method
          ) && (
            <Card
              fields={fields}
              paymentFormData={paymentFormData}
              setPaymentFormData={setPaymentFormData}
              buttonText={buttonText}
            />
          )}
        </RadioGroup>
      ))}
    </Box>
  );
};

PaymentForm.propTypes = {
  data: PropTypes.object.isRequired,
  maxWidth: PropTypes.any.isRequired,
  border: PropTypes.any.isRequired,
  padding: PropTypes.any.isRequired,
  lowCreditText: PropTypes.node,
};

export default PaymentForm;
