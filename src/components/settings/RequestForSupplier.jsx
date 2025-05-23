import { Box, Grid } from '@mui/material';

import SettingsSubmitButtons from './SettingsSubmitButtons';
import SettingForm from './SettingForm';
import { useState } from 'react';

import PropTypes from 'prop-types';

import {
  handleCancelRequest,
  handleSendRequest,
} from '../../utils/components/settings/PersonalInfo';

const RequestForSupplier = ({ data }) => {
  const [values, setValues] = useState({});

  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm data={data} values={values} setValues={setValues} />
        <SettingsSubmitButtons
          request={() => handleSendRequest(values)}
          cancel={() => handleCancelRequest(setValues)}
        />
      </Grid>
    </Box>
  );
};

RequestForSupplier.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RequestForSupplier;
