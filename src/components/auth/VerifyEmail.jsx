import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { AUTH_FORMS, VERIFICATION_MODAL } from '../../constants/auth';
import { OtpInput } from 'reactjs-otp-input';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import VerificationModal from './VerificationModal';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = ({ title }) => {
  const [otp, setOtp] = useState('');
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);

  const { verify_email, scrollBoxStyle, formSubmissionButtonStyle } =
    AUTH_FORMS || {};
  const navigate = useNavigate();

  const {
    text,
    resendButtonText,
    buttonText,
    textStyle,
    resendButtonStyle,
    otpXsStyle,
    otpSmStyle,
  } = verify_email || {};
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (value) => {
    setOtp(value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (title == 'Forgot password') {
      navigate(`/new-password`);
    } else {
      setShowVerifyEmail(true);
    }
    console.log({ Entered_OTP: otp });
  };
  return (
    <Stack
      maxWidth={{ xs: '420px', sm: '482px', md: '480px', lg: '572px' }}
      minHeight={{ xs: '350px', lg: '467px' }}
      maxHeight={{ xs: '90%', lg: '467px' }}
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
          onSubmit={handleVerify}
        >
          <Typography variant="body2" alignSelf={'center'}>
            {title}
          </Typography>
          <Box>
            <Typography
              alignSelf={'center'}
              textAlign={'center'}
              sx={textStyle}
            >
              {text}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pb: 2,
              }}
            >
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                className="otpInput"
                inputStyle={isXs ? otpXsStyle : otpSmStyle}
                renderInput={(props) => <Box component={'input'} {...props} />}
              />
            </Box>
          </Box>
          <Stack direction={'column'} gap={1.5}>
            <Button
              type="submit"
              variant="signupButton"
              disabled={otp?.length !== 4}
              sx={formSubmissionButtonStyle}
            >
              {buttonText}
            </Button>
            <Button disableRipple sx={resendButtonStyle}>
              {resendButtonText}
            </Button>
          </Stack>
        </Box>
      </Box>
      <VerificationModal
        open={showVerifyEmail}
        setOpen={setShowVerifyEmail}
        data={VERIFICATION_MODAL}
        text="Go to login"
        link="/login"
      />
    </Stack>
  );
};

VerifyEmail.propTypes = {
  title: PropTypes.string.isRequired,
};
export default VerifyEmail;
