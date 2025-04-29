import { Box } from '@mui/material';
import PaymentForm from '../components/payment/PaymentForm';
import PersonalInfo from '../components/settings/PersonalInfo';
import RequestForSupplier from '../components/settings/RequestForSupplier';
import SettingsCard from '../components/settings/SettingsCard';
import { PAYMENT_DATA } from '../constants/components/payment/Payment';
import { SETTINGS } from '../constants/components/settings/SettingsPage';

const Settings = () => {
  const { formData } = PAYMENT_DATA || {};
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
      >
        <RequestForSupplier />
      </SettingsCard>
      <SettingsCard
        title={SETTINGS.payment.title}
        description={SETTINGS.payment.description}
        toolToop={SETTINGS.payment.tooltip}
      >
        <Box sx={{ width: '100%' }}>
          <PaymentForm
            data={formData}
            maxWidth={'100%'}
            border={'0px'}
            padding={{ xs: '0px', sm: 2 }}
          />
        </Box>
      </SettingsCard>
    </>
  );
};

export default Settings;
