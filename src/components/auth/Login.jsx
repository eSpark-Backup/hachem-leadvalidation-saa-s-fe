import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Checkbox from './Checkbox';
import GoogleLoginImage from './GoogleLoginImage';

import { useLoginMutation } from '../../redux/slices/auth/authApiSlice';

import { handleLoginMutation } from '../../services/auth';

import { AUTH_FORMS } from '../../constants/auth';

const Login = () => {
  const {
    login: Login,
    customInputStyle,
    scrollBoxStyle,
    fieldStyle,
    errorStyle,
    formSubmissionButtonStyle,
    service_and_policy,
    or,
  } = AUTH_FORMS || {};
  const { title, links, fields } = Login || {};

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const [user, setUser] = useState({
    email: '',
    password: '',
    service_and_policy: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleClickEye = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await handleLoginMutation(
      user,
      login,
      dispatch,
      setError,
      navigate
    );
    if (!res) return;
  };

  return (
    <Stack
      minHeight={{ xs: 'auto', sm: '450px', lg: '549px' }}
      maxWidth={{ xs: '420px', sm: '482px', lg: '572px' }}
      maxHeight={{ xs: '90%', lg: '570px' }}
      justifyContent={{ lg: 'center' }}
      py={{ xs: 4.2, sm: 3, lg: 1 }}
      px={{ xs: 2.5, sm: 2, md: 2 }}
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
            <Box key={index}>
              <Box sx={customInputStyle(error && error[name])}>
                <Stack direction={'column'} spacing={0.5} width={'100%'}>
                  <Typography variant="inputLabel">{label || ''}</Typography>

                  <TextField
                    fullWidth
                    autoComplete="off"
                    sx={fieldStyle}
                    name={name}
                    value={user[name] || ''}
                    placeholder={placeholder || ''}
                    onChange={(e) => handleInputChange(name, e?.target?.value)}
                    type={
                      type === fields?.[1]?.type
                        ? showPassword
                          ? fields?.[1]?.defaultType
                          : fields?.[1]?.type
                        : type || fields?.[1]?.defaultType
                    }
                  />
                </Stack>

                {type === fields?.[1]?.type && (
                  <IconButton
                    disableRipple
                    onClick={handleClickEye}
                    sx={{ mr: -1.5 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </Box>

              {error && <Typography sx={errorStyle}>{error[name]}</Typography>}
            </Box>
          ))}

          <Stack px={1} py={1}>
            <Checkbox
              setChecked={setUser}
              checked={user?.service_and_policy}
              data={service_and_policy}
            />
          </Stack>

          <Stack direction={'column'} px={0.5} py={1}>
            <Button
              variant="signupButton"
              onClick={handleLogin}
              sx={formSubmissionButtonStyle}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={30} sx={{ color: ' #444444' }} />
              ) : (
                title
              )}
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
                sx={{
                  color: '#136BE5',
                  fontSize: { xs: '12px', sm: '14px', md: '17px' },
                  fontWeight: 400,
                  '@media(max-width: 319px)': {
                    fontSize: '10px',
                  },
                }}
              >
                {text}
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
              variant="h6"
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                color: '#000',
              }}
            >
              {or}
            </Typography>

            <GoogleLoginImage />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
