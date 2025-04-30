import { SETTINGS_UPLOAD_IMAGES } from '../../constants/components/settings/SettingsUploadImages';

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

const handleDrop = (e, setAvatar) => {
  e.preventDefault();
  const file = e?.dataTransfer?.files[0];
  handleFile(file, setAvatar);
};

const handleChange = (e, setAvatar) => {
  const file = e?.target?.files[0];
  if (file) {
    handleFile(file, setAvatar);
  }
};

const handleClick = (fileInputRef) => {
  fileInputRef?.current?.click();
};

const clearAvatar = (setAvatar) => {
  setAvatar('');
};

export { handleFile, handleDrop, handleChange, handleClick, clearAvatar };
