import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { AUTH_FORMS } from '../../constants/auth';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Checkbox from './Checkbox';
import { handleLogedin } from '../../utils/auth';
import { LOGIN } from '../../constants/components/auth/Auth';
import {
  stackStyle,
  formBoxStyle,
  eyeButtonStyle,
  linkStyle,
  googleImageStyle,
  orTextStyle,
} from '../../styles/components/auth/Login';

const {
  login,
  customInputStyle,
  scrollBoxStyle,
  fieldStyle,
  formSubmissionButtonStyle,
  service_and_policy,
  googlePic,
  or,
} = AUTH_FORMS || {};

const FORM_TEXT = {
  title: login?.title || 'Login',
  orText: or || 'or',
};

const FIELDS = login?.fields || [];

const LINKS = login?.links || [];

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(LOGIN);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickEye = () => setShowPassword((prev) => !prev);

  const handleInputChange = (key, val) =>
    setUser((prev) => ({ ...prev, [key]: val }));

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ loginCreds: user });
    setUser(LOGIN);
    handleLogedin(navigate);
  };

  return (
    <Stack
      sx={stackStyle}
      variant="authStack"
      direction="column"
      useFlexGap
      spacing={2}
    >
      <Box overflow="auto" sx={scrollBoxStyle}>
        <Box component="form" onSubmit={handleLogin} sx={formBoxStyle}>
          <Typography variant="body2" pb={1} alignSelf="center">
            {FORM_TEXT.title}
          </Typography>

          {FIELDS.map(({ label, name, type, placeholder }, index) => {
            const isPassword = type === FIELDS?.[1]?.type;
            const inputType = isPassword
              ? showPassword
                ? FIELDS?.[1]?.defaultType
                : type
              : type;

            return (
              <Box key={index} sx={customInputStyle}>
                <Stack direction="column" spacing={0.5} width="100%">
                  <Typography variant="inputLabel">{label}</Typography>
                  <TextField
                    fullWidth
                    autoComplete="off"
                    sx={fieldStyle}
                    name={name}
                    value={user[name] || ''}
                    placeholder={placeholder}
                    onChange={(e) => handleInputChange(name, e.target.value)}
                    type={inputType}
                  />
                </Stack>
                {isPassword && (
                  <IconButton
                    disableRipple
                    onClick={handleClickEye}
                    sx={eyeButtonStyle}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </Box>
            );
          })}

          <Stack px={1} py={1}>
            <Checkbox
              setChecked={setUser}
              checked={user.service_and_policy}
              data={service_and_policy}
            />
          </Stack>

          <Stack direction="column" px={0.5} py={1}>
            <Button
              variant="signupButton"
              onClick={handleLogin}
              sx={formSubmissionButtonStyle}
            >
              {FORM_TEXT.title}
            </Button>
          </Stack>

          <Stack
            gap={1}
            p={1.5}
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {LINKS.map(({ link, text }, linkIndex) => (
              <Link
                key={linkIndex}
                component={RouterLink}
                to={link || '#'}
                sx={linkStyle}
              >
                {text}
              </Link>
            ))}
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            mt={{ xs: -2 }}
            gap={1.2}
          >
            <Typography variant="h6" sx={orTextStyle}>
              {FORM_TEXT.orText}
            </Typography>
            <Box component="img" src={googlePic} sx={googleImageStyle} />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
