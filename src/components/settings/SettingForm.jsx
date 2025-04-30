import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import AppInputField from '../global/AppInputField';
import AppPhoneNumberInput from '../global/AppPhoneNumberInput';

const SettingForm = ({ data, values, setValues }) => {
  const handleChange = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      {data?.map(
        (
          {
            name,
            label,
            type,
            value,
            placeholder,
            icon,
            startAdornment,
            endAdornment,
            px,
            options,
          },
          idx
        ) => (
          <Grid item xs={12} sm={6} key={idx} py={0.5}>
            {type === 'phone' ? (
              <Box display={'flex'} flexDirection={'column'} gap={1}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#1E293B',
                  }}
                >
                  {label}
                </Typography>
                <AppPhoneNumberInput
                  value={values[name]}
                  setValue={(e) => handleChange(name, e?.target?.value)}
                />
              </Box>
            ) : (
              <AppInputField
                select={type === 'select' ? true : false}
                key={idx}
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
                value={values[name] || value || ''}
                onChange={(e) => handleChange(name, e?.target?.value)}
                placeholder={placeholder}
                options={options}
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
                      src={icon}
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
                        <img src={icon} key={iconIndex} alt="" width={16} />
                      ))}
                    </Box>
                  )
                }
              />
            )}
          </Grid>
        )
      )}
    </>
  );
};

SettingForm.propTypes = {
  data: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default SettingForm;
