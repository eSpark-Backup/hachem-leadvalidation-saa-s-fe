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
import Checkbox from './Checkbox';
import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';
import { SIGNUP_FORM_DEFAULT } from '../../constants/components/auth/SignupForm';
import { USERS_DEFAULT } from '../../constants/components/auth/NewPasssword';
import {
  stackWrapperStyle,
  formBoxStyle,
  orTextStyle,
  googleImageStyle,
  iconBox,
} from '../../styles/components/auth/SignupForm';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(USERS_DEFAULT);

  const [user, setUser] = useState(SIGNUP_FORM_DEFAULT);

  const navigate = useNavigate();

  const {
    signup,
    customInputStyle,
    scrollBoxStyle,
    fieldStyle,
    formSubmissionButtonStyle,
    service_and_policy,
    googlePic,
  } = AUTH_FORMS || {};

  const { title, fields } = signup || {};

  const { verifyEmail } = ROUTES || {};

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
    navigate(verifyEmail);
    setUser(SIGNUP_FORM_DEFAULT);
  };

  return (
    <Stack sx={stackWrapperStyle}>
      <Box overflow="auto" sx={scrollBoxStyle}>
        <Box
          component="form"
          sx={formBoxStyle}
          action="#"
          onSubmit={handleSignup}
        >
          <Typography variant="body2" pb={1} alignSelf="center">
            {title}
          </Typography>

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
                  placeholder={placeholder || ''}
                  onChange={(e) => handleInputChange(name, e?.target?.value)}
                  type={
                    type === fields?.[2]?.type
                      ? showPassword[name]
                        ? fields?.[2]?.defaultType
                        : fields?.[2]?.type
                      : type || fields?.[2]?.defaultType
                  }
                />
              </Stack>
              {type === fields?.[2]?.type && (
                <IconButton
                  disableRipple
                  onClick={() => handleClickEye(name)}
                  sx={iconBox}
                >
                  {showPassword[name] ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )}
            </Box>
          ))}

          <Stack px={1} py={1.5}>
            <Checkbox
              setChecked={setUser}
              checked={user?.service_and_policy}
              data={service_and_policy}
            />
          </Stack>

          <Stack direction="column" px={0.5} py={1}>
            <Button
              type="submit"
              variant="signupButton"
              sx={formSubmissionButtonStyle}
            >
              {title}
            </Button>
          </Stack>

          <Stack direction="column" alignItems="center" mt={{ xs: 1 }} gap={1}>
            <Typography variant="h6" sx={orTextStyle}>
              {AUTH_FORMS?.or}
            </Typography>
            <Box component="img" src={googlePic} sx={googleImageStyle} />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default SignupForm;
