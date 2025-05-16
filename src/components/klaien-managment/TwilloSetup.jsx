import { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'; // assuming it's a custom switch component
import { SYSTEM_SETTING } from '../../constants/pages/SystemSetting';
import { styles } from '../../styles/components/system-settings/SystemSetting';
import { CustomSwitch } from '../system-settings/CustomSwitch';
import PropTypes from 'prop-types';

const TwilloSetup = ({ activeBox }) => {
  const [formData, setFormData] = useState({
    accountSid: '',
    token: '',
    phoneNumber: '',
    callTimeout: '',
    voiceDetection: true,
    callRecordings: true,
  });

  const handleChange = (field) => (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saving payload:', formData);
    // API call or state update can go here
  };

  const handleReset = () => {
    setFormData({
      accountSid: '',
      token: '',
      phoneNumber: '',
      callTimeout: '',
      voiceDetection: true,
      callRecordings: true,
    });
  };

  return (
    <Collapse in={activeBox === 3}>
      <Box
        container
        spacing={2}
        mt={5}
        p={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={styles.sectionTitle}>
          {SYSTEM_SETTING.rejectionMessagesTitle}
        </Typography>
        <Typography sx={styles.sectionSubtitle}>
          {SYSTEM_SETTING.rejectionMessagesDesc}
        </Typography>
      </Box>

      <Box mt={2} sx={{ borderRadius: '32px', background: '#D9D9D9', p: 5 }}>
        <Grid container spacing={20}>
          {/* Twilio Credentials */}
          <Grid item xs={12} md={6}>
            <Typography
              gutterBottom
              sx={{ fontWeight: 600, fontSize: '19.49px', color: '#1B2559' }}
            >
              Twilio Credentials
            </Typography>

            <Box mb={2}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#1E293B',
                  py: 1,
                }}
              >
                Account SID
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your Twilio SID"
                variant="outlined"
                value={formData.accountSid}
                onChange={handleChange('accountSid')}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '32px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '32px',
                  },
                }}
              />
            </Box>

            <Box mb={2}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#1E293B',
                  py: 1,
                }}
              >
                Token
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your Token Number"
                variant="outlined"
                value={formData.token}
                onChange={handleChange('token')}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '32px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '32px',
                  },
                }}
              />
            </Box>

            <Box mb={2}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#1E293B',
                  py: 1,
                }}
              >
                Twilio Phone Number
              </Typography>
              <TextField
                fullWidth
                placeholder="+44 (123) 456-9878"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange('phoneNumber')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">🇬🇧</InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '32px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '32px',
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Call Settings */}
          <Grid item xs={12} md={6}>
            <Typography
              gutterBottom
              sx={{ fontWeight: 600, fontSize: '19.49px', color: '#1B2559' }}
            >
              Call Settings
            </Typography>

            <Box mb={2}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#1E293B',
                  py: 1,
                }}
              >
                Call Time Out (sec)
              </Typography>
              <TextField
                fullWidth
                placeholder="30"
                type="number"
                variant="outlined"
                value={formData.callTimeout}
                onChange={handleChange('callTimeout')}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '32px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '32px',
                  },
                }}
              />
            </Box>

            {/* Switches */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                gap: '30px',
                p: 1,
              }}
            >
              <CustomSwitch
                checked={formData.voiceDetection}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    voiceDetection: !prev.voiceDetection,
                  }))
                }
                color="primary"
              />
              <Typography>Voice Detection</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                gap: '30px',
                p: 1,
              }}
            >
              <CustomSwitch
                checked={formData.callRecordings}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    callRecordings: !prev.callRecordings,
                  }))
                }
                color="primary"
              />
              <Typography>Call Recordings</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2} sx={styles.buttonGroup}>
        <Button variant="outlined" onClick={handleReset}>
          {SYSTEM_SETTING.reset}
        </Button>
        <Button variant="contained" onClick={handleSave}>
          {SYSTEM_SETTING.save}
        </Button>
      </Box>
    </Collapse>
  );
};
TwilloSetup.propTypes = {
  activeBox: PropTypes.any,
};

export default TwilloSetup;
