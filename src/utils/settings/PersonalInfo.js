import { PersonalInfo } from '../../constants/components/settings/PersonalInfo';

const handleSendRequest = (values) => {
  localStorage.setItem(PersonalInfo.storageKeyProfile, JSON.stringify(values));
  console.log(PersonalInfo.logCancelRequest);
  console.log(PersonalInfo.logSendRequest);
};

const handleCancelRequest = (setValues) => {
  setValues({});
  localStorage.removeItem(PersonalInfo.storageKeyProfile);
  console.log(PersonalInfo.logCancelRequest);
};

export { handleSendRequest, handleCancelRequest };
