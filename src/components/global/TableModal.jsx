import PropTypes from 'prop-types';

import { Box, IconButton, Modal } from '@mui/material';

import {
  ALT_ATTRIBUTE,
  ICONS,
} from '../../constants/components/globals/TableModal';

import { backdropStyles } from '../../styles/components/globals/table/Common';
import {
  closeIconStyles,
  tableModalBoxStyles,
} from '../../styles/components/globals/TableModal';

const TableModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiModal-backdrop': backdropStyles,
      }}
    >
      <Box sx={tableModalBoxStyles}>
        <IconButton sx={closeIconStyles} disableRipple onClick={handleClose}>
          <Box component={'img'} src={ICONS.close} alt={ALT_ATTRIBUTE.close} />
        </IconButton>

        {children}
      </Box>
    </Modal>
  );
};

TableModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default TableModal;
