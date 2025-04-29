import { useState } from 'react';
import { Box, Grid } from '@mui/material';

import SettingsUploadImages from './SettingsUploadImages.jsx';
import SettingsSubmitButtons from './SettingsSubmitButtons.jsx';
import SettingForm from './SettingForm.jsx';
import { getProfileInputFields } from './getProfileInputFields.jsx';
import {
  handleCancelRequest,
  handleSendRequest,
} from '../../utils/settings/PersonalInfo.js';

export default function PersonalInfo() {
  const [accountType, setAccountType] = useState('admin');
  const [values, setValues] = useState({});
  const inputFields = getProfileInputFields(accountType, setAccountType);

  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm data={inputFields} values={values} setValues={setValues} />
        <SettingsUploadImages />
        <SettingsSubmitButtons
          request={() => handleSendRequest(values)}
          cancel={() => handleCancelRequest(setValues)}
        />
      </Grid>
    </Box>
  );
}
