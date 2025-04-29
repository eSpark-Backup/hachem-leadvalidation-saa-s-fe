import { Box } from '@mui/material';
import PaymentForm from '../components/payment/PaymentForm';
import PersonalInfo from '../components/settings/PersonalInfo';
import RequestForSupplier from '../components/settings/RequestForSupplier';
import SettingsCard from '../components/settings/SettingsCard';
import { PAYMENT_DATA } from '../constants/components/payment/Payment';
import { SETTINGS } from '../constants/components/settings/SettingsPage';
import LowCreditsText from '../components/payment/LowCreditsText';
import { USER_TYPES } from '../constants/components/globals/Auth';
import {
  LOW_CREDITS,
  SETTINGS_PATH,
} from '../constants/components/globals/SideBar';
import { useLocation } from 'react-router-dom';

const Settings = () => {
  const { formData } = PAYMENT_DATA || {};
  const userType = localStorage?.getItem('userType');
  const client = USER_TYPES?.client;
  const { pathname } = useLocation();

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
            padding={{ xs: '0px', sm: 1 }}
            lowCreditText={
              pathname?.startsWith(SETTINGS_PATH) &&
              userType === client &&
              LOW_CREDITS ? (
                <LowCreditsText />
              ) : null
            }
          />
        </Box>
      </SettingsCard>
    </>
  );
};

export default Settings;
