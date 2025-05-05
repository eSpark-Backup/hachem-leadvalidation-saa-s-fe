import { useRef, useState } from 'react';

import { Box, Button, ClickAwayListener, Popover } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { BG_COLOR, ICONS } from '../../../constants/components/globals/Table';

import {
  buttonStyles,
  calenderActionButtonStyles,
  calenderHeaderStyles,
  monthYearButtonStyles,
  paperPropsStyles,
  pickerLayoutStyles,
  slotsPropsStyles,
} from '../../../styles/components/globals/table/DatePickerFilter';
import dayjs from 'dayjs';

const DatePickerFilter = () => {
  const { upArrow, downArrow } = ICONS;

  const [value, setValue] = useState(dayjs());
  const [anchorEl, setAnchorEl] = useState(null);

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
      <Button
        ref={buttonRef}
        onClick={!anchorEl ? handleToggle : null}
        sx={{
          backgroundColor: anchorEl
            ? '#FFFFFF !important'
            : 'rgba(179, 199, 255, 0.41) !important',
          ...buttonStyles,
        }}
        endIcon={<Box component={'img'} src={!anchorEl ? downArrow : upArrow} />}
      >
        This Month
      </Button>

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
        PaperProps={{
          sx: paperPropsStyles,
        }}
        slotProps={{
          root: {
            sx: slotsPropsStyles,
          },
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                onAccept={() => {
                  handleClose();
                }}
                orientation={'portrait'}
                views={['year', 'month', 'day']}
                slotProps={{
                  layout: {
                    sx: {
                      background: BG_COLOR,
                      ...pickerLayoutStyles,
                    },
                  },
                  actionBar: {
                    sx: {
                      background: BG_COLOR,
                      ...calenderActionButtonStyles,
                    },
                  },
                  calendarHeader: {
                    sx: {
                      background: BG_COLOR,
                      ...calenderHeaderStyles,
                    },
                  },
                  monthButton: {
                    sx: monthYearButtonStyles,
                  },
                  yearButton: {
                    sx: monthYearButtonStyles,
                  },
                }}
                slots={{
                  toolbar: () => null,
                }}
              />
            </LocalizationProvider>
          </Box>
        </ClickAwayListener>
      </Popover>
    </Box>
  );
};

export default DatePickerFilter;
