import { Box, Grid } from '@mui/material';

import SettingsSubmitButtons from './SettingsSubmitButtons';
import SettingForm from './SettingForm';

import PropTypes from 'prop-types';

const RequestForSupplier = ({ data, setValues, values, request, cancel }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm data={data} values={values} setValues={setValues} />
        <SettingsSubmitButtons request={request} cancel={cancel} />
      </Grid>
    </Box>
  );
};

RequestForSupplier.propTypes = {
  data: PropTypes.array.isRequired,
  values: PropTypes.any.isRequired,
  setValues: PropTypes.any.isRequired,
  request: PropTypes.any.isRequired,
  cancel: PropTypes.any.isRequired,
};

export default RequestForSupplier;
