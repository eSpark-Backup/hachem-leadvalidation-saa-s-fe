import { Box, Button, Stack, Typography } from '@mui/material';
import CreditCard from './CreditCard';
import CreditModal from './CreditModal';
import { useState } from 'react';
import CREDITS_DATA from '../../constants/components/payment/Credits';
import { styles } from '../../styles/components/payments/Credit';

const Credit = () => {
  const [showCreditModal, setShowCreditModal] = useState(false);
  const { card, modalData } = CREDITS_DATA || {};

  return (
    <Box>
      <Stack direction="column" spacing={2.2}>
        <Typography
          variant="h1"
          sx={styles.titleTypography}
          dangerouslySetInnerHTML={{ __html: CREDITS_DATA?.title || '' }}
        />

        <Typography variant="h2" sx={styles.descriptionTypography}>
          {CREDITS_DATA?.description || ''}
        </Typography>

        <Button
          onClick={() => setShowCreditModal(true)}
          variant="signupButton"
          sx={styles.button}
        >
          {CREDITS_DATA?.buttonText || ''}
        </Button>
      </Stack>

      <Stack sx={styles.cardStack}>
        <CreditCard data={card} />
      </Stack>

      <CreditModal
        open={showCreditModal}
        setOpen={setShowCreditModal}
        data={modalData}
      />
    </Box>
  );
};

export default Credit;
