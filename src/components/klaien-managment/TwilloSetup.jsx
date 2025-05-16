import { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { SYSTEM_SETTING } from '../../constants/pages/SystemSetting';
import { styles as sharedStyles } from '../../styles/components/system-settings/SystemSetting';
import { CustomSwitch } from '../system-settings/CustomSwitch';
import PropTypes from 'prop-types';
import {
  TWILLO_DATA,
  TWILLO_SETUP,
} from '../../constants/pages/KlaienManagement';
import { TwilloStyles } from '../../styles/components/klaien-managment/TwilloSetup';

const TwilloSetup = ({ activeBox }) => {
  const [formData, setFormData] = useState(TWILLO_DATA);

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
  };

  const handleReset = () => {
    setFormData(TWILLO_DATA);
  };

  return (
    <Collapse in={activeBox === 3}>
      <Box sx={TwilloStyles.sectionBox}>
        <Typography sx={sharedStyles.sectionTitle}>
          {SYSTEM_SETTING.rejectionMessagesTitle}
        </Typography>
        <Typography sx={sharedStyles.sectionSubtitle}>
          {SYSTEM_SETTING.rejectionMessagesDesc}
        </Typography>
      </Box>

      <Box sx={TwilloStyles.wrapper}>
        <Grid container spacing={20}>
          {/* Twilio Credentials */}
          <Grid item xs={12} md={6}>
            <Typography gutterBottom sx={TwilloStyles.sectionTitle}>
              {TWILLO_SETUP.twilioTitle}
            </Typography>

            <Box mb={2}>
              <Typography sx={TwilloStyles.label}>
                {TWILLO_SETUP.accountSid}
              </Typography>
              <TextField
                fullWidth
                placeholder={TWILLO_SETUP.accountSidPlaceholder}
                variant="outlined"
                value={formData.accountSid}
                onChange={handleChange('accountSid')}
                sx={TwilloStyles.input}
              />
            </Box>

            <Box mb={2}>
              <Typography sx={TwilloStyles.label}>
                {TWILLO_SETUP.token}
              </Typography>
              <TextField
                fullWidth
                placeholder={TWILLO_SETUP.tokenPlaceholder}
                variant="outlined"
                value={formData.token}
                onChange={handleChange('token')}
                sx={TwilloStyles.input}
              />
            </Box>

            <Box mb={2}>
              <Typography sx={TwilloStyles.label}>
                {TWILLO_SETUP.phoneNumber}
              </Typography>
              <TextField
                fullWidth
                placeholder={TWILLO_SETUP.phoneNumberPlaceholder}
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange('phoneNumber')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">🇬🇧</InputAdornment>
                  ),
                }}
                sx={TwilloStyles.input}
              />
            </Box>
          </Grid>

          {/* Call Settings */}
          <Grid item xs={12} md={6}>
            <Typography gutterBottom sx={TwilloStyles.sectionTitle}>
              {TWILLO_SETUP.callTitle}
            </Typography>

            <Box mb={2}>
              <Typography sx={TwilloStyles.label}>
                {TWILLO_SETUP.timeout}
              </Typography>
              <TextField
                fullWidth
                type="number"
                placeholder={TWILLO_SETUP.timeoutPlaceholder}
                variant="outlined"
                value={formData.callTimeout}
                onChange={handleChange('callTimeout')}
                sx={TwilloStyles.input}
              />
            </Box>

            <Box sx={TwilloStyles.switchBox}>
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
              <Typography>{TWILLO_SETUP.voiceDetection}</Typography>
            </Box>

            <Box sx={TwilloStyles.switchBox}>
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
              <Typography>{TWILLO_SETUP.callRecordings}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2} sx={sharedStyles.buttonGroup}>
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
