import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import SettingsUploadImages from './SettingsUploadImages.jsx';
import SettingsSubmitButtons from './SettingsSubmitButtons.jsx';
import SettingForm from './SettingForm.jsx';
import {
  handleCancelRequest,
  handleSendRequest,
} from '../../utils/components/settings/PersonalInfo.js';

const PersonalInfo = ({ data, values, setValues }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm data={data} values={values} setValues={setValues} />
        <SettingsUploadImages />
        <SettingsSubmitButtons
          request={() => handleSendRequest(values)}
          cancel={() => handleCancelRequest(setValues)}
        />
      </Grid>
    </Box>
  );
};

PersonalInfo.propTypes = {
  data: PropTypes.any.isRequired,
  values: PropTypes.any.isRequired,
  setValues: PropTypes.any.isRequired,
};

export default PersonalInfo;
