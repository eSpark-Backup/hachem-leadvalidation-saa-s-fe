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
  AUDIO_SETTINGS,
  SPEED_SETTINGS,
  VOICE_SETTINGS,
} from '../../constants/pages/KlaienManagement';
import { styles as systemSettingStyles } from '../../styles/components/system-settings/SystemSetting';
import { SYSTEM_SETTING } from '../../constants/pages/SystemSetting';
import { CustomSwitch } from '../system-settings/CustomSwitch';

import ValueSliderCard from '../system-settings/ValueSliderCard';
import SettingToggleCard from '../system-settings/SettingToggleCard';
import PropTypes from 'prop-types';
import { AudioSetting } from '../../styles/components/klaien-managment/AudioSetting';

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

      <Box mt={2} sx={AudioSetting.grayBox}>
        <Box mt={2}>
          {VOICE_SETTINGS.map((voice, index) => (
            <Card sx={AudioSetting.card} key={index}>
              <FormControl fullWidth>
                <Typography sx={AudioSetting.selectLabel}>
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
              startTitle={AUDIO_SETTINGS.sliders.start}
              endTitle={AUDIO_SETTINGS.sliders.end}
              defaultValue={lead.defaultValue}
              value={
                typeof payload[lead.name] === 'number'
                  ? payload[lead.name]
                  : undefined
              }
              onChange={handleSliderChange(lead.key)}
            />
          ))}

          {AUDIO_SETTINGS.toggles.map((item, index) => (
            <Box key={index} sx={AudioSetting.toggleRow}>
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
        <Box mt={2} sx={systemSettingStyles.buttonGroup}>
          <Button
            variant="outlined"
            onClick={handleReset}
            sx={systemSettingStyles.resetButton}
          >
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
