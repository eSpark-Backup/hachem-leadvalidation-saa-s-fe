import {
  Box,
  Button,
  Card,
  Collapse,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import { useState } from 'react';
import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  FRAUD_SETTINGS,
  LEADS_SETTINGS,
  SYSTEM_SETTING,
} from '../constants/pages/SystemSetting';

import HeaderActions from '../components/report-analytics/HeaderActions';
import NotFound from './NotFound';

import { styles } from '../styles/components/system-settings/SystemSetting';
import {
  getDefaultFraudSettings,
  getDefaultLeadSettings,
} from '../utils/pages/system-settings/SystemSettings';

import {
  AUDIO_PREVIEW,
  OPTIONS,
  SPEED_SETTINGS,
  VOICE_SETTINGS,
} from '../constants/pages/KlaienManagement';

import SettingToggleCard from '../components/system-settings/SettingToggleCard';
import { CustomSwitch } from '../components/system-settings/CustomSwitch';
import ValueSliderCard from '../components/system-settings/ValueSliderCard';
import { PaymentFormStyles } from '../styles/components/settings/PaymentForm';
import OptionCard from '../components/klaien-managment/OptionCard';

const KlaienManagement = () => {
  const [activeBox, setActiveBox] = useState(1);
  const [enabled, setEnabled] = useState(false);
  const [errors, setErrors] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('+44 (123) 456-9878');

  const handleClick = (id) => setActiveBox(id);

  const handleToggle = (event) => {
    const checked = event.target.checked;
    setEnabled(checked);
  };

  if (USER_TYPE !== USER_TYPES.admin)
    return <NotFound btnLink={ROUTES.dashboard} />;

  return (
    <>
      <Box sx={styles.outerBox}>
        <HeaderActions title={'Klairn Call Management'} />
      </Box>

      <Box sx={styles.outerBox}>
        <OptionCard
          data={OPTIONS}
          styles={styles}
          activeBox={activeBox}
          handleClick={handleClick}
        />
        {(activeBox === 1 || activeBox === 2) && (
          <Box mt={10}>
            {AUDIO_PREVIEW.map((setting, index) => (
              <SettingToggleCard
                key={index}
                title={setting.title}
                description={setting.description}
                icon={setting.icon}
                initialValue={''}
                onToggle={''}
              />
            ))}
          </Box>
        )}

        <Collapse in={activeBox === 1}>
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
                  <Button variant="contained" onClick={''}>
                    {`Generate AI`}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={''}
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
                  onClick={''}
                  sx={{
                    background: '#fff',
                    border: '1px solid #77797D',
                    color: ' #77797D',
                  }}
                >
                  {SYSTEM_SETTING.reset}
                </Button>
                <Button variant="contained" onClick={''}>
                  {SYSTEM_SETTING.save}
                </Button>
              </Box>
            </Box>
          </Box>
        </Collapse>

        <Collapse in={activeBox === 2}>
          <Box
            mt={2}
            sx={{
              borderRadius: '32px',
              background: ' #D9D9D9',
              p: 5,
            }}
          >
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
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={voice.defaultValue}
                      onChange={''}
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
                  startTitle={'Slow'}
                  endTitle={'Fast'}
                  defaultValue={lead.defaultValue}
                  value={''}
                  onChange={''}
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
                    checked={enabled}
                    onChange={handleToggle}
                    color="primary"
                  />
                  <Typography>{item.title}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box mt={5} p={1}>
            <Box mt={2}>
              <Box mt={2} sx={styles.buttonGroup}>
                <Button variant="outlined" onClick={''}>
                  {SYSTEM_SETTING.reset}
                </Button>
                <Button variant="contained" onClick={''}>
                  {SYSTEM_SETTING.save}
                </Button>
              </Box>
            </Box>
          </Box>
        </Collapse>

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
          <Box
            mt={2}
            sx={{
              borderRadius: '32px',
              background: ' #D9D9D9',
              p: 5,
            }}
          >
            <Grid container spacing={20}>
              {/* Twilio Credentials */}
              <Grid item xs={12} md={6}>
                <Typography
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: '19.49px',
                    color: '#1B2559',
                  }}
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
                    // size="small"
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
                    // size="small"
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
                    // size="small"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                  sx={{
                    fontWeight: 600,
                    fontSize: '19.49px',
                    color: '#1B2559',
                  }}
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
                    variant="outlined"
                    // size="small"
                    type="number"
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.expDate,
                        helperText: errors.expDate,
                        InputProps: {
                          sx: PaymentFormStyles.textInput,
                        },
                      },
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

                {[
                  { title: 'Voice Detection', state: true },
                  { title: 'Call Recordings', state: true },
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
                      checked={enabled}
                      onChange={handleToggle}
                      color="primary"
                    />
                    <Typography>{item.title}</Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
          <Box mt={2}>
            <Box mt={2} sx={styles.buttonGroup}>
              <Button variant="outlined" onClick={''}>
                {SYSTEM_SETTING.reset}
              </Button>
              <Button variant="contained" onClick={''}>
                {SYSTEM_SETTING.save}
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default KlaienManagement;
