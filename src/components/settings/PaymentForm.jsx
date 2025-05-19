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
import {
  COUNTRIES,
  FORM_STATE_DEFAULT,
  PAY_FORM_TEXT,
  SWITCHES,
} from '../../constants/components/settings/PaymentForm';
import { PaymentFormStyles } from '../../styles/components/settings/PaymentForm';
import {
  handleInputChange,
  handlePayNow,
  handleSwitchChange,
} from '../../utils/settings/PaymentForm';

const PaymentForm = () => {
  const [formState, setFormState] = useState(FORM_STATE_DEFAULT);
  const [errors, setErrors] = useState({});

  return (
    <Box sx={PaymentFormStyles.boxContainer}>
      {SWITCHES.map(({ label, stateKey, description }) => (
        <Box key={stateKey}>
          <FormControlLabel
            control={
              <Switch
                checked={formState[stateKey]}
                onChange={() => handleSwitchChange(stateKey, setFormState)}
              />
            }
            label={label}
          />
          <Box sx={PaymentFormStyles.description}>{description}</Box>
        </Box>
      ))}

      <FormControl component={'fieldset'} sx={PaymentFormStyles.radioFieldset}>
        <FormLabel component={'legend'}>
          {PAY_FORM_TEXT.paymentMethodLegend}
        </FormLabel>
        <RadioGroup
          value={formState.paymentMethod}
          onChange={(e) =>
            handleInputChange(
              PAY_FORM_TEXT.paymentMethod,
              e.target.value,
              setFormState,
              setErrors
            )
          }
        >
          <FormControlLabel
            value={PAY_FORM_TEXT.creditCard}
            control={<Radio />}
            label={PAY_FORM_TEXT.creditCardOption}
          />

          {formState.paymentMethod === PAY_FORM_TEXT.creditCard && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={2} sx={PaymentFormStyles.gridPadding}>
                <Grid item xs={12}>
                  <Typography fontWeight={600} mb={1}>
                    {PAY_FORM_TEXT.cardNumberLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder={PAY_FORM_TEXT.cardNumberPlaceholder}
                    value={formState.cardNumber}
                    type={'number'}
                    onChange={(e) =>
                      handleInputChange(
                        PAY_FORM_TEXT.cardNumber,
                        e.target.value,
                        setFormState,
                        setErrors
                      )
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position={'start'}>
                          <CreditCardIcon />
                        </InputAdornment>
                      ),
                      sx: PaymentFormStyles.textInput,
                    }}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography fontWeight={600} mb={1}>
                    {PAY_FORM_TEXT.expiryDateLabel}
                  </Typography>
                  <DatePicker
                    views={PAY_FORM_TEXT.datePickerOptions}
                    value={formState.expDate}
                    onChange={(newValue) =>
                      handleInputChange(
                        PAY_FORM_TEXT.expDate,
                        newValue,
                        setFormState,
                        setErrors
                      )
                    }
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.expDate,
                        helperText: errors.expDate,
                        InputProps: {
                          startAdornment: (
                            <InputAdornment position={'start'}>
                              <CreditCardIcon />
                            </InputAdornment>
                          ),
                          sx: PaymentFormStyles.textInput,
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography fontWeight={600} mb={1}>
                    {PAY_FORM_TEXT.cvvLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    type={'number'}
                    placeholder={PAY_FORM_TEXT.cvvPlaceholder}
                    value={formState.cvv}
                    onChange={(e) =>
                      handleInputChange(
                        PAY_FORM_TEXT.cvv,
                        e.target.value,
                        setFormState,
                        setErrors
                      )
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position={'start'}>
                          <CreditCardIcon />
                        </InputAdornment>
                      ),
                      sx: PaymentFormStyles.textInput,
                    }}
                    error={!!errors.cvv}
                    helperText={errors.cvv}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight={600} mb={1}>
                    {PAY_FORM_TEXT.cardHolderLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder={PAY_FORM_TEXT.cardHolderPlaceholder}
                    value={formState.cardHolder}
                    onChange={(e) =>
                      handleInputChange(
                        PAY_FORM_TEXT.cardHolder,
                        e.target.value,
                        setFormState,
                        setErrors
                      )
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position={'start'}>
                          <AccountCircleIcon />
                        </InputAdornment>
                      ),
                      sx: PaymentFormStyles.textInput,
                    }}
                    error={!!errors.cardHolder}
                    helperText={errors.cardHolder}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight={600} mb={1}>
                    {PAY_FORM_TEXT.countryLabel}
                  </Typography>
                  <TextField
                    select
                    fullWidth
                    value={formState.country}
                    onChange={(e) =>
                      handleInputChange(
                        PAY_FORM_TEXT.country,
                        e.target.value,
                        setFormState,
                        setErrors
                      )
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={`https://flagcdn.com/24x18/${formState.country.toLowerCase()}.png`}
                            width={24}
                          />
                        </InputAdornment>
                      ),
                      sx: PaymentFormStyles.textInput,
                    }}
                    error={!!errors.country}
                    helperText={errors.country}
                  >
                    {COUNTRIES.map((c) => (
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
            value={PAY_FORM_TEXT.stripe}
            control={<Radio />}
            label={PAY_FORM_TEXT.stripeOption}
          />
        </RadioGroup>
      </FormControl>

      <Box display={'flex'} justifyContent={'flex-end'} gap={2} mt={2}>
        <Button
          endIcon={<Check />}
          onClick={() =>
            handlePayNow(
              formState,
              setErrors,
              PAY_FORM_TEXT.handlePayNowAlertText
            )
          }
          sx={PaymentFormStyles.button}
        >
          {PAY_FORM_TEXT.payNowButton}
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentForm;
