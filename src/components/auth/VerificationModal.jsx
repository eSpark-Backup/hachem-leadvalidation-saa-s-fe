import { Box, IconButton, Link, Modal, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link as RouterLink } from 'react-router-dom';

const VerificationModal = ({ open, setOpen, data, link, text }) => {
  const { title, image } = data || {};
  const handleCloseChartModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseChartModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            top: '50%',
            left: '50%',
            width: '70%',
            height: '70%',
            position: 'absolute',
            borderRadius: '20px',
            maxWidth: { xs: '404px' },
            maxHeight: { xs: '333px', md: '373px' },
            bgcolor: 'background.paper',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
            p: 3,
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 2,
              px: 2.5,
            }}
          >
            <IconButton
              onClick={handleCloseChartModal}
              disableRipple
              sx={{
                width: '20px',
                height: '20px',
                color: 'black',
                position: 'absolute',
                top: 20,
                right: 20,
                p: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <HighlightOffIcon fontSize="medium" />
            </IconButton>
            <Typography
              sx={{
                color: '#1B2559',
                fontSize: { xs: '20px', sm: '22px', md: '25px' },
                fontWeight: 600,
              }}
            >
              {title || ''}
            </Typography>
            <Box
              component={'img'}
              alt="verified-image"
              src={image || '/'}
              sx={{
                width: { xs: '164px', md: 'auto' },
                height: 'auto',
              }}
            />
            <Link
              component={RouterLink}
              to={link || '#'}
              underline="none"
              sx={{
                color: '#136BE5',
                fontSize: { xs: '17px', sm: '18px', md: '20px' },
                textTransform: 'uppercase',
                fontWeight: 400,
              }}
            >
              {text || ''}
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

VerificationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default VerificationModal;
