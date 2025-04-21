import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Auth_FORMS } from '../../constants';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confrim_password: false,
  });
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confrim_password: '',
    company_name: '',
    service_and_policy: false,
  });
  const {
    signup,
    customInputStyle,
    scrollBoxStyle,
    fieldStyle,
    formSubmissionButtonStyle,
  } = Auth_FORMS || {};
  const { title, fields, policy } = signup || {};

  const handleClickEye = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ signupCreds: user });
    setUser({
      name: '',
      email: '',
      password: '',
      confrim_password: '',
      company_name: '',
      service_and_policy: false,
    });
  };

  return (
    <Stack
      minHeight={{ xs: 'auto', sm: 'auto', md: 'auto', lg: '680px' }}
      maxWidth={{ xs: '420px', sm: '482px', md: '480px', lg: '572px' }}
      maxHeight={{ xs: '90%', sm: '500px', lg: '680px' }}
      py={{ xs: 4.2, sm: 4.2, md: 4.2, lg: 1 }}
      px={{ xs: 2.5, sm: 2, md: 2 }}
      justifyContent={{ lg: 'center' }}
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
            maxWidth: '380px',
            display: 'flex',
            flexDirection: 'column',
          }}
          component="form"
          action="#"
          onSubmit={handleSignup}
        >
          <Typography variant="body2" pb={1} alignSelf={'center'}>
            {title}
          </Typography>

          {fields?.map(({ label, name, type, placeholder }, index) => (
            <Box key={index} sx={customInputStyle}>
              <Stack direction={'column'} spacing={1} width={'100%'}>
                <Typography variant="inputLabel">{label || ''}</Typography>
                <TextField
                  fullWidth
                  required
                  autoComplete="off"
                  sx={fieldStyle}
                  name={user[name] || ''}
                  placeholder={placeholder || ''}
                  onChange={(e) => handleInputChange(name, e?.target?.value)}
                  type={
                    type === 'password'
                      ? showPassword[name]
                        ? 'text'
                        : 'password'
                      : type || 'text'
                  }
                />
              </Stack>
              {type === 'password' && (
                <IconButton
                  disableRipple
                  onClick={() => handleClickEye(name)}
                  sx={{ mr: -1.5 }}
                >
                  {showPassword[name] ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )}
            </Box>
          ))}
          <Stack p={0.6} px={1}>
            <FormControlLabel
              variant="authFormControl"
              label={policy?.title || ''}
              control={
                <Checkbox
                  disableRipple
                  checked={user?.service_and_policy}
                  onChange={(e) =>
                    setUser((prev) => ({
                      ...prev,
                      service_and_policy: e?.target?.checked,
                    }))
                  }
                />
              }
            />
          </Stack>
          <Stack direction={'column'}>
            <Button
              type="submit"
              variant="signupButton"
              onClick={handleSignup}
              sx={formSubmissionButtonStyle}
            >
              Sign up
            </Button>
          </Stack>

          <Stack
            direction={'column'}
            alignItems={'center'}
            mt={{ xs: 1 }}
            gap={1}
          >
            <Typography
              sx={{ fontSize: '12px', fontWeight: 400, color: '#000' }}
            >
              OR
            </Typography>
            <Box
              component={'img'}
              src="/images/auth/google.png"
              sx={{ width: '40px', height: '40px', cursor: 'pointer' }}
            />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default SignupForm;
