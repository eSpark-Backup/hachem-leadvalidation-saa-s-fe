import { Box, CircularProgress } from '@mui/material';
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
import { useLocation } from 'react-router-dom';
import {
  CLIENT_INPUT_FIELDS,
  getProfileInputFields,
  SUPPLIER_COMPANY_INPUT_FIELDS,
  SUPPLIER_REQUEST_INPUT_FIELDS,
} from '../constants/components/settings/getProfileInputFields';
import NotFound from './NotFound';
import { useState } from 'react';
import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} from '../redux/slices/client/settings';
import {
  handleCancelRequest,
  handleSendRequest,
} from '../utils/components/settings/PersonalInfo';

const inputFields = getProfileInputFields();

const Settings = () => {
  const { formData } = PAYMENT_DATA || {};
  const userType = localStorage?.getItem('userType');
  const client = USER_TYPES?.client;
  const supplier = USER_TYPES?.supplier;
  const { pathname } = useLocation(); // State to manage supplier values
  // State to manage personal info values
  const [personalInfoValues, setPersonalInfoValues] = useState({});

  // State to manage payment method and form data
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentFormData, setPaymentFormData] = useState({
    payout: false,
    new_payment: false,
    credit_card_number: '',
    card_holder_name: '',
    date: '',
    country: '',
    cvv: '',
  });
  // Fetch settings data
  const {
    data: settingsData,
    isLoading,
    isError,
    error,
  } = useGetSettingsQuery();
  const [supplierValues, setSupplierValues] = useState(
    settingsData?.supplier || {}
  );
  const [clientValues, setClientValues] = useState(settingsData?.client || {});

  const [updateSettings] = useUpdateSettingsMutation();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <p>Error loading settings: {error?.data?.message || 'Unknown error'}</p>
      </Box>
    );
  }

  return (
    <>
      {userType === client && (
        <SettingsCard
          title={SETTINGS?.person?.title}
          description={SETTINGS?.person?.description}
        >
          <PersonalInfo
            data={inputFields}
            values={personalInfoValues}
            setValues={setPersonalInfoValues}
            request={() => handleSendRequest(personalInfoValues)}
            cancel={() => handleCancelRequest(setPersonalInfoValues)}
          />
        </SettingsCard>
      )}

      {(userType === client || userType === client) && (
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
            setValues={setClientValues}
            values={clientValues}
            request={() => handleSendRequest(clientValues)}
            cancel={() => handleCancelRequest(setClientValues)}
          />
        </SettingsCard>
      )}

      {userType === supplier && (
        <SettingsCard
          title={SETTINGS?.Company_info?.title}
          description={SETTINGS?.Company_info?.description}
        >
          <RequestForSupplier
            data={SUPPLIER_COMPANY_INPUT_FIELDS}
            setValues={setSupplierValues}
            values={supplierValues}
            request={() => handleSendRequest(supplierValues)}
            cancel={() => handleCancelRequest(setSupplierValues)}
          />
        </SettingsCard>
      )}

      {userType === client && (
        <SettingsCard
          title={SETTINGS?.payment?.title}
          description={SETTINGS?.payment?.description}
          toolToop={SETTINGS?.payment?.tooltip}
        >
          <Box sx={{ width: '100%' }}>
            <PaymentForm
              data={formData}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              paymentFormData={paymentFormData}
              setPaymentFormData={setPaymentFormData}
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

      {userType === USER_TYPES.admin && <NotFound btnLink={ROUTES.dashboard} />}
    </>
  );
};

export default Settings;
