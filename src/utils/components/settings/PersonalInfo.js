import { PersonalInfo } from '../../../constants/components/settings/PersonalInfo';

/**
 * Handles sending a request by storing the provided values in local storage
 * and logging specific messages to the console.
 *
 * @param {Object} values - The data to be stored in local storage.
 * @property {string} PersonalInfo.storageKeyProfile - The key used to store the profile data in local storage.
 * @property {string} PersonalInfo.logCancelRequest - The log message for canceling a request.
 * @property {string} PersonalInfo.logSendRequest - The log message for sending a request.
 */
const handleSendRequest = async (values, updateSettings) => {
  try {
    // Optional: Keep localStorage if still desired
    localStorage.setItem(
      PersonalInfo.storageKeyProfile,
      JSON.stringify(values)
    );

    // Perform actual API mutation
    const response = await updateSettings(values).unwrap(); // using .unwrap() to throw if error
    console.log('Settings updated successfully:', response);

    // Optionally: clear localStorage after successful update
    localStorage.removeItem(PersonalInfo.storageKeyProfile);

    console.log(PersonalInfo.logSendRequest);
  } catch (error) {
    console.error('Error updating settings:', error);
  }
};

/**
 * Handles the cancellation of a request by resetting values and clearing stored profile data.
 *
 * @param {Function} setValues - A function to update the state with new values.
 *                               Typically used to reset the form or state to its initial state.
 */
const handleCancelRequest = (setValues) => {
  setValues({});
  localStorage.removeItem(PersonalInfo.storageKeyProfile);
  console.log(PersonalInfo.logCancelRequest);
};

export { handleSendRequest, handleCancelRequest };
