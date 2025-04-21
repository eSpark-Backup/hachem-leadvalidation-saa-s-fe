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
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Auth_FORMS } from '../../constants';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    service_and_policy: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const {
    login,
    customInputStyle,
    scrollBoxStyle,
    fieldStyle,
    formSubmissionButtonStyle,
  } = Auth_FORMS || {};
  const { title, policy, links, fields } = login || {};

  const handleClickEye = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ loginCreds: user });
    setUser({
      email: '',
      password: '',
      service_and_policy: false,
    });
  };

  return (
    <Stack
      minHeight={{ xs: 'auto', sm: 'auto', md: 'auto', lg: '549px' }}
      maxWidth={{ xs: '420px', sm: '482px', md: '480px', lg: '572px' }}
      maxHeight={{ xs: '90%', sm: '470px', lg: '570px' }}
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
          action="#"
          component="form"
          onSubmit={handleLogin}
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
                      ? showPassword
                        ? 'text'
                        : 'password'
                      : type || 'text'
                  }
                />
              </Stack>
              {type === 'password' && (
                <IconButton
                  disableRipple
                  onClick={handleClickEye}
                  sx={{ mr: -1.5 }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
          <Stack direction={'column'} p={1}>
            <Button
              variant="signupButton"
              onClick={handleLogin}
              sx={formSubmissionButtonStyle}
            >
              Login
            </Button>
          </Stack>
          <Stack
            gap={1}
            p={1.5}
            direction={'row'}
            justifyContent={'space-between'}
            flexWrap={'wrap'}
          >
            {links?.map(({ link, text }, linkIndex) => (
              <Link
                key={linkIndex}
                component={RouterLink}
                to={link || '#'}
                underline="none"
                sx={{
                  color: '#136BE5',
                  fontSize: { xs: '12px', sm: '14px', md: '17px' },
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  '@media(max-width: 319px)': {
                    fontSize: '10px',
                  },
                }}
              >
                {text || ''}
              </Link>
            ))}
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'center'}
            mt={{ xs: -2 }}
            gap={1.2}
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

export default Login;
