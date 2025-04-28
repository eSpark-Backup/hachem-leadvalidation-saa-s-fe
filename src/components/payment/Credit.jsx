import { Box, Button, Stack, Typography } from '@mui/material';
import CreditCard from './CreditCard';
import CreditModal from './CreditModal';
import { useState } from 'react';
import CREDITS_DATA from '../../constants/components/payment/Credits';

const Credit = () => {
  const [showCreditModal, setShowCreditModal] = useState(false);
  const { title, description, buttonText, card, modalData } =
    CREDITS_DATA || {};

  return (
    <Box>
      <Stack direction={'column'} spacing={2.2}>
        <Typography
          variant="h1"
          color={'#1E293B'}
          maxWidth={{ xs: '95%' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <Typography
          variant="h2"
          color={'#09102B'}
          fontWeight={400}
          maxWidth={{ xs: '85%' }}
        >
          {description}
        </Typography>
        <Button
          onClick={() => setShowCreditModal(true)}
          variant="signupButton"
          sx={{
            width: { xs: '180px', md: '248px' },
            height: { xs: '54px', lg: '64px' },
            fontSize: { xs: '15px', md: '20px' },
          }}
        >
          {buttonText}
        </Button>
      </Stack>
      <Stack alignItems={'center'} py={4}>
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
