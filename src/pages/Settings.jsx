import { Box } from '@mui/material';
import PaymentForm from '../components/payment/PaymentForm';
import PersonalInfo from '../components/settings/PersonalInfo';
import RequestForSupplier from '../components/settings/RequestForSupplier';
import SettingsCard from '../components/settings/SettingsCard';
import { PAYMENT_DATA } from '../constants/components/payment/Payment';
import { SETTINGS } from '../constants/components/settings/SettingsPage';
import LowCreditsText from '../components/payment/LowCreditsText';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  LOW_CREDITS,
  SETTINGS_PATH,
} from '../constants/components/globals/SideBar';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CLIENT_INPUT_FIELDS,
  SUPPLIER_COMPANY_INPUT_FIELDS,
  SUPPLIER_REQUEST_INPUT_FIELDS,
} from '../constants/components/settings/getProfileInputFields';
import { USER_TYPE } from '../utils/auth';
import { useEffect } from 'react';

const Settings = () => {
  const { formData } = PAYMENT_DATA || {};

  const userType = localStorage?.getItem('userType');

  const client = USER_TYPES?.client;

  const supplier = USER_TYPES?.supplier;

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE == USER_TYPES.admin) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  const PaymentBoxStyles = { width: '100%' };

  if (USER_TYPE == USER_TYPES.admin) return null;

  return (
    <>
      {USER_TYPE === USER_TYPES.client && (
        <SettingsCard
          title={SETTINGS?.person?.title}
          description={SETTINGS?.person?.description}
        >
          <PersonalInfo />
        </SettingsCard>
      )}
      {USER_TYPE === USER_TYPES.client ||
        (USER_TYPE === USER_TYPES.client && (
          <SettingsCard
            title={SETTINGS?.[userType]?.title}
            description={SETTINGS?.[userType]?.description}
          >
            <RequestForSupplier
              data={
                userType?.startsWith(client)
                  ? CLIENT_INPUT_FIELDS
                  : SUPPLIER_REQUEST_INPUT_FIELDS
              }
            />
          </SettingsCard>
        ))}

      {USER_TYPE === USER_TYPES.supplier && (
        <SettingsCard
          title={SETTINGS?.Company_info?.title}
          description={SETTINGS?.Company_info?.description}
        >
          <RequestForSupplier
            userType={userType}
            client={client}
            supplier={supplier}
            data={SUPPLIER_COMPANY_INPUT_FIELDS}
          />
        </SettingsCard>
      )}

      {USER_TYPE === USER_TYPES.client && (
        <SettingsCard
          title={SETTINGS?.payment?.title}
          description={SETTINGS?.payment?.description}
          toolToop={SETTINGS?.payment?.tooltip}
        >
          <Box sx={PaymentBoxStyles}>
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
      )}
    </>
  );
};

export default Settings;
