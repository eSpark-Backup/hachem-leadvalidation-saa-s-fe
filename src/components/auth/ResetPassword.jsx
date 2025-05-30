import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useResetPasswordMutation } from '../../redux/slices/auth/authApiSlice';

import { handleResetPasswordMutation } from '../../services/auth';

import { AUTH_FORMS } from '../../constants/auth';
import {
  RESRT_PASSWORD_FORM,
  RESRT_PASSWORD_FORM_RESET,
  ROUTES,
} from '../../constants/components/globals/Auth';

const ResetPassword = () => {
  const {
    new_password,
    scrollBoxStyle,
    formSubmissionButtonStyle,
    customInputStyle,
    fieldStyle,
    errorStyle,
  } = AUTH_FORMS || {};

  const { title, fields, buttonText } = new_password;
  const { login } = ROUTES || {};

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const myParam = searchParams.get('token');

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const [user, setUser] = useState(RESRT_PASSWORD_FORM);
  const [showPassword, setShowPassword] = useState(RESRT_PASSWORD_FORM_RESET);
  const [error, setError] = useState();

  const handleClickEye = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);

    const res = handleResetPasswordMutation(
      { ...user, token: myParam },
      resetPassword,
      navigate,
      setUser,
      login,
      setError
    );
    if (!res) return;
  };

  return (
    <Stack
      maxWidth={{ xs: '420px', sm: '482px', md: '480px', lg: '572px' }}
      minHeight={{ xs: '360px', lg: '420px' }}
      maxHeight={{ xs: '90%', lg: '420px' }}
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
            gap: 3,
          }}
          action="#"
          component="form"
          onSubmit={handleSave}
        >
          <Typography variant="body2" pb={1} alignSelf={'center'}>
            {title}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                      onChange={(e) =>
                        handleInputChange(name, e?.target?.value)
                      }
                      type={
                        type === fields?.[1]?.type
                          ? showPassword[name]
                            ? fields?.[1]?.defaultType
                            : fields?.[1]?.type
                          : type || fields?.[1]?.defaultType
                      }
                    />
                  </Stack>

                  {type === fields?.[1]?.type && (
                    <IconButton
                      disableRipple
                      onClick={() => handleClickEye(name)}
                      sx={{ mr: -1.5 }}
                    >
                      {showPassword[name] ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )}
                </Box>

                {error && (
                  <Typography sx={errorStyle}>{error[name]}</Typography>
                )}
              </Box>
            ))}
          </Box>

          <Stack direction={'column'} px={0.5} py={1}>
            <Button
              type="submit"
              variant="signupButton"
              sx={formSubmissionButtonStyle}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={30} sx={{ color: ' #444444' }} />
              ) : (
                buttonText
              )}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default ResetPassword;
