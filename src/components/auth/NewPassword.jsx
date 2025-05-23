'use client';

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';
import { styles } from '../../styles/components/auth/NewPassword';
import {
  NEW_PASSWORD,
  PASSWORD_DEFAULT,
  SHOW_USERS_DEFAULT,
  USERS_DEFAULT,
} from '../../constants/components/auth/NewPasssword';

const NewPassword = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(USERS_DEFAULT);

  const [showPassword, setShowPassword] = useState(SHOW_USERS_DEFAULT);

  const handleClickEye = (field) =>
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));

  const handleInputChange = (key, val) =>
    setUser((prev) => ({ ...prev, [key]: val }));

  const handleSave = (e) => {
    e.preventDefault();
    const { password, confrim_password } = user;

    if (password && confrim_password) {
      navigate(ROUTES?.login);
      setUser(PASSWORD_DEFAULT);
    }
  };

  const { title, fields, buttonText } = AUTH_FORMS?.new_password || {};

  return (
    <Stack {...styles.stackProps}>
      <Box overflow="auto" sx={styles.scrollStyle}>
        <Box
          component="form"
          action={NEW_PASSWORD.formAction}
          onSubmit={handleSave}
          sx={styles.wrapperStyles}
        >
          <Typography
            variant={NEW_PASSWORD.typographyVariant}
            pb={1}
            alignSelf="center"
          >
            {title}
          </Typography>

          <Box sx={styles.feildsBox}>
            {fields?.map(({ label, name, type, placeholder }, index) => (
              <Box key={index} sx={styles.customInputStyle}>
                <Stack direction="column" spacing={0.5} width="100%">
                  <Typography variant={NEW_PASSWORD.inputLabelVariant}>
                    {label}
                  </Typography>
                  <TextField
                    fullWidth
                    autoComplete={NEW_PASSWORD.inputAutoComplete}
                    sx={styles.fieldStyle}
                    name={name}
                    value={user[name] || ''}
                    placeholder={placeholder}
                    onChange={(e) => handleInputChange(name, e.target.value)}
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
                    sx={styles.iconButton}
                  >
                    {showPassword[name] ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </Box>
            ))}
          </Box>

          <Stack direction="column" px={0.5} py={1}>
            <Button
              type="submit"
              variant={NEW_PASSWORD.buttonVariant}
              sx={styles.submitButtonStyle}
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
