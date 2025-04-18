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
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    service_and_policy: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = Auth_FORMS || {};
  const { title, policy, customInputStyle, links, fields } = login || {};

  const handleClickEye = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (key, val) => {
    setUser((prev) => ({ ...prev, [key]: val }));
  };

  const handleLogin = () => {
    console.log({ loginCreds: user });
  };

  return (
    <Stack
      minHeight={{ xs: 'auto', sm: '549px' }}
      maxWidth={{ xs: '420px', sm: '572px' }}
      justifyContent={'center'}
      alignItems={'center'}
      py={{ xs: 4, sm: 1 }}
      variant={'authStack'}
      direction={'column'}
      maxHeight={'630px'}
      useFlexGap
      spacing={2}
      px={2}
    >
      <Typography variant="body2" pb={1}>
        {title}
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '380px' }} component="form">
        {fields?.map(({ label, name, type, style, placeholder }, index) => (
          <Box key={index} sx={customInputStyle}>
            <Stack direction={'column'} spacing={1} width={'100%'}>
              <Typography variant="inputLabel">{label || ''}</Typography>
              <TextField
                fullWidth
                autoComplete="off"
                sx={style}
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
        <Stack p={0.5}>
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
            sx={{ height: '64px', borderRadius: '12px' }}
          >
            Login
          </Button>
        </Stack>
        <Stack
          direction={'row'}
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
          gap={1}
          p={1.5}
        >
          {links?.map(({ link, text }, linkIndex) => (
            <Typography variant="formLinkStyle" key={linkIndex}>
              <Link
                to={link || '#'}
                style={{ color: '#136BE5', textDecoration: 'none' }}
              >
                {text || ''}
              </Link>
            </Typography>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
