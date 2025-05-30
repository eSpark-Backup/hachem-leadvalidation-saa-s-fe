import { Box, Button, Stack, Typography } from '@mui/material';
import { AUTH_FORMS } from '../../constants/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES, USER_TYPES } from '../../constants/components/globals/Auth';

import SignupButtonArrow from '/src/assets/images/auth/signup_button_arrow.png';

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState({
    supplier: false,
    client: false,
  });
  const { signup_as, scrollBoxStyle, formSubmissionButtonStyle } =
    AUTH_FORMS || {};
  const { supplier, client } = USER_TYPES || {};
  const { title, buttons, signupTypeButtonStyle } = signup_as || {};
  const { signup } = ROUTES || {};
  const navigate = useNavigate();

  const handleClickOption = (option) => {
    setSelectedOption({
      [option]: true,
    });
  };

  const handleClickNext = () => {
    console.log({ sinup_as_a: selectedOption });
    if (selectedOption?.supplier || selectedOption?.client) {
      navigate(
        `/${signup}/${selectedOption?.supplier === true ? supplier : '' || selectedOption?.client === true ? client : ''}`
      );
    } else {
      null;
    }
  };

  return (
    <Stack
      maxWidth={{ xs: '420px', sm: '482px', md: '480px', lg: '572px' }}
      minHeight={{ xs: '350px', lg: '428px' }}
      maxHeight={{ xs: '90%', lg: '428px' }}
      py={{ xs: 4.2, sm: 4.2, md: 4.2, lg: 1 }}
      px={{ xs: 2.5, md: 2 }}
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
            display: 'flex',
            maxWidth: '380px',
            flexDirection: 'column',
            gap: 4,
          }}
          action="#"
          component="form"
          onSubmit={handleClickNext}
        >
          <Typography variant="body2" alignSelf={'center'}>
            {title}
          </Typography>
          <Box>
            {buttons?.map(({ text }, index) => (
              <Button
                variant="outlined"
                disableRipple
                key={index}
                onClick={() => handleClickOption(text?.toLowerCase())}
                endIcon={
                  <Box
                    component={'img'}
                    src={SignupButtonArrow}
                    sx={{ width: { xs: '28px', md: 'auto' }, height: 'auto' }}
                  />
                }
                sx={signupTypeButtonStyle(selectedOption, text)}
              >
                {text}
              </Button>
            ))}
          </Box>
          <Stack direction={'column'}>
            <Button
              type="submit"
              variant="signupButton"
              disabled={!selectedOption?.supplier && !selectedOption?.client}
              sx={formSubmissionButtonStyle}
              onClick={() => navigate('/signup/client')}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Signup;
