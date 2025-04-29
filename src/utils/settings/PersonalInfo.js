import { PersonalInfo } from '../../constants/components/settings/PersonalInfo';

export function handleSendRequest(values) {
  localStorage.setItem(PersonalInfo.storageKeyProfile, JSON.stringify(values));
  console.log(PersonalInfo.logCancelRequest);
  console.log(PersonalInfo.logSendRequest);
}

export function handleCancelRequest(setValues) {
  setValues('');
  localStorage.removeItem(PersonalInfo.storageKeyProfile);
  console.log(PersonalInfo.logCancelRequest);
}
