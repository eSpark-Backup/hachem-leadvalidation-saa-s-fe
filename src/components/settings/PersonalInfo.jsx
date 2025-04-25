import { useState } from 'react';

import SettingsUploadImages from './SettingsUploadImages.jsx';
import SettingsSubmitButtons from './SettingsSubmitButtons.jsx';
import { Box, Grid } from '@mui/material';
import SettingForm from './SettingForm.jsx';
import { getProfileInputFields } from './getProfileInputFields.jsx';

export default function PersonalInfo() {
  const [accountType, setAccountType] = useState('admin');
  const [values, setValues] = useState({});
  const inputFields = getProfileInputFields(accountType, setAccountType);

  function handleSendRequest() {
    localStorage.setItem('settings-profile', JSON.stringify(values));
    console.log('Cancelling request...');
    console.log('Sending request...');
  }

  function handleCancelRequest() {
    setValues('');
    localStorage.removeItem('settings-profile');
    console.log('Cancelling request...');
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm data={inputFields} values={values} setValues={setValues} />
        <SettingsUploadImages />
        {/* Action Buttons */}
        <SettingsSubmitButtons
          request={handleSendRequest}
          cancel={handleCancelRequest}
        />
      </Grid>
    </Box>
  );
}
