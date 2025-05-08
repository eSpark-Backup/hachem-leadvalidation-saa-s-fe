/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} The input string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Formats a number by converting it to a locale-specific string representation.
 *
 * @param {number} value - The number to be formatted.
 * @returns {string} The formatted number as a locale-specific string.
 */
export const formatNumber = (value) => {
  return value?.toLocaleString();
};
