import { Box, Button, Modal, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { CHARTS_MODAL_TEXT } from '../../constants/components/charts/ChartsModal';
const ChartsModal = ({ handleClose, open }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 1,
            borderRadius: 2,
            width: 300,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h2">
            {CHARTS_MODAL_TEXT.title}
          </Typography>
          <Typography variant="body1" component="h2">
            {CHARTS_MODAL_TEXT.desc}
          </Typography>

          <Button onClick={handleClose} sx={{ mt: 2 }}>
            {CHARTS_MODAL_TEXT.btntext}
          </Button>
        </Box>
      </Modal>
    </>
  );
};

ChartsModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ChartsModal;
