import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { AUTH_FORMS } from '../../constants/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    console.log({ forgotPassword: user });
    if (user?.email) {
      navigate(`/forget-password/${user?.email}`);
      setUser({
        email: '',
      });
    } else {
      null;
    }
  };

  return (
    <Stack
      maxWidth={{ xs: '420px', sm: '482px', md: '480px', lg: '572px' }}
      minHeight={{ xs: '320px', lg: '368px' }}
      maxHeight={{ xs: '90%', lg: '368px' }}
      py={{ xs: 4.2, lg: 1 }}
      px={{ xs: 2.5, md: 2 }}
      justifyContent={{ xs: 'center' }}
      alignItems={'center'}
      variant={'authStack'}
      direction={'column'}
      useFlexGap
      spacing={2}
    >
      <Box overflow={'auto'} sx={scrollBoxStyle}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            maxWidth: '380px',
            flexDirection: 'column',
            gap: 2.2,
          }}
          action="#"
          component="form"
          onSubmit={handleSendCode}
        >
          <Typography variant="body2" pb={1} alignSelf={'center'}>
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 1.8,
            }}
          >
            {fields?.map(({ label, name, type, placeholder }, index) => (
              <Box key={index} sx={customInputStyle}>
                <Stack direction={'column'} spacing={1} width={'100%'}>
                  <Typography variant="inputLabel">{label || ''}</Typography>
                  <TextField
                    fullWidth
                    required
                    autoComplete="off"
                    sx={fieldStyle}
                    name={name}
                    value={user[name] || ''}
                    placeholder={placeholder || ''}
                    onChange={(e) => handleInputChange(name, e?.target?.value)}
                    type={type}
                  />
                </Stack>
              </Box>
            ))}
            <Stack direction={'column'} px={0.5} py={1}>
              <Button
                type="submit"
                variant="signupButton"
                disabled={user?.email === ''}
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
