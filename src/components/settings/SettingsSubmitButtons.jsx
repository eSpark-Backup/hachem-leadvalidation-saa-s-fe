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
            startIcon={<Close />}
            onClick={cancel}
            sx={{
              border: '1px solid #CBD5E1',
              color: '#475569',
              '&:hover': {
                backgroundColor: '#54D14D',
                color: '#FFFFFF',
              },
              p: '10px 20px',
              borderRadius: 5,
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={request}
            endIcon={<Check />}
            sx={{
              color: '#FFFFFF',
              backgroundColor: '#54D14D',
              '&:hover': {
                backgroundColor: '#CBD5E1',
              },
              p: '10px 20px',
              borderRadius: 5,
              textTransform: 'none',
              fontWeight: 'bold',
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
