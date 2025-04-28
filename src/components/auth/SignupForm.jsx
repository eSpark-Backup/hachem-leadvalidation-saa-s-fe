import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { AUTH_FORMS } from '../../constants/auth';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox';
import { ROUTES } from '../../constants/components/globals/Auth';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confrim_password: false,
  });
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confrim_password: '',
    company_name: '',
    service_and_policy: false,
  });
  const {
    signup,
    customInputStyle,
    scrollBoxStyle,
    fieldStyle,
    formSubmissionButtonStyle,
    service_and_policy,
    googlePic,
    or,
  } = AUTH_FORMS || {};

  const { title, fields } = signup || {};
  const { verifyEmail } = ROUTES || {};
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

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ signupCreds: user });
    navigate(verifyEmail);
    setUser({
      name: '',
      email: '',
      password: '',
      confrim_password: '',
      company_name: '',
      service_and_policy: false,
    });
  };

  return (
    <Stack
      minHeight={{ xs: 'auto', sm: 'auto', lg: '690px' }}
      maxWidth={{ xs: '420px', sm: '482px', lg: '572px' }}
      maxHeight={{ xs: '90%', sm: '420px', lg: '690px' }}
      py={{ xs: 4.2, sm: 3, lg: 1 }}
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
          component="form"
          action="#"
          onSubmit={handleSignup}
        >
          <Typography variant="body2" pb={1} alignSelf={'center'}>
            {title}
          </Typography>

          {fields?.map(({ label, name, type, placeholder }, index) => (
            <Box key={index} sx={customInputStyle}>
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
                  sx={{ mr: -1.5 }}
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
          <Stack direction={'column'} px={0.5} py={1}>
            <Button
              type="submit"
              variant="signupButton"
              sx={formSubmissionButtonStyle}
            >
              {title}
            </Button>
          </Stack>

          <Stack
            direction={'column'}
            alignItems={'center'}
            mt={{ xs: 1 }}
            gap={1}
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
            <Box
              component={'img'}
              src={googlePic}
              sx={{ width: '40px', height: '40px', cursor: 'pointer' }}
            />
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default SignupForm;
