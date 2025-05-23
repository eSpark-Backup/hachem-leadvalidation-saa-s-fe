import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  changeYear,
  getChangedMonthYear,
  getChangedYear,
  getIsSelected,
  years,
} from '../../utils/components/globals/CustomSeriesDatePicker';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  ClickAwayListener,
} from '@mui/material';
import {
  ARROW_DIRECTIONS,
  CUSTOM_SERIES_DATE_PICKER,
  DATE_PICKER_VARIANTS,
  DROPDOWN_HEADER,
  FULL_MONTH_ONLY,
  FULL_YEAR_ONLY,
  months,
  weeks,
} from '../../constants/components/globals/CustomSeriesDatePicker';
import { styles } from '../../styles/components/globals/CustomSeriesDatePicker';
import { dateFormator } from '../../utils/globals';

/**
 * CustomSeriesDatePicker Component
 *
 * A versatile date picker component that supports single date selection
 * and date range selection (series). It provides options for customizing
 * the appearance and behavior, including month/year navigation, overlays,
 * and action buttons.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isSeries - Determines if the date picker is for a series (date range) or a single date.
 * @param {boolean} [props.allowArrowNavigation=true] - Enables or disables arrow navigation for months/years.
 * @param {string} [props.variant='full'] - Specifies the display variant of the date picker (e.g., full, year-only, month-only).
 * @param {Date} props.selectedDate - The currently selected single date.
 * @param {function} props.setSelectedDate - Callback to update the selected single date.
 * @param {Date} props.selectedStartDate - The start date of the selected date range.
 * @param {function} props.setSelectedStartDate - Callback to update the start date of the selected date range.
 * @param {Date} props.selectedEndDate - The end date of the selected date range.
 * @param {function} props.setSelectedEndDate - Callback to update the end date of the selected date range.
 * @param {number} [props.height=400] - The minimum height of the date picker component.
 * @param {function} props.setOpen - Callback to control the visibility of the date picker.
 *
 * @returns {JSX.Element} A styled date picker component with customizable options.
 */
