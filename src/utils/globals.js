import dayjs from 'dayjs';

const dateFormate = 'YYYY-MM-DD';

/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} The input string with the first letter capitalized.
 */
const capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Formats a number by converting it to a locale-specific string representation.
 *
 * @param {number} value - The number to be formatted.
 * @returns {string} The formatted number as a locale-specific string.
 */
const formatNumber = (value) => {
  return value?.toLocaleString();
};

/**
 * Formats a given date value into a 'YYYY-MM-DD' string format.
 *
 * @param {string|Date|number} value - The date value to format. Can be a string, Date object, or timestamp.
 * @returns {string} The formatted date string in 'YYYY-MM-DD' format.
 */
const dateFormator = (value) => {
  return dayjs(value).format(dateFormate);
};

export { capitalizeFirstLetter, formatNumber, dateFormator };
