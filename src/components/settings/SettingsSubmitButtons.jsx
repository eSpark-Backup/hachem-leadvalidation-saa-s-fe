import { Check, Close } from '@mui/icons-material';
import { Box, Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import {
  boxStyles,
  cancelButtonStyles,
  requestButtonStyles,
} from '../../styles/components/system-settings/SettingsSubmitButtons';

import { SETTINGS_SUBMIT_BUTTONS } from '../../constants/components/system-setting/SettingsSubmitButtons';

const SettingsSubmitButtons = ({ request, cancel }) => {
  return (
    <Grid item xs={12}>
      <Box sx={boxStyles}>
        <Button
          variant="outlined"
          color="inherit"
          endIcon={<Close fontSize="12px" />}
          onClick={cancel}
          sx={cancelButtonStyles}
        >
          {SETTINGS_SUBMIT_BUTTONS.cancelLabel}
        </Button>
        <Button
          onClick={request}
          variant="formSubmissionButton"
          endIcon={<Check fontSize="12px" />}
          sx={requestButtonStyles}
        >
          {SETTINGS_SUBMIT_BUTTONS.requestLabel}
        </Button>
      </Box>
    </Grid>
  );
};

SettingsSubmitButtons.propTypes = {
  request: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default SettingsSubmitButtons;
