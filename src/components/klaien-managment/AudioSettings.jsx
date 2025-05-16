import {
  Box,
  Button,
  Card,
  Collapse,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  AUDIO_PREVIEW,
  SPEED_SETTINGS,
  VOICE_SETTINGS,
} from '../../constants/pages/KlaienManagement';
import { styles } from '../../styles/components/system-settings/SystemSetting';
import { SYSTEM_SETTING } from '../../constants/pages/SystemSetting';
import { CustomSwitch } from '../system-settings/CustomSwitch';

import ValueSliderCard from '../system-settings/ValueSliderCard';
import SettingToggleCard from '../system-settings/SettingToggleCard';
import PropTypes from 'prop-types';

const AudioSettings = ({ activeBox }) => {
  const [payload, setPayload] = useState({});

  const [toggleStates, setToggleStates] = useState(
    AUDIO_PREVIEW.reduce((acc, item) => {
      acc[item.key] = false;
      return acc;
    }, {})
  );
  const handleToggleChange = (key, value) => {
    setToggleStates((prev) => ({
      ...prev,
      [key]: value,
    }));
    setPayload((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle select change
  const handleSelectChange = (key) => (e) => {
    setPayload((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  // Handle slider change
  const handleSliderChange = (name) => (newValue) => {
    setPayload((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  // Handle toggle switch
  const handleToggle = (key) => (e) => {
    setPayload((prev) => ({
      ...prev,
      [key]: e.target.checked,
    }));
  };

  const handleReset = () => {
    setPayload({});
    setToggleStates(
      AUDIO_PREVIEW.reduce((acc, item) => {
        acc[item.key] = false;
        return acc;
      }, {})
    );
  };

  const handleSave = () => {
    console.log('Saving payload:', payload);
  };

  return (
    <Collapse in={activeBox === 2}>
      <Box mt={10}>
        {AUDIO_PREVIEW.map((setting) => (
          <SettingToggleCard
            key={setting.key}
            title={setting.title}
            description={setting.description}
            icon={setting.icon}
            initialValue={toggleStates[setting.key]}
            onToggle={(value) => handleToggleChange(setting.key, value)}
          />
        ))}
      </Box>

      <Box mt={2} sx={{ borderRadius: '32px', background: '#D9D9D9', p: 5 }}>
        <Box mt={2}>
          {VOICE_SETTINGS.map((voice, index) => (
            <Card sx={{ p: 4, my: 2.5 }} key={index}>
              <FormControl fullWidth>
                <Typography
                  sx={{
                    py: 1,
                    color: '#09102B',
                    fontWeight: 600,
                    fontSize: '18px',
                  }}
                >
                  {voice.name}
                </Typography>
                <Select
                  value={payload[voice.value] || voice.opions[0].value || ''}
                  onChange={handleSelectChange(voice.key)}
                >
                  {voice.opions.map((opt, ind) => (
                    <MenuItem key={ind} value={opt.value}>
                      {opt.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Card>
          ))}

          {SPEED_SETTINGS.map((lead, index) => (
            <ValueSliderCard
              key={index}
              label={lead.name}
              tooltip={lead.desc}
              min={lead.min}
              max={lead.max}
              startTitle="Slow"
              endTitle="Fast"
              defaultValue={lead.defaultValue}
              value={
                typeof payload[lead.name] === 'number'
                  ? payload[lead.name]
                  : undefined // make it work as uncontrolled if not present
              }
              onChange={handleSliderChange(lead.key)}
            />
          ))}

          {[
            { title: 'Voice Enhancement', state: true },
            { title: 'Noice Deduction', state: true },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'start',
                gap: '30px',
                p: 1,
              }}
            >
              <CustomSwitch
                checked={payload[item.title] || false}
                onChange={handleToggle(item.title)}
                color="primary"
              />
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box mt={5} p={1}>
        <Box mt={2} sx={styles.buttonGroup}>
          <Button variant="outlined" onClick={handleReset}>
            {SYSTEM_SETTING.reset}
          </Button>
          <Button variant="contained" onClick={handleSave}>
            {SYSTEM_SETTING.save}
          </Button>
        </Box>
      </Box>
    </Collapse>
  );
};
AudioSettings.propTypes = {
  activeBox: PropTypes.any,
};
export default AudioSettings;
