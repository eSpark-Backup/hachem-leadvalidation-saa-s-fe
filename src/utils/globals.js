/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} The input string with the first letter capitalized.
 */
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { capitalizeFirstLetter };
