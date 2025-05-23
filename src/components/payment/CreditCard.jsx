import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { styles } from '../../styles/components/payments/CreditCard';

import { CREDIT_CARD } from '../../constants/components/payment/CreditCard';

const CreditCard = ({ data }) => {
  const { title, volume, minimumAmountText, volumeBoxStyle } = data || {};

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h2" sx={styles.title}>
          {title}
        </Typography>
      </Box>

      <Box sx={styles.contentBox}>
        {volume?.map((item, idx) => (
          <Box key={idx} sx={volumeBoxStyle}>
            <Stack sx={styles.volumeStack}>
              <Typography variant="h5" sx={styles.textOne}>
                {item?.vol}
              </Typography>
              <Typography variant="h6" sx={styles.textTwo}>
                {item?.duration}
              </Typography>
            </Stack>
            <Stack sx={styles.volumeStack}>
              <Typography variant="h5" sx={styles.textOne}>
                {item?.price}
              </Typography>
              <Typography variant="h6" sx={styles.textTwo}>
                {item?.text}
              </Typography>
            </Stack>
          </Box>
        ))}

        <Typography variant="h6" sx={styles.minimumAmountText}>
          {minimumAmountText + CREDIT_CARD.hundradsEuro}
        </Typography>
      </Box>
    </Box>
  );
};

CreditCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    volume: PropTypes.arrayOf(
      PropTypes.shape({
        vol: PropTypes.string,
        duration: PropTypes.string,
        price: PropTypes.string,
        text: PropTypes.string,
      })
    ),
    minimumAmountText: PropTypes.string,
    volumeBoxStyle: PropTypes.object,
  }).isRequired,
};

export default CreditCard;
