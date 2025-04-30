import { Box, Typography, RadioGroup } from '@mui/material';
import { useState } from 'react';
import PaymentFormSwitch from './PaymentFormSwitch';
import Card from './Card';
import PropTypes from 'prop-types';

const PaymentForm = ({ data, maxWidth, border, padding, lowCreditText }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentFormData, setPaymentFormData] = useState({
    payout: false,
    new_payment: false,
    credit_card_number: '',
    card_holder_name: '',
    date: '',
    country: '',
    cvv: '',
  });

  const { switchs, buttonText, fields, methods } = data || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ paymentFormData });
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component={'form'}
      sx={{
        width: '100%',
        height: 'auto',
        mx: 'auto',
        maxWidth: maxWidth || '580px',
        border: border || '1px solid #E2E8F0',
        backgroundColor: '#ffff',
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: padding || 3,
      }}
    >
      {lowCreditText}

      <Box display={'flex'} flexDirection={'column'} gap={2}>
        {switchs?.map(({ title, text, name }, switchIndex) => (
          <PaymentFormSwitch
            key={switchIndex}
            label={{ title: title, text: text }}
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
      {methods?.map(({ method, text }, methodIndex) => (
        <RadioGroup
          key={methodIndex}
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e?.target?.value)}
          sx={{ mt: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box
              onClick={() => setPaymentMethod(method)}
              sx={{
                width: '18px',
                height: '18px',
                border: '5px solid #1B2559',
                borderRadius: '100%',
                cursor: 'pointer',
              }}
            />
            <Typography
              sx={{ fontSize: '14px', fontWeight: 700, color: '#1E293B' }}
            >
              {text}
            </Typography>
          </Box>
          {[paymentMethod, method]?.every(
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
