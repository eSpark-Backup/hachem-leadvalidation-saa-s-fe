/**
 * An array of years starting from the year 2000 up to 2199.
 * The array is generated dynamically using Array.from.
 *
 * @constant {number[]} years - Array of years.
 */
const years = Array.from({ length: 200 }, (_, i) => 2000 + i);

/**
 * Calculates the number of days in a given month of a specific year.
 *
 * @param {number} month - The month (0-indexed, where 0 = January and 11 = December).
 * @param {number} year - The full year (e.g., 2023).
 * @returns {number} The number of days in the specified month and year.
 */
const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

/**
 * Determines if a given day is selected based on the provided parameters.
 *
 * @param {Object} params - The parameters for the function.
 * @param {number} params.day - The day of the month to check.
 * @param {number} params.viewingMonth - The month being viewed (0-indexed, where 0 = January).
 * @param {number} params.viewingYear - The year being viewed.
 * @param {Date} [params.selectedDate] - The currently selected single date (used when `isSeries` is false).
 * @param {Date} [params.selectedStartDate] - The start date of the selected range (used when `isSeries` is true).
 * @param {Date} [params.selectedEndDate] - The end date of the selected range (used when `isSeries` is true).
 * @param {boolean} params.isSeries - Indicates whether the selection is a date range (true) or a single date (false).
 * @returns {boolean} - Returns `true` if the day is selected, otherwise `false`.
 */
const getIsSelected = ({
  day,
  viewingMonth,
  viewingYear,
  selectedDate,
  selectedStartDate,
  selectedEndDate,
  isSeries,
}) => {
  const date = new Date(viewingYear, viewingMonth, day);
  if (isSeries) {
    if (!selectedStartDate) return false;
    if (selectedStartDate && !selectedEndDate) {
      return date.toDateString() === selectedStartDate.toDateString();
    }
    return date >= selectedStartDate && date <= selectedEndDate;
  } else {
    return date.toDateString() === selectedDate.toDateString();
  }
};

/**
 * Calculates the new month and year based on the current month, year, and a delta value.
 *
 * @param {number} viewingMonth - The current month (0-based, where 0 = January and 11 = December).
 * @param {number} viewingYear - The current year.
 * @param {number} delta - The number of months to add (positive) or subtract (negative).
 * @returns {{ newMonth: number, newYear: number }} An object containing the updated month and year.
 */
const getChangedMonthYear = (viewingMonth, viewingYear, delta) => {
  let newMonth = viewingMonth + delta;
  let newYear = viewingYear;

  if (newMonth < 0) {
    newMonth = 11;
    newYear -= 1;
  } else if (newMonth > 11) {
    newMonth = 0;
    newYear += 1;
  }

  return { newMonth, newYear };
};

/**
 * Calculates the updated year based on the current viewing year and a delta value.
 *
 * @param {number} viewingYear - The current year being viewed.
 * @param {number} delta - The change to apply to the viewing year (positive or negative).
 * @returns {number} The updated year after applying the delta.
 */
const getChangedYear = (viewingYear, delta) => viewingYear + delta;

/**
 * Updates the currently viewed year by applying a delta and setting the new year.
 *
 * @param {number} delta - The amount to change the year by (e.g., +1 for next year, -1 for previous year).
 * @param {Function} setViewingYear - A function to update the state of the currently viewed year.
 * @param {Function} getChangedYear - A function that calculates the new year based on the current year and delta.
 * @param {number} viewingYear - The current year being viewed.
 */
const changeYear = (delta, setViewingYear, getChangedYear, viewingYear) => {
  const newYear = getChangedYear(viewingYear, delta);
  setViewingYear(newYear);
};

export {
  getChangedMonthYear,
  getChangedYear,
  changeYear,
  getIsSelected,
  daysInMonth,
  years,
};
