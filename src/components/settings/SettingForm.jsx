import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const SettingForm = ({ data, values, setValues }) => {
  // Set default values if not present in the 'values' object
  const getDefaultValue = (field) => {
    if (field.type === 'select' && field.options.length > 0) {
      return field.options[0].value; // Default to the first option for select fields
    }
    if (field.type === 'phone') {
      return ''; // Default empty value for phone
    }
    return ''; // Default empty value for other fields
  };

  const handleChange = useCallback(
    (key) => (e) => {
      const value = e.target.value;
      setValues((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [setValues]
  );

  return (
    <>
      {data.map((field, idx) => (
        <Grid item xs={12} sm={6} key={idx}>
          {field.type === 'select' ? (
            <>
              <Typography fontWeight={500} mb={1}>
                {field.label}
              </Typography>
              <TextField
                fullWidth
                select
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || getDefaultValue(field)}
                onChange={handleChange(field.name)}
                InputProps={{
                  startAdornment: field.startAdornment ? (
                    <InputAdornment position="start">
                      {field.startAdornment}
                    </InputAdornment>
                  ) : undefined,
                  sx: { borderRadius: 5, border: '1px solid #CBD5E1' },
                }}
              >
                {field.options.map((opt, i) => (
                  <MenuItem key={i} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </TextField>
            </>
          ) : field.type === 'phone' ? (
            <>
              <Typography fontWeight={500} mb={1}>
                {field.label}
              </Typography>
              <TextField
                fullWidth
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || getDefaultValue(field)}
                onChange={handleChange(field.name)}
                InputProps={{
                  startAdornment: field.startAdornment ? (
                    <InputAdornment position="start">
                      {field.startAdornment}
                    </InputAdornment>
                  ) : undefined,
                  sx: { borderRadius: 5, border: '1px solid #CBD5E1' },
                }}
              />
            </>
          ) : (
            <>
              <Typography fontWeight={500} mb={1}>
                {field.label}
              </Typography>
              <TextField
                fullWidth
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name] || getDefaultValue(field)}
                onChange={handleChange(field.name)}
                InputProps={{
                  startAdornment: field.startAdornment ? (
                    <InputAdornment position="start">
                      {field.startAdornment}
                    </InputAdornment>
                  ) : undefined,
                  sx: { borderRadius: 5, border: '1px solid #CBD5E1' },
                }}
              />
            </>
          )}
        </Grid>
      ))}
    </>
  );
};

SettingForm.propTypes = {
  data: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default SettingForm;
