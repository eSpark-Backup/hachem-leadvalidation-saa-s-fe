import { Box, IconButton, Link, Modal, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  modalBoxStyle,
  contentBoxStyle,
  closeButtonStyle,
  titleStyle,
  imageStyle,
  linkStyle,
} from '../../styles/components/auth/VerificationModal';

import { VERIFICATION_MODAL } from '../../constants/components/auth/VerificationModal';

const VerificationModal = ({ open, setOpen, data, link, text }) => {
  const {
    title = VERIFICATION_MODAL.defaultTitle,
    image = VERIFICATION_MODAL.defaultImage,
  } = data || {};

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="verification-modal-title"
      aria-describedby="verification-modal-description"
    >
      <Box sx={modalBoxStyle}>
        <Box sx={contentBoxStyle}>
          <IconButton
            onClick={handleClose}
            aria-label={VERIFICATION_MODAL.closeAlt}
            disableRipple
            sx={closeButtonStyle}
          >
            <HighlightOffIcon fontSize="medium" />
          </IconButton>

          <Typography sx={titleStyle}>{title}</Typography>

          <Box
            component="img"
            alt="verification-image"
            src={image}
            sx={imageStyle}
          />

          <Link
            component={RouterLink}
            to={link || VERIFICATION_MODAL.defaultLink}
            underline="none"
            sx={linkStyle}
          >
            {text || VERIFICATION_MODAL.defaultText}
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

VerificationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default VerificationModal;
