import { SETTINGS_UPLOAD_IMAGES } from '../../../constants/components/settings/SettingsUploadImages';

/**
 * Handles the processing of an uploaded file, validates its type and size,
 * and sets the avatar image if the file is valid.
 *
 * @param {File} file - The file object to be processed.
 * @param {Function} setAvatar - A callback function to set the avatar image.
 *                                It receives the base64 string representation of the file.
 *
 * @throws {void} - Alerts the user if the file type is not allowed or if the file size exceeds the limit.
 */
/**
 * Processes the uploaded file, validates its type and size, and sets the avatar image.
 *
 * @param {File} file - The file object to be processed.
 * @param {Function} setAvatar - A callback function to set the avatar image.
 *                                It receives the base64 string representation of the file.
 *
 * @throws {void} - Alerts the user if the file type is not allowed or if the file size exceeds the limit.
 */
const handleFile = (file, setAvatar) => {
  const allowedTypes = SETTINGS_UPLOAD_IMAGES?.allowedTypes;

  const maxSize = 10 * 1024 * 1024;
  if (!allowedTypes?.includes(file?.type)) {
    alert(SETTINGS_UPLOAD_IMAGES?.alertText);
    return;
  }
  if (file.size > maxSize) {
    alert(SETTINGS_UPLOAD_IMAGES?.alertSizeText);
    return;
  }
  const reader = new FileReader();
  reader.onloadend = () => {
    setAvatar(reader.result);
  };
  reader.readAsDataURL(file);
};

/**
 * Handles the drop event for a file upload, preventing the default behavior
 * and processing the dropped file.
 *
 * @param {DragEvent} e - The drag event triggered by dropping a file.
 * @param {Function} setAvatar - A callback function to update the avatar state.
 */
const handleDrop = (e, setAvatar) => {
  e.preventDefault();

  const file = e?.dataTransfer?.files[0];
  handleFile(file, setAvatar);
};

/**
 * Handles the change event for an input element, extracting the selected file
 * and passing it to the `handleFile` function for further processing.
 *
 * @param {Event} e - The event object from the input element.
 * @param {Function} setAvatar - A state updater function to set the avatar or handle the file data.
 */
const handleChange = (e, setAvatar) => {
  const file = e?.target?.files[0];
  if (file) {
    handleFile(file, setAvatar);
  }
};

/**
 * Triggers a click event on the file input element referenced by the provided ref.
 *
 * @param {React.RefObject<HTMLInputElement>} fileInputRef - A reference to the file input element.
 */
const handleClick = (fileInputRef) => {
  fileInputRef?.current?.click();
};

/**
 * Clears the avatar by setting it to an empty string.
 *
 * @param {Function} setAvatar - A state setter function to update the avatar value.
 */
const clearAvatar = (setAvatar) => {
  setAvatar('');
};

export { handleFile, handleDrop, handleChange, handleClick, clearAvatar };
