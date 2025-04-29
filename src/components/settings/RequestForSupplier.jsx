import { Box, Grid } from '@mui/material';

import SettingsSubmitButtons from './SettingsSubmitButtons';
import SettingForm from './SettingForm';
import { useState } from 'react';
import {
  handleCancelRequest,
  handleSendRequest,
} from '../../utils/settings/PersonalInfo';
import { getSupplierInputFields } from '../../constants/components/settings/getProfileInputFields';

export default function RequestForSupplier() {
  const [values, setValues] = useState({});

  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm
          data={getSupplierInputFields}
          values={values}
          setValues={setValues}
        />
        <SettingsSubmitButtons
          request={() => handleSendRequest(values)}
          cancel={() => handleCancelRequest(setValues)}
        />
      </Grid>
    </Box>
  );
}
