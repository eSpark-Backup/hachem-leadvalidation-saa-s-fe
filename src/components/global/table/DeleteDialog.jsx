import { Box, Button, Dialog, Stack, Typography } from '@mui/material';

import {
  boxContainerstyles,
  cancelButtonStyles,
  deleteButtonStyles,
  paperStyles,
  stackStyles,
  textStyles,
} from '../../../styles/components/globals/table/DeleteDialog';

const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={paperStyles}
    >
      <Box sx={boxContainerstyles}>
        <Typography variant="body1" sx={textStyles}>
          Do you want to delete this lead?
        </Typography>

        <Stack sx={stackStyles}>
          <Button sx={deleteButtonStyles}>Delete</Button>

          <Button sx={cancelButtonStyles} onClick={handleClose}>Cancel</Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default DeleteDialog;
