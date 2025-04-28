import { Box, Stack, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PaymentForm from './PaymentForm';
import { PAYMENT_DATA } from '../../constants/components/payment/Payment';

const Payment = () => {
  const { title, text, formData } = PAYMENT_DATA || {};

  return (
    <Box sx={{}}>
      <Stack direction={'column'} gap={1}>
        <Typography
          variant="body2"
          sx={{ display: 'flex', alignItems: 'center', textWrap: 'nowrap' }}
        >
          {title}
          <HelpOutlineIcon
            sx={{
              display: title ? 'flex' : 'none',
              color: '#94A3B8',
              fontSize: '26px',
              mx: 1,
            }}
          />
        </Typography>
        <Typography variant="h4" sx={{ color: '#475569', fontWeight: 400 }}>
          {text}
        </Typography>
      </Stack>
      <Stack gap={1} direction={'column'} my={3}>
        <PaymentForm data={formData} />
      </Stack>
    </Box>
  );
};

export default Payment;
