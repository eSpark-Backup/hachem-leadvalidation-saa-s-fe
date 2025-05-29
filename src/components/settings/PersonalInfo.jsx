import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

import SettingsUploadImages from './SettingsUploadImages.jsx';
import SettingsSubmitButtons from './SettingsSubmitButtons.jsx';
import SettingForm from './SettingForm.jsx';
import {
  handleChange,
  handleClick,
  handleDrop,
  clearAvatar,
} from '../../utils/components/settings/SettingsUploadImages';

const PersonalInfo = ({ data, values, setValues, request, cancel }) => {
  const [avatar, setAvatar] = useState(null);
  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm data={data} values={values} setValues={setValues} />
        <SettingsUploadImages
          avatar={avatar}
          setAvatar={setAvatar}
          handleChange={handleChange}
          handleClick={handleClick}
          handleDrop={handleDrop}
          clearAvatar={clearAvatar}
        />
        <SettingsSubmitButtons request={request} cancel={cancel} />
      </Grid>
    </Box>
  );
};

PersonalInfo.propTypes = {
  data: PropTypes.any.isRequired,
  values: PropTypes.any.isRequired,
  setValues: PropTypes.any.isRequired,
  request: PropTypes.any.isRequired,
  cancel: PropTypes.any.isRequired,
};

export default PersonalInfo;
