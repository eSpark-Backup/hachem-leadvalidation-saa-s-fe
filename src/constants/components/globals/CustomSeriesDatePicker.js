const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const DATE_PICKER_VARIANTS = {
  FULL: 'full',
  MONTH_ONLY: 'MonthSelectionOnly',
  YEAR_ONLY: 'YearSelectionOnly',
  MONTH_YEAR: 'MonthAndYearSelection',
};

const ARROW_DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right',
};

const DROPDOWN_HEADER = [
  DATE_PICKER_VARIANTS.FULL,
  DATE_PICKER_VARIANTS.MONTH_ONLY,
  DATE_PICKER_VARIANTS.YEAR_ONLY,
  DATE_PICKER_VARIANTS.MONTH_YEAR,
];
const FULL_MONTH_ONLY = [
  DATE_PICKER_VARIANTS.FULL,
  DATE_PICKER_VARIANTS.MONTH_ONLY,
  DATE_PICKER_VARIANTS.MONTH_YEAR,
];

const FULL_YEAR_ONLY = [
  DATE_PICKER_VARIANTS.FULL,
  DATE_PICKER_VARIANTS.YEAR_ONLY,
  DATE_PICKER_VARIANTS.MONTH_YEAR,
];

const CUSTOM_SERIES_DATE_PICKER = {
  month: 'month',
  year: 'year',
  left: 'left',
  right: 'right',
  arrowRight: '>',
  arrowLeft: '<',
  confirm: 'Confirm',
  cancel: 'Cancel',
};

export {
  months,
  weeks,
  DATE_PICKER_VARIANTS,
  ARROW_DIRECTIONS,
  DROPDOWN_HEADER,
  FULL_MONTH_ONLY,
  FULL_YEAR_ONLY,
  CUSTOM_SERIES_DATE_PICKER,
};
