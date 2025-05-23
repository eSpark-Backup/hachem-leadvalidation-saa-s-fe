import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OtpInput } from 'reactjs-otp-input';
import PropTypes from 'prop-types';

import { AUTH_FORMS, VERIFICATION_MODAL } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';
import VerificationModal from './VerificationModal';
import { VERIFY_EMAIL } from '../../constants/components/auth/VerifyEmail';
import { styles } from '../../styles/components/auth/VerifyEmail';

const VerifyEmail = ({ title }) => {
  const [otp, setOtp] = useState('');

  const [showVerifyEmail, setShowVerifyEmail] = useState(false);

  const navigate = useNavigate();

  const theme = useTheme();

  const isXs = useMediaQuery(theme?.breakpoints?.down('sm'));

  const { verify_email, scrollBoxStyle, formSubmissionButtonStyle } =
    AUTH_FORMS || {};

  const { forgotPassword, newpassword, login } = ROUTES || {};

  const {
    text,
    resendButtonText,
    buttonText,
    textStyle,
    resendButtonStyle,
    otpXsStyle,
    otpSmStyle,
  } = verify_email || {};

  const handleChange = (value) => setOtp(value);

  const handleVerify = (e) => {
    e.preventDefault();
    if (title === forgotPassword) {
      navigate(newpassword);
    } else {
      setShowVerifyEmail(true);
    }
    console.log({ Entered_OTP: otp });
  };

  return (
    <Stack {...styles.outerStack}>
      <Box overflow="auto" sx={scrollBoxStyle}>
        <Box sx={styles.formBox} component="form" onSubmit={handleVerify}>
          <Typography variant="body2" alignSelf="center">
            {title}
          </Typography>

          <Box>
            <Typography alignSelf="center" textAlign="center" sx={textStyle}>
              {text}
            </Typography>
            <Box sx={styles.otpWrapper}>
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={VERIFY_EMAIL.otpInputLength}
                className="otpInput"
                inputStyle={isXs ? otpXsStyle : otpSmStyle}
                renderInput={(props) => <Box component="input" {...props} />}
              />
            </Box>
          </Box>

          <Stack direction="column" gap={1.5}>
            <Button
              type="submit"
              variant="signupButton"
              disabled={otp?.length !== VERIFY_EMAIL.otpInputLength}
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
        text={VERIFY_EMAIL.modalLinkText}
        link={login}
      />
    </Stack>
  );
};

VerifyEmail.propTypes = {
  title: PropTypes.string.isRequired,
};

export default VerifyEmail;
