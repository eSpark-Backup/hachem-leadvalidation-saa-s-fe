import { useRef } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, ClickAwayListener, Popover } from '@mui/material';

import CustomSeriesDatePicker from '../../CustomSeriesDatePicker';
import LeadMonitoringHeaderButtons from '../LeadMonitoringHeaderButtons';

import { DATE_PICKER_VARIANTS } from '../../../../constants/components/globals/CustomSeriesDatePicker';
import {
  ICONS,
  TABLE_STATIC_TEXTS,
} from '../../../../constants/components/globals/Table';

import {
  buttonStyles,
  paperPropsPickerStyles,
  slotsPropsPickerStyles,
} from '../../../../styles/components/globals/table/popovers/DatePickerFilter';

const DatePickerFilter = ({ leadMonitoring, pickerObjects }) => {
  const { upArrow, downArrow } = ICONS;

  const {
    payload,
    setPayload,
    pickerID,
    anchorEl,
    setAnchorEl,
    setIsViewingHistory,
    isViewingHistory,
  } = pickerObjects;

  const buttonRef = useRef(null);

  const handleToggle = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      {leadMonitoring ? (
        <LeadMonitoringHeaderButtons
          buttonRef={buttonRef}
          onClick={!anchorEl ? handleToggle : null}
          setIsViewingHistory={setIsViewingHistory}
          isViewingHistory={isViewingHistory}
        />
      ) : (
        <Button
          ref={buttonRef}
          onClick={!anchorEl ? handleToggle : null}
          sx={{
            backgroundColor: anchorEl
              ? '#FFFFFF !important'
              : 'rgba(179, 199, 255, 0.41) !important',
            ...buttonStyles,
          }}
          endIcon={
            <Box component={'img'} src={!anchorEl ? downArrow : upArrow} />
          }
        >
          {TABLE_STATIC_TEXTS.this_month}
        </Button>
      )}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        slotProps={{
          root: {
            sx: slotsPropsPickerStyles,
          },
          paper: {
            sx: paperPropsPickerStyles,
          },
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <CustomSeriesDatePicker
            variant={DATE_PICKER_VARIANTS.FULL}
            payload={payload}
            setPayload={setPayload}
            pickerID={pickerID}
            allowArrowNavigation={true}
            setOpen={handleClose}
          />
        </ClickAwayListener>
      </Popover>
    </Box>
  );
};

DatePickerFilter.propTypes = {
  leadMonitoring: PropTypes.bool,
  pickerObjects: PropTypes.object,
};

export default DatePickerFilter;
