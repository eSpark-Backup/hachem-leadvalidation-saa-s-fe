import { Box, Grid } from '@mui/material';

import SettingsSubmitButtons from './SettingsSubmitButtons';
import SettingForm from './SettingForm';
import { getSupplierInputFields } from './getProfileInputFields';
import { useState } from 'react';

export default function RequestForSupplier() {
  const [values, setValues] = useState({});

  function handleSendRequest() {
    localStorage.setItem('settings-supplier', JSON.stringify(values));
    console.log('Cancelling request...');
    console.log('Sending request...');
  }

  function handleCancelRequest() {
    setValues('');
    localStorage.removeItem('settings-supplier');
    console.log('Cancelling request...');
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm
          data={getSupplierInputFields}
          values={values}
          setValues={setValues}
        />
        <SettingsSubmitButtons
          request={handleSendRequest}
          cancel={handleCancelRequest}
        />
      </Grid>
    </Box>
  );
}
