import { Check, Close } from '@mui/icons-material';
import { Box, Button, Grid } from '@mui/material';

import PropTypes from 'prop-types';
const SettingsSubmitButtons = ({ request, cancel }) => {
  return (
    <>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button
            variant="outlined"
            color="inherit"
            endIcon={<Close fontSize="12px" />}
            onClick={cancel}
            sx={{
              display: 'flex',
              width: { xs: '100%', sm: '100px' },
              fontSize: { xs: '12px', sm: '14px' },
              height: '40px',
              border: '1px solid #CBD5E1',
              color: '#475569',
              borderRadius: 5,
              textTransform: 'none',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#475569',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={request}
            variant="formSubmissionButton"
            endIcon={<Check fontSize="12px" />}
            sx={{
              width: { xs: '100%', sm: '117px' },
              fontSize: { xs: '12px', sm: '14px' },
              height: '40px',
            }}
          >
            Request
          </Button>
        </Box>
      </Grid>
    </>
  );
};
SettingsSubmitButtons.propTypes = {
  request: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};
export default SettingsSubmitButtons;
