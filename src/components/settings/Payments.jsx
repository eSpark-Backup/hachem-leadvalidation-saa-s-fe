import {
  Box,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  InputAdornment,
  MenuItem,
  Grid,
  Typography,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Check } from '@mui/icons-material';
import { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const countries = [
  { code: 'GB', label: 'United Kingdom', emoji: '🇬🇧' },
  { code: 'US', label: 'United States', emoji: '🇺🇸' },
];

const switches = [
  {
    label: 'Enable Auto Payout',
    stateKey: 'autoPayout',
    description: 'AutoPayout occurs at the end of credits.',
  },
  {
    label: 'Notify New Payments',
    stateKey: 'notifyPayment',
    description: 'You will be notified when a payment has been made.',
  },
];

export default function PaymentForm() {
  const [formState, setFormState] = useState({
    autoPayout: false,
    notifyPayment: true,
    paymentMethod: 'creditCard',
    cardNumber: '',
    expDate: null,
    cvv: '',
    cardHolder: '',
    country: 'GB',
  });

  const [errors, setErrors] = useState({});

  const handleSwitchChange = (key) => {
    setFormState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (key, value) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!formState.expDate) {
      newErrors.expDate = 'Expiration date is required';
    }
    if (!formState.cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    if (!formState.cardHolder.trim()) {
      newErrors.cardHolder = 'Card holder name is required';
    }
    if (!formState.country) {
      newErrors.country = 'Select a country';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = () => {
    if (validateForm()) {
      localStorage.setItem('paymentInfo', JSON.stringify(formState));
      alert('Payment info saved to localStorage!');
    }
  };

  return (
    <Box sx={{ pr: '30%' }}>
      {switches.map(({ label, stateKey, description }) => (
        <Box key={stateKey}>
          <FormControlLabel
            control={
              <Switch
                checked={formState[stateKey]}
                onChange={() => handleSwitchChange(stateKey)}
              />
            }
            label={label}
          />
          <Box sx={{ fontSize: 12, color: 'gray', mb: 2 }}>{description}</Box>
        </Box>
      ))}

      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend">Payment Method</FormLabel>
        <RadioGroup
          value={formState.paymentMethod}
          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
        >
          <FormControlLabel
            value="creditCard"
            control={<Radio />}
            label="Payment Via Credit Card"
          />
          {formState.paymentMethod === 'creditCard' && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={2} sx={{ pl: 2, pr: 2 }}>
                <Grid item xs={12}>
                  <Typography fontWeight={600} mb={1}>
                    Credit Card Number
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="e.g. 1234567812345678"
                    value={formState.cardNumber}
                    type="number"
                    onChange={(e) =>
                      handleInputChange('cardNumber', e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: 5, border: '1px solid #CBD5E1' },
                    }}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography fontWeight={600} mb={1}>
                    Expiry Date (MM/YY)
                  </Typography>
                  <DatePicker
                    views={['month', 'year']}
                    value={formState.expDate}
                    onChange={(newValue) =>
                      handleInputChange('expDate', newValue)
                    }
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.expDate,
                        helperText: errors.expDate,
                        InputProps: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <CreditCardIcon />
                            </InputAdornment>
                          ),
                          sx: {
                            borderRadius: 5,
                            border: '1px solid #CBD5E1',
                          },
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography fontWeight={600} mb={1}>
                    CVV
                  </Typography>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="e.g. 123"
                    value={formState.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: 5, border: '1px solid #CBD5E1' },
                    }}
                    error={!!errors.cvv}
                    helperText={errors.cvv}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight={600} mb={1}>
                    Card Holder Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="John Smith"
                    value={formState.cardHolder}
                    onChange={(e) =>
                      handleInputChange('cardHolder', e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: 5, border: '1px solid #CBD5E1' },
                    }}
                    error={!!errors.cardHolder}
                    helperText={errors.cardHolder}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight={600} mb={1}>
                    Country
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    value={formState.country}
                    onChange={(e) =>
                      handleInputChange('country', e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={`https://flagcdn.com/24x18/${formState.country.toLowerCase()}.png`}
                            alt="Flag"
                            width={24}
                          />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: 5, border: '1px solid #CBD5E1' },
                    }}
                    error={!!errors.country}
                    helperText={errors.country}
                  >
                    {countries.map((c) => (
                      <MenuItem key={c.code} value={c.code}>
                        {c.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </LocalizationProvider>
          )}
          <FormControlLabel
            value="stripe"
            control={<Radio />}
            label="Payment Via Stripe"
          />
        </RadioGroup>
      </FormControl>

      <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
        <Button
          endIcon={<Check />}
          onClick={handlePayNow}
          sx={{
            color: '#FFFFFF',
            background: '#54D14D',
            '&:hover': { backgroundColor: '#CBD5E1' },
            p: '10px 20px',
            borderRadius: 5,
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Pay Now
        </Button>
      </Box>
    </Box>
  );
}
