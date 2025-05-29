import { useState } from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import VerificationModal from './VerificationModal';

import { useResetPasswordRequestMutation } from '../../redux/slices/auth/authApiSlice';

import { handleResetPasswordRequestMutation } from '../../services/auth';

import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';

const ForgotPassword = () => {
  const {
    forgot_password,
    scrollBoxStyle,
    formSubmissionButtonStyle,
    customInputStyle,
    fieldStyle,
  } = AUTH_FORMS || {};

  const { title, fields, buttonText } = forgot_password;
  const { login } = ROUTES || {};

  const [resetPasswordRequest, { isLoading }] =
    useResetPasswordRequestMutation();

  const [user, setUser] = useState({
    email: '',
  });
  const [showInstruction, setShowInstruction] = useState(false);
  const [message, setMessage] = useState();

  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleSendCode = async (e) => {
    e.preventDefault();

    if (user?.email) {
      const res = await handleResetPasswordRequestMutation(
        user?.email,
        resetPasswordRequest,
        setShowInstruction,
        setUser
      );

      if (!res) return;

      if (res) {
        setMessage({
          title: res,
          image: '/src/assets/images/auth/Verified_image.svg',
        });
      }
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
              <Box key={index} sx={customInputStyle()}>
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
                    type={type}
                  />
                </Stack>
              </Box>
            ))}

            <Stack direction={'column'} px={0.5} py={1}>
              <Button
                type="submit"
                variant="signupButton"
                disabled={user?.email === '' || isLoading}
                sx={formSubmissionButtonStyle}
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
      </Box>

      <VerificationModal
        open={showInstruction}
        setOpen={setShowInstruction}
        data={message}
        text="Go to login"
        link={login}
      />
    </Stack>
  );
};

export default ForgotPassword;
