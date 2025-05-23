import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';
import {
  RESET_SHOW_USERS_DEFAULT,
  RESET_USERS_DEFAULT,
} from '../../constants/components/auth/ResetPassword';

const ResetPassword = () => {
  const [user, setUser] = useState(RESET_USERS_DEFAULT);

  const [showPassword, setShowPassword] = useState(RESET_SHOW_USERS_DEFAULT);

  const navigate = useNavigate();

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
      user?.confrim_password
    ) {
      navigate(ROUTES.login);
      setUser(RESET_USERS_DEFAULT);
    }
  };

  return (
    <Stack
      sx={AUTH_FORMS.rootStack}
      variant="authStack"
      direction="column"
      useFlexGap
      spacing={2}
    >
      <Box overflow="auto" sx={AUTH_FORMS.scrollBoxStyle}>
        <Box component="form" onSubmit={handleSave} sx={AUTH_FORMS.formWrapper}>
          <Typography variant="body2" pb={1} alignSelf="center">
            {AUTH_FORMS.reset_password.title}
          </Typography>
          <Box sx={AUTH_FORMS.inputBox}>
            {AUTH_FORMS.reset_password.fields?.map(
              ({ label, name, type, placeholder, defaultType }, index) => (
                <Box key={index} sx={AUTH_FORMS.customInputStyle}>
                  <Stack direction="column" spacing={0.5} width="100%">
                    <Typography variant="inputLabel">{label}</Typography>
                    <TextField
                      fullWidth
                      autoComplete="off"
                      sx={AUTH_FORMS.fieldStyle}
                      name={name}
                      value={user[name] || ''}
                      placeholder={placeholder}
                      onChange={(e) =>
                        handleInputChange(name, e?.target?.value)
                      }
                      type={
                        type === AUTH_FORMS.reset_password.fields?.[0]?.type
                          ? showPassword[name]
                            ? defaultType
                            : type
                          : type || defaultType
                      }
                    />
                  </Stack>
                  {type === AUTH_FORMS.reset_password.fields?.[0]?.type && (
                    <IconButton
                      disableRipple
                      onClick={() => handleClickEye(name)}
                      sx={AUTH_FORMS.eyeIcon}
                    >
                      {showPassword[name] ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )}
                </Box>
              )
            )}
          </Box>
          <Stack direction="column" px={0.5} py={1}>
            <Button
              type="submit"
              variant="signupButton"
              sx={AUTH_FORMS.submitButtonStyle}
            >
              {AUTH_FORMS.reset_password.buttonText}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default ResetPassword;
