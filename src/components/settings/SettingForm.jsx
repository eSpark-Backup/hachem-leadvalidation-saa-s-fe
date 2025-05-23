import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import AppInputField from '../global/AppInputField';
import AppPhoneNumberInput from '../global/AppPhoneNumberInput';
import { styles } from '../../styles/components/settings/SettingForm';

const SettingForm = ({ data, values, setValues }) => {
  const handleChange = (key, val) =>
    setValues((prev) => ({ ...prev, [key]: val }));

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
          <Grid item xs={12} sm={6} key={idx} sx={styles.gridItem}>
            {type === 'phone' ? (
              <Box sx={styles.phoneBox}>
                <Typography sx={styles.phoneLabel}>{label}</Typography>
                <AppPhoneNumberInput
                  value={values[name]}
                  setValue={(e) => handleChange(name, e?.target?.value)}
                />
              </Box>
            ) : (
              <AppInputField
                select={type === 'select'}
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
                value={values[name] ?? value ?? ''}
                onChange={(e) => handleChange(name, e?.target?.value)}
                placeholder={placeholder}
                options={options}
                startAdornment={
                  startAdornment && (
                    <Box
                      component="img"
                      src={icon}
                      alt={label}
                      sx={styles.iconImg}
                    />
                  )
                }
                endAdornment={
                  endAdornment && (
                    <Box sx={styles.endAdornmentBox}>
                      {endAdornment.map((iconSrc, iconIndex) => (
                        <img
                          src={iconSrc}
                          key={iconIndex}
                          alt={label}
                          width={16}
                        />
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
