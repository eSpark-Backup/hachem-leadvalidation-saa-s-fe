import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import {
  closeIconStyle,
  modalBoxStyle,
} from '../../styles/components/globals/ChartsModal';

const ChartsModal = ({ handleCloseChartModal, open, children }) => {
  return (
    <Modal open={open} onClose={handleCloseChartModal}>
      <Box sx={modalBoxStyle}>
        <Box
          sx={{
            alignItems: 'end',
            textAlign: 'end',
          }}
        >
          <IconButton
            onClick={handleCloseChartModal}
            // sx={closeIconStyle}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box>{children}</Box>
      </Box>
    </Modal>
  );
};

ChartsModal.propTypes = {
  handleCloseChartModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default ChartsModal;
