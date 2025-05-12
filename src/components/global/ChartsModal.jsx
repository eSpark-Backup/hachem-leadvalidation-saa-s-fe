import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { modalBoxStyle } from '../../styles/components/globals/ChartsModal';

const ChartsModal = ({ handleCloseChartModal, open, children, width }) => {
  return (
    <Modal open={open} onClose={handleCloseChartModal}>
      <Box sx={modalBoxStyle(width)}>
        <Box
          sx={{
            alignItems: 'end',
            textAlign: 'end',
          }}
        >
          <IconButton onClick={handleCloseChartModal} aria-label="close">
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
  width: PropTypes.any,
};

export default ChartsModal;
