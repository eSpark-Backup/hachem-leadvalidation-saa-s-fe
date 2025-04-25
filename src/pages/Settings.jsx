import Payments from '../components/settings/Payments';
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
        toolToop={SETTINGS.supplier.tooltip}
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

      <SettingsCard
        title={SETTINGS.person.title}
        description={SETTINGS.payment.description}
        toolToop={SETTINGS.payment.tooltip}
      >
        <Payments />
      </SettingsCard>
    </>
  );
};

export default Settings;
