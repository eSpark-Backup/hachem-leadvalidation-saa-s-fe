import { useState } from 'react';
import { Box, Button, Collapse, TextField } from '@mui/material';
import { SYSTEM_SETTING } from '../../constants/pages/SystemSetting';
import { styles } from '../../styles/components/system-settings/SystemSetting';
import SettingToggleCard from '../system-settings/SettingToggleCard';
import { AUDIO_PREVIEW } from '../../constants/pages/KlaienManagement';
import PropTypes from 'prop-types';

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

      <Box
        mt={2}
        sx={{
          borderRadius: '32px',
          background: ' #D9D9D9',
          p: 5,
        }}
      >
        <Box
          sx={{
            fontWeight: 500,
            fontSize: '40px',
            p: 1,
          }}
        >
          Script AI
        </Box>

        <TextField
          multiline
          rows={16}
          variant="outlined"
          placeholder="Enter text here..."
          value={scriptText}
          onChange={(e) => setScriptText(e.target.value)}
          sx={{
            p: 2,
            borderRadius: '20px',
            background: '#fff',
            width: '100%',
            '& .MuiOutlinedInput-root': {
              height: '100%',
              alignItems: 'flex-start',
              fontSize: '18px',
              color: '#333',
              '& fieldset': {
                border: 'none',
              },
              '& textarea': {
                fontSize: '18px',
                color: '#000',
                '&::placeholder': {
                  color: '#333',
                  opacity: 1,
                },
              },
            },
          }}
        />

        <Box p={1} sx={{ display: 'flex' }}>
          <Box mt={0}>
            <Box mt={2} sx={styles.buttonGroup}>
              <Button
                variant="contained"
                onClick={() => {
                  // Add AI generation logic here
                }}
              >
                {`Generate AI`}
              </Button>
              <Button
                variant="outlined"
                onClick={handleSaveScript}
                sx={{
                  background: '#fff',
                  border: '1px solid #77797D',
                  color: ' #77797D',
                }}
              >
                {`Save Script`}
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
              sx={{
                background: '#fff',
                border: '1px solid #77797D',
                color: ' #77797D',
              }}
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
