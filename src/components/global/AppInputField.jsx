import {
  Box,
  IconButton,
  InputAdornment,
  Popper,
  TextField,
  Typography,
  ClickAwayListener,
} from '@mui/material';
import { APP_INPUT_FIELD_STYLE } from '../../constants/components/globals/AppInputField';
import PropTypes from 'prop-types';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useRef, useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const AppInputField = ({
  title,
  fontSize = '16px',
  py = 1.6,
  px = 2,
  color = 'black',
  borderRadius = '4px',
  border = '1px solid #ccc',
  fontWeight = '400',
  startAdornment = null,
  endAdornment = null,
  name,
  value = '',
  onChange = () => {},
  placeholder = '',
  type = 'text',
  formData = {},
  setCalenderValue = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const { styles } = APP_INPUT_FIELD_STYLE || {};
  const { titleStyle, inputStyle } = styles || {};
  const buttonRef = useRef(null);

  const handleClickAway = () => {
    if (open) setOpen(false);
  };

  return (
    <Box display={'flex'} flexDirection={'column'} gap={1}>
      <Typography sx={titleStyle}>{title}</Typography>
      <TextField
        fullWidth
        type={name === 'credit_card_number' || name === 'cvv' ? 'text' : type}
        name={name}
        value={value}
        onChange={(e) => {
          let inputValue = e.target.value;
          if (name === 'credit_card_number' || name === 'cvv') {
            inputValue = inputValue?.replace(/\D/g, '');
            if (name === 'credit_card_number' && inputValue?.length > 16)
              return;
            if (name === 'cvv' && inputValue?.length > 4) return;
          }
          onChange({
            ...e,
            target: {
              ...e.target,
              value: inputValue,
            },
          });
        }}
        inputProps={{
          ...(name === 'credit_card_number' && {
            minLength: 13,
            maxLength: 16,
          }),
          ...(name === 'cvv' && { minLength: 3, maxLength: 4 }),
        }}
        placeholder={placeholder}
        autoComplete="off"
        sx={{
          ...inputStyle(
            fontSize,
            py,
            px,
            color,
            borderRadius,
            border,
            fontWeight,
            type
          ),
        }}
        InputProps={{
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : null,
          endAdornment:
            type === 'date' || type === 'month' ? (
              <InputAdornment position="end">
                <IconButton
                  ref={buttonRef}
                  onClick={() => setOpen((prev) => !prev)}
                  disableRipple
                >
                  <CalendarTodayIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : endAdornment ? (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ) : null,
        }}
      />
      <Popper
        open={open}
        anchorEl={buttonRef?.current}
        onClose={() => {
          setOpen(false);
        }}
        placement="bottom-end"
        style={{ zIndex: 1300 }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                orientation={'portrait'}
                views={['year', 'month']}
                defaultValue={dayjs(formData?.date)}
                onChange={(newValue) =>
                  setCalenderValue({
                    ...formData,
                    date: newValue?.format('YYYY-MM'),
                  })
                }
                sx={{
                  border: '1px solid #CBD5E1',
                  borderRadius: 2,
                }}
              />
            </LocalizationProvider>
          </Box>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

AppInputField.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'tel',
    'date',
    'month',
  ]).isRequired, // Updated here
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  setCalenderValue: PropTypes.func.isRequired,
};

export default AppInputField;
