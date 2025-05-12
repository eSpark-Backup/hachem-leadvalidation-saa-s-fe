import PropTypes from 'prop-types';

import { Box, Button, Dialog, Stack, Typography } from '@mui/material';

import { TABLE_STATIC_TEXTS } from '../../../../constants/components/globals/Table';

import {
  boxContainerstyles,
  cancelButtonStyles,
  deleteButtonStyles,
  paperStyles,
  stackStyles,
  textStyles,
} from '../../../../styles/components/globals/table/dialog/CommonDialog';

const CommonDialog = ({ open, handleClose, lead }) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={paperStyles}
    >
      <Box sx={boxContainerstyles}>
        <Typography variant="body1" sx={textStyles}>
          {lead
            ? TABLE_STATIC_TEXTS.confirmLead
            : TABLE_STATIC_TEXTS.confirmDelete}
        </Typography>

        <Stack sx={stackStyles}>
          <Button sx={deleteButtonStyles(lead)}>
            {lead ? TABLE_STATIC_TEXTS.accept : TABLE_STATIC_TEXTS.delete}
          </Button>

          <Button sx={cancelButtonStyles(lead)} onClick={handleClose}>
            {lead ? TABLE_STATIC_TEXTS.reject : TABLE_STATIC_TEXTS.cancel}
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

CommonDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  lead: PropTypes.bool,
};

export default CommonDialog;
