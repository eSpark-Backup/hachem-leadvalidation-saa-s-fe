import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { AUTH_FORMS } from '../../constants/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/components/globals/Auth';
import { styles } from '../../constants/components/auth/ForgotPassword';

const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: '',
  });

  const {
    forgot_password,
    scrollBoxStyle,
    formSubmissionButtonStyle,
    customInputStyle,
    fieldStyle,
  } = AUTH_FORMS || {};

  const { title, fields, buttonText } = forgot_password;
  const { forgotPassword } = ROUTES || {};
  const navigate = useNavigate();

  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    console.log({ forgotPassword: user });
    if (user?.email) {
      navigate(`${forgotPassword}/${user?.email}`);
      setUser({
        email: '',
      });
    } else {
      null;
    }
  };

  return (
    <Stack
      sx={styles.outerStack}
      variant="authStack"
      direction="column"
      useFlexGap
      spacing={2}
    >
      <Box overflow="auto" sx={scrollBoxStyle}>
        <Box
          sx={styles.formWrapper}
          action="#"
          component="form"
          onSubmit={handleSendCode}
        >
          <Typography variant="body2" pb={1} alignSelf="center">
            {title}
          </Typography>
          <Box sx={styles.inputGroup}>
            {fields?.map(({ label, name, type, placeholder }, index) => (
              <Box key={index} sx={customInputStyle}>
                <Stack direction="column" spacing={0.5} width="100%">
                  <Typography variant="inputLabel">{label}</Typography>
                  <TextField
                    fullWidth
                    autoComplete="off"
                    sx={fieldStyle}
                    name={name}
                    value={user[name] || ''}
                    placeholder={placeholder}
                    onChange={(e) => handleInputChange(name, e?.target?.value)}
                    type={type}
                  />
                </Stack>
              </Box>
            ))}
            <Stack direction="column" px={0.5} py={1}>
              <Button
                type="submit"
                variant="signupButton"
                disabled={!user?.email}
                sx={formSubmissionButtonStyle}
              >
                {buttonText}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default ForgotPassword;
