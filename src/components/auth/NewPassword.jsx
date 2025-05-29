import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';

const NewPassword = () => {
  const {
    reset_password,
    scrollBoxStyle,
    formSubmissionButtonStyle,
    customInputStyle,
    fieldStyle,
  } = AUTH_FORMS || {};

  const { title, fields, buttonText } = reset_password;
  const { login } = ROUTES || {};

  const navigate = useNavigate();

  const [user, setUser] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  const [showPassword, setShowPassword] = useState({
    current_password: false,
    new_password: false,
    confirm_password: false,
  });

  const handleClickEye = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };
  const handleSave = (e) => {
    e.preventDefault();

    if (
      user?.current_password &&
      user?.new_password &&
      user?.confirm_password
    ) {
      navigate(login);
      setUser({
        current_password: '',
        new_password: '',
        confirm_password: '',
      });
    } else {
      null;
    }
  };

  return (
    <Stack
      maxWidth={{ xs: '420px', sm: '482px', md: '480px', lg: '572px' }}
      minHeight={{ xs: '450x', lg: '500px' }}
      maxHeight={{ xs: '90%', lg: '500px' }}
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
                    type={
                      type === fields?.[0]?.type
                        ? showPassword[name]
                          ? fields?.[0]?.defaultType
                          : fields?.[0]?.type
                        : type || fields?.[0]?.defaultType
                    }
                  />
                </Stack>

                {type === fields?.[0]?.type && (
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
          </Box>

          <Stack direction={'column'} px={0.5} py={1}>
            <Button
              type="submit"
              variant="signupButton"
              sx={formSubmissionButtonStyle}
            >
              {buttonText}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default NewPassword;
