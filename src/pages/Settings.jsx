import { Box, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PaymentForm from '../components/payment/PaymentForm';
import PersonalInfo from '../components/settings/PersonalInfo';
import RequestForSupplier from '../components/settings/RequestForSupplier';
import SettingsCard from '../components/settings/SettingsCard';
import LowCreditsText from '../components/payment/LowCreditsText';
import NotFound from './NotFound';

import {
  PAYMENT_DATA,
  PAYMENT_FORM_DATA,
} from '../constants/components/payment/Payment';
import { SETTINGS } from '../constants/components/settings/SettingsPage';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  LOW_CREDITS,
  SETTINGS_PATH,
} from '../constants/components/globals/SideBar';
import {
  CLIENT_INPUT_FIELDS,
  getProfileInputFields,
  SUPPLIER_COMPANY_INPUT_FIELDS,
  SUPPLIER_REQUEST_INPUT_FIELDS,
} from '../constants/components/settings/getProfileInputFields';
import { USER_TYPE } from '../utils/auth';

import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} from '../redux/slices/client/settings';

import {
  handleCancelRequest,
  handleSendRequest,
} from '../utils/components/settings/PersonalInfo';

const Settings = () => {
  const { pathname } = useLocation();
  const isClient = USER_TYPE === USER_TYPES.client;
  const isSupplier = USER_TYPE === USER_TYPES.supplier;
  const isAdmin = USER_TYPE === USER_TYPES.admin;

  const { formData } = PAYMENT_DATA || {};
  const inputFields = getProfileInputFields();

  const {
    data: settingsData,
    isLoading,
    isError,
    error,
  } = useGetSettingsQuery();
  const [updateSettings] = useUpdateSettingsMutation();

  const [personalInfoValues, setPersonalInfoValues] = useState({});
  const [supplierValues, setSupplierValues] = useState({});
  const [paymentInfoValues, setPaymentInfoValues] = useState({});
  const [clientValues, setClientValues] = useState({});

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentFormData, setPaymentFormData] = useState(PAYMENT_FORM_DATA);

  useEffect(() => {
    if (settingsData) {
      setSupplierValues(settingsData?.supplier || {});
      setPaymentInfoValues(settingsData?.paymentinfo || {});
      setClientValues(settingsData?.client || {});
      setPersonalInfoValues(settingsData?.person || {}); // Added this
    }
  }, [settingsData]);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    await handleSendRequest(paymentInfoValues, updateSettings);
  };

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

  if (isAdmin) {
    return <NotFound btnLink={ROUTES.dashboard} />;
  }

  return (
    <>
      {/* Personal Info for Client */}
      {isClient && (
        <SettingsCard
          title={SETTINGS?.person?.title}
          description={SETTINGS?.person?.description}
        >
          <PersonalInfo
            data={inputFields}
            values={personalInfoValues}
            setValues={setPersonalInfoValues}
            request={async () =>
              await handleSendRequest(personalInfoValues, updateSettings)
            }
            cancel={() => handleCancelRequest(setPersonalInfoValues)}
          />
        </SettingsCard>
      )}

      {/* Client request or supplier request */}
      {(isClient || isSupplier) && (
        <SettingsCard
          title={SETTINGS?.[USER_TYPE]?.title}
          description={SETTINGS?.[USER_TYPE]?.description}
        >
          <RequestForSupplier
            data={
              isClient ? CLIENT_INPUT_FIELDS : SUPPLIER_REQUEST_INPUT_FIELDS
            }
            setValues={setClientValues}
            values={clientValues}
            request={async () =>
              await handleSendRequest(clientValues, updateSettings)
            }
            cancel={() => handleCancelRequest(setClientValues)}
          />
        </SettingsCard>
      )}

      {/* Supplier's Company Info */}
      {isSupplier && (
        <SettingsCard
          title={SETTINGS?.Company_info?.title}
          description={SETTINGS?.Company_info?.description}
        >
          <RequestForSupplier
            data={SUPPLIER_COMPANY_INPUT_FIELDS}
            setValues={setSupplierValues}
            values={supplierValues}
            request={async () =>
              await handleSendRequest(supplierValues, updateSettings)
            }
            cancel={() => handleCancelRequest(setSupplierValues)}
          />
        </SettingsCard>
      )}

      {/* Client Payment Section */}
      {isClient && (
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
              handlePamentSubmit={handlePaymentSubmit}
              request={async () =>
                await handleSendRequest(paymentInfoValues, updateSettings)
              }
              cancel={() => handleCancelRequest(setPaymentInfoValues)}
              maxWidth="100%"
              border="0px"
              padding={{ xs: '0px', sm: 1 }}
              lowCreditText={
                pathname?.startsWith(SETTINGS_PATH) && LOW_CREDITS ? (
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
