import PropTypes from 'prop-types';

import {
  Box,
  Button,
  ClickAwayListener,
  Popover,
  Typography,
} from '@mui/material';

import { TABLE_STATIC_TEXTS } from '../../../../constants/components/globals/Table';

import {
  actionButtonStyles,
  bodyStyles,
  boxContainerSyles,
  headingStyles,
} from '../../../../styles/components/globals/table/popovers/LowCreditModal';
import {
  paperPropsStyles,
  slotsCommonPropsStyles,
} from '../../../../styles/components/globals/table/Common';

const LowCreditModal = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleClose}
      slotProps={{
        root: {
          sx: slotsCommonPropsStyles,
        },
        paper: {
          sx: paperPropsStyles,
        },
      }}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Box sx={boxContainerSyles}>
          <Typography variant="h1" sx={headingStyles}>
            {TABLE_STATIC_TEXTS.lowCredit}
          </Typography>

          <Typography variant="body1" sx={bodyStyles}>
            {TABLE_STATIC_TEXTS.bodyText}
          </Typography>

          <Button sx={actionButtonStyles}>{TABLE_STATIC_TEXTS.send}</Button>
        </Box>
      </ClickAwayListener>
    </Popover>
  );
};

LowCreditModal.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
};

export default LowCreditModal;