const CustomSeriesDatePicker = ({
  isSeries,
  allowArrowNavigation = true,
  variant = 'full',
  height = 400,
  setOpen,
  setPayload,
  pickerID,
}) => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedStartDate, setSelectedStartDate] = useState(new Date());

  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const [viewingMonth, setViewingMonth] = useState(today.getMonth());

  const [viewingYear, setViewingYear] = useState(today.getFullYear());

  const [showMonthList, setShowMonthList] = useState(false);

  const [showYearList, setShowYearList] = useState(false);
  /**
   * Handles the confirmation of a selected date or date range and updates the payload.
   * Closes the date picker and formats the date(s) based on whether it's a series or a single date selection.
   *
   * @function
   * @returns {void}
   */
  const handleConfirm = () => {
    setOpen(false);

    let formattedDate;
    let formattedStartDate;
    let formattedEndDate;

    if (isSeries) {
      formattedStartDate = dateFormator(selectedStartDate);
      formattedEndDate = dateFormator(selectedEndDate);
    } else {
      formattedDate = dateFormator(selectedDate);
    }

    setPayload((prevPayload) => {
      const newPickerData = {
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        selectedDate: formattedDate,
      };

      // Append or update pickerID data, while keeping the rest of the payload untouched
      const updatedPayload = {
        ...prevPayload,
        [pickerID]: {
          ...(prevPayload?.[pickerID] || {}),
          ...newPickerData,
        },
      };

      console.log('Updated Payload:', updatedPayload);
      return updatedPayload;
    });
  };

  /**
   * Handles the logic for selecting a date or a date range based on user interaction.
   *
   * @param {number} day - The day of the month that was clicked.
   *
   * - If `isSeries` is true:
   *   - If no start date is selected or both start and end dates are selected,
   *     sets the clicked date as the start date and clears the end date.
   *   - If the clicked date is earlier than the currently selected start date,
   *     sets the clicked date as the new start date and the previous start date as the end date.
   *   - Otherwise, sets the clicked date as the end date.
   * - If `isSeries` is false:
   *   - Sets the clicked date as the selected date.
   *
   * @returns {void}
   */
  const handleDateClick = (day) => {
    const clickedDate = new Date(viewingYear, viewingMonth, day);
    if (isSeries) {
      if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
        setSelectedStartDate(clickedDate);
        setSelectedEndDate(null);
      } else if (clickedDate < selectedStartDate) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(clickedDate);
      } else {
        setSelectedEndDate(clickedDate);
      }
    } else {
      setSelectedDate(clickedDate);
    }
  };

  useEffect(() => {
    if (variant === DATE_PICKER_VARIANTS.YEAR_ONLY) setShowYearList(true);
    if (
      variant === DATE_PICKER_VARIANTS.MONTH_ONLY ||
      variant === DATE_PICKER_VARIANTS.MONTH_YEAR
    )
      setShowMonthList(true);
  }, [variant]);

  /**
   * Calculates an array representing the days of a calendar month, including blanks for days
   * before the first day of the month.
   *
   * @constant
   * @type {Array<(number|null)>}
   * @description
   * - `null` values represent blank spaces for days before the first day of the month.
   * - Numbers represent the actual days of the month starting from 1.
   *
   * @param {number} viewingYear - The year of the month being viewed.
   * @param {number} viewingMonth - The zero-based index of the month being viewed (0 = January, 11 = December).
   *
   * @returns {Array<(number|null)>} An array where `null` represents blank days and numbers represent actual days of the month.
   */
  const days = useMemo(() => {
    const firstDay = new Date(viewingYear, viewingMonth, 1).getDay();
    const daysInMonth = new Date(viewingYear, viewingMonth + 1, 0).getDate();
    const blanks = Array(firstDay).fill(null);
    const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return [...blanks, ...dates];
  }, [viewingMonth, viewingYear]);

  /**
   * Determines if a given day is selected based on the provided parameters.
   *
   * @param {Object} day - The day object to check for selection.
   * @param {number} viewingMonth - The currently viewed month.
   * @param {number} viewingYear - The currently viewed year.
   * @param {Date|null} selectedDate - The single selected date (if not a range).
   * @param {Date|null} selectedStartDate - The start date of the selected range (if applicable).
   * @param {Date|null} selectedEndDate - The end date of the selected range (if applicable).
   * @param {boolean} isSeries - Indicates if the selection is part of a series.
   * @returns {boolean} - Returns true if the day is selected, otherwise false.
   */
  const isSelected = (day) =>
    getIsSelected({
      day,
      viewingMonth,
      viewingYear,
      selectedDate,
      selectedStartDate,
      selectedEndDate,
      isSeries,
    });

  /**
   * Updates the currently viewed month and year based on a delta value.
   *
   * @param {number} delta - The number of months to shift the current view.
   *                          Positive values move forward, negative values move backward.
   * @returns {void}
   */
  const changeMonth = (delta) => {
    const { newMonth, newYear } = getChangedMonthYear(
      viewingMonth,
      viewingYear,
      delta
    );
    setViewingMonth(newMonth);
    setViewingYear(newYear);
  };

  /**
   * Renders a custom arrow button for navigation.
   *
   * @function renderArrowButton
   * @param {string} direction - The direction of the arrow, either CUSTOM_SERIES_DATE_PICKER.left or CUSTOM_SERIES_DATE_PICKER.right.
   * @param {function} onClick - The callback function to handle the button click event.
   * @returns {JSX.Element} A button element styled with the provided styles and displaying the appropriate arrow.
   */
  const renderArrowButton = (direction, onClick) => (
    <Button onClick={onClick} sx={styles?.arrowButton}>
      {direction === CUSTOM_SERIES_DATE_PICKER.left
        ? CUSTOM_SERIES_DATE_PICKER.arrowLeft
        : CUSTOM_SERIES_DATE_PICKER.arrowRight}
    </Button>
  );

  /**
   * Renders a custom button for selecting month and year in a date picker.
   *
   * @param {string} label - The text label to display on the button.
   * @param {function} onClick - The callback function to execute when the button is clicked.
   * @returns {JSX.Element} A styled button component.
   */
  const renderMonthYearButton = (label, onClick) => (
    <Button onClick={onClick} sx={styles?.monthYearButton}>
      {label}
    </Button>
  );

  /**
   * Renders an overlay list for selecting either months or years.
   *
   * @param {string} type - The type of list to render, either CUSTOM_SERIES_DATE_PICKER.month or 'year'.
   * @returns {JSX.Element} A JSX element containing the overlay list with selectable items.
   *
   * The overlay list displays either months or years based on the `type` parameter.
   * It highlights the currently selected item and allows the user to select a new one.
   * Clicking outside the overlay will hide it.
   *
   * - `type === CUSTOM_SERIES_DATE_PICKER.month`: Displays a list of months.
   * - `type === 'year'`: Displays a list of years.
   *
   * The function uses the following:
   * - `list`: The array of items to display (months or years).
   * - `current`: The currently selected value (month or year).
   * - `setFn`: The function to update the selected value.
   * - `hideFn`: A function to hide the overlay.
   *
   * Each item in the list:
   * - Displays a checkmark if it is selected.
   * - Updates the selected value and hides the overlay when clicked.
   */
  const renderOverlayList = (type) => {
    const list = type === CUSTOM_SERIES_DATE_PICKER.month ? months : years;
    const current =
      type === CUSTOM_SERIES_DATE_PICKER.month ? viewingMonth : viewingYear;
    const setFn =
      type === CUSTOM_SERIES_DATE_PICKER.month
        ? setViewingMonth
        : setViewingYear;
    const hideFn = () => {
      setShowMonthList(false);
      setShowYearList(false);
    };

    return (
      <ClickAwayListener onClickAway={hideFn}>
        <Box sx={styles?.overlayBox}>
          <Grid container spacing={1}>
            {list.map((item, index) => {
              const value =
                type === CUSTOM_SERIES_DATE_PICKER.month ? index : item;
              const selected = current === value;

              return (
                <Grid item xs={12} key={value}>
                  <Box
                    sx={styles?.overlayItem(selected)}
                    onClick={() => {
                      setFn(value);
                      hideFn();
                    }}
                  >
                    <Typography sx={styles?.overlayIcon(selected)}>
                      ✓
                    </Typography>
                    <Typography sx={styles?.overlayText(selected)}>
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </ClickAwayListener>
    );
  };

  const renderDaysGrid = () => (
    <>
      <Grid container spacing={1} columns={7} textAlign={'center'} mb={1}>
        {weeks.map((day) => (
          <Grid item xs={1} key={day}>
            <Typography variant={'caption'}>{day}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} columns={7}>
        {days.map((day, idx) => (
          <Grid item xs={1} key={idx}>
            {day && (
              <Button
                variant={isSelected(day) ? 'contained' : 'text'}
                color={'success'}
                onClick={() => handleDateClick(day)}
                sx={styles?.dayButton}
              >
                {day}
              </Button>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Paper elevation={3} sx={styles.paper(height)}>
      {/* Header */}
      {DROPDOWN_HEADER.includes(variant) && (
        <Box sx={styles.headerBox}>
          {FULL_MONTH_ONLY.includes(variant) && (
            <Box sx={styles.arrowNavBox}>
              {allowArrowNavigation &&
                renderArrowButton(ARROW_DIRECTIONS.LEFT, () => changeMonth(-1))}
              {renderMonthYearButton(months[viewingMonth], () => {
                setShowMonthList(!showMonthList);
                setShowYearList(false);
              })}
              {allowArrowNavigation &&
                renderArrowButton(ARROW_DIRECTIONS.RIGHT, () => changeMonth(1))}
            </Box>
          )}

          {FULL_YEAR_ONLY.includes(variant) && (
            <Box sx={styles.arrowNavBox}>
              {allowArrowNavigation &&
                renderArrowButton(CUSTOM_SERIES_DATE_PICKER.left, () =>
                  changeYear(-1, setViewingYear, getChangedYear, viewingYear)
                )}
              {renderMonthYearButton(viewingYear, () => {
                setShowYearList(!showYearList);
                setShowMonthList(false);
              })}
              {allowArrowNavigation &&
                renderArrowButton(CUSTOM_SERIES_DATE_PICKER.right, () =>
                  changeYear(1, setViewingYear, getChangedYear, viewingYear)
                )}
            </Box>
          )}
        </Box>
      )}

      {/* Overlays */}
      {showMonthList && renderOverlayList(CUSTOM_SERIES_DATE_PICKER.month)}
      {showYearList && renderOverlayList(CUSTOM_SERIES_DATE_PICKER.year)}

      {/* Days Grid */}
      {variant === DATE_PICKER_VARIANTS.FULL &&
        !showMonthList &&
        !showYearList &&
        renderDaysGrid()}

      {/* Action Buttons */}
      <Box sx={styles.actionsBox}>
        <Button color="success" onClick={() => setOpen(false)}>
          {CUSTOM_SERIES_DATE_PICKER.cancel}
        </Button>
        <Button color="success" variant="contained" onClick={handleConfirm}>
          {CUSTOM_SERIES_DATE_PICKER.confirm}
        </Button>
      </Box>
    </Paper>
  );
};

CustomSeriesDatePicker.propTypes = {
  isSeries: PropTypes.bool,
  variant: PropTypes.string,
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  selectedStartDate: PropTypes.instanceOf(Date),
  setSelectedStartDate: PropTypes.func,
  selectedEndDate: PropTypes.instanceOf(Date),
  setSelectedEndDate: PropTypes.func,
  allowArrowNavigation: PropTypes.bool,
  height: PropTypes.any,
  open: PropTypes.any,
  setOpen: PropTypes.any,
  anchorRef: PropTypes.any,
  payload: PropTypes.any,
  setPayload: PropTypes.any,
  pickerID: PropTypes.any,
};

export default CustomSeriesDatePicker;
