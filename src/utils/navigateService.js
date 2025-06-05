// utils/navigateService.js
let navigator;

/**
 * Sets the global navigator object to be used for navigation.
 *
 * @param {object} nav - The navigator object to set.
 */
const setNavigator = (nav) => {
  navigator = nav;
};

/**
 * Calls the global `navigator` function with the provided arguments if it exists.
 *
 * @param {...any} args - Arguments to pass to the `navigator` function.
 */
const navigate = (...args) => {
  if (navigator) {
    navigator(...args);
  }
};

export { setNavigator, navigate };
