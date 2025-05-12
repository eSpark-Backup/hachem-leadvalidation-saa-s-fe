import { useRef, useState } from 'react';

import dayjs from 'dayjs';

import { Box, Button, ClickAwayListener, Popover } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {
  BG_COLOR,
  ICONS,
  TABLE_STATIC_TEXTS,
} from '../../../../constants/components/globals/Table';

import {
  buttonStyles,
  calenderActionButtonStyles,
  calenderHeaderStyles,
  monthYearButtonStyles,
  paperPropsPickerStyles,
  pickerLayoutStyles,
  slotsPropsPickerStyles,
} from '../../../../styles/components/globals/table/popovers/DatePickerFilter';

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
        endIcon={
          <Box component={'img'} src={!anchorEl ? downArrow : upArrow} />
        }
      >
        {TABLE_STATIC_TEXTS.this_month}
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
