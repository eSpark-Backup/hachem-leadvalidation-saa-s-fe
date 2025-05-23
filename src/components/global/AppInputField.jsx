import {
  Box,
  IconButton,
  InputAdornment,
  Popper,
  TextField,
  Typography,
  ClickAwayListener,
  MenuItem,
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
  selectHeight = '',
  name,
  value = '',
  onChange = () => {},
  placeholder = '',
  type = 'text',
  formData = {},
  select = false,
  options = [],
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
        select={select}
        options={options}
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
        SelectProps={{
          IconComponent: () => null,
          MenuProps: {
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          },
          sx: {
            height: selectHeight || '48px',
            display: 'flex',
            alignItems: 'center',
          },
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
      >
        {select && placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {select &&
          options?.map((opt, i) => (
            <MenuItem key={i} value={opt?.value}>
              {opt?.label}
            </MenuItem>
          ))}
      </TextField>
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
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    'phone',
    'select',
  ]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  formData: PropTypes.object,
  setCalenderValue: PropTypes.func,
  select: PropTypes.bool,
  options: PropTypes.array,
};

export default AppInputField;
