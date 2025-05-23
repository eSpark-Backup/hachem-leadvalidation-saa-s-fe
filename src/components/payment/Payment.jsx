import { Box, Stack, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PaymentForm from './PaymentForm';
import { PAYMENT_DATA } from '../../constants/components/payment/Payment';
import { styles } from '../../styles/components/payments/Payment';

const Payment = () => {
  const { title, text, formData } = PAYMENT_DATA || {};

  return (
    <Box>
      <Stack direction="column" gap={1}>
        <Typography variant="body2" sx={styles.title}>
          {title}
          <HelpOutlineIcon
            sx={{ ...styles.icon, display: title ? 'flex' : 'none' }}
          />
        </Typography>
        <Typography variant="h4" sx={styles.subtitle}>
          {text}
        </Typography>
      </Stack>

      <Stack gap={1} direction="column" my={3}>
        <PaymentForm data={formData} />
      </Stack>
    </Box>
  );
};

export default Payment;
