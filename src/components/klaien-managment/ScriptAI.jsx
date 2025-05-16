import { useState } from 'react';
import { Box, Button, Collapse, TextField } from '@mui/material';
import { SYSTEM_SETTING } from '../../constants/pages/SystemSetting';
import { styles } from '../../styles/components/system-settings/SystemSetting';
import SettingToggleCard from '../system-settings/SettingToggleCard';
import {
  AUDIO_PREVIEW,
  SCRIPT_AI,
} from '../../constants/pages/KlaienManagement';
import PropTypes from 'prop-types';
import ScriptAi from '../../styles/components/klaien-managment/ScriptAI';

const ScriptAI = ({ activeBox }) => {
  const [scriptText, setScriptText] = useState('');
  const [toggleStates, setToggleStates] = useState(
    AUDIO_PREVIEW.reduce((acc, item) => {
      acc[item.key] = false;
      return acc;
    }, {})
  );

  const handleToggleChange = (key, value) => {
    setToggleStates(() => ({
      [key]: value,
    }));
  };

  const handleSaveScript = () => {
    console.log('Saved script:', scriptText);
    console.log('Toggle states:', toggleStates);
    // Send scriptText and toggleStates to API or process accordingly
  };

  const handleReset = () => {
    setScriptText('');
    setToggleStates(
      AUDIO_PREVIEW.reduce((acc, item) => {
        acc[item.key] = false;
        return acc;
      }, {})
    );
  };

  return (
    <Collapse in={activeBox === 1}>
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

      <Box mt={2} sx={ScriptAi.containerBox}>
        <Box sx={ScriptAi.titleBox}>{SCRIPT_AI.scriptAI}</Box>

        <TextField
          multiline
          rows={16}
          variant="outlined"
          placeholder="Enter text here..."
          value={scriptText}
          onChange={(e) => setScriptText(e.target.value)}
          sx={ScriptAi.textField}
        />

        <Box p={1} sx={{ display: 'flex' }}>
          <Box mt={0}>
            <Box mt={2} sx={ScriptAi.buttonGroup}>
              <Button
                variant="contained"
                onClick={() => {
                  /* AI generation logic */
                }}
              >
                {SCRIPT_AI.generateAI}
              </Button>
              <Button
                variant="outlined"
                onClick={handleSaveScript}
                sx={ScriptAi.outlinedButton}
              >
                {SCRIPT_AI.saveScript}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt={5} p={1}>
        <Box mt={2}>
          <Box mt={2} sx={styles.buttonGroup}>
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={ScriptAi.outlinedButton}
            >
              {SYSTEM_SETTING.reset}
            </Button>
            <Button variant="contained" onClick={handleSaveScript}>
              {SYSTEM_SETTING.save}
            </Button>
          </Box>
        </Box>
      </Box>
    </Collapse>
  );
};
ScriptAI.propTypes = {
  activeBox: PropTypes.any,
};
export default ScriptAI;
