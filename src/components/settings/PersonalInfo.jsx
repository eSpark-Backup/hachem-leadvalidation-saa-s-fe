import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

import SettingsUploadImages from './SettingsUploadImages.jsx';
import SettingsSubmitButtons from './SettingsSubmitButtons.jsx';
import SettingForm from './SettingForm.jsx';


const PersonalInfo = ({ data, values, setValues, request, cancel }) => {
  const [avatar, setAvatar] = useState(values?.avatar || '');
  const handleChange = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <SettingForm
          data={data}
          values={values}
          setValues={setValues}
          handleChange={handleChange}
        />
        <SettingsUploadImages
          avatar={avatar}
          setAvatar={setAvatar}
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
