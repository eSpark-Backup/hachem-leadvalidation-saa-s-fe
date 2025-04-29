import PersonalInfo from '../components/settings/PersonalInfo';
import RequestForSupplier from '../components/settings/RequestForSupplier';
import SettingsCard from '../components/settings/SettingsCard';
import { SETTINGS } from '../constants/components/settings/SettingsPage';

const Settings = () => {
  return (
    <>
      <SettingsCard
        title={SETTINGS.person.title}
        description={SETTINGS.person.description}
      >
        <PersonalInfo />
      </SettingsCard>
      <SettingsCard
        title={SETTINGS.supplier.title}
        description={SETTINGS.supplier.description}
        toolToop={SETTINGS.supplier.tooltip}
      >
        <RequestForSupplier />
      </SettingsCard>
    </>
  );
};

export default Settings;
