import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CreditCard = ({ data }) => {
  const { title, volume, minimumAmountText, volumeBoxStyle } = data || {};

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: '415px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '0px 0px 11px 11px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          minHeight: '86px',
          backgroundColor: '#126D30',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '11px 11px 0px 0px',
          p: 2.5,
        }}
      >
        <Typography
          variant="h2"
          color={'#fff'}
          fontWeight={700}
          textAlign={{ xs: 'center' }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          minHeight: '275px',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #0000006B',
          borderRadius: '0px 0px 11px 11px',
          p: 2,
          gap: 2,
        }}
      >
        {volume?.map((item, eachIndex) => (
          <Box key={eachIndex} sx={volumeBoxStyle}>
            <Stack p={1} spacing={0.4}>
              <Typography variant="h5" color={'#09102B'} fontWeight={700}>
                {item?.vol}
              </Typography>
              <Typography variant="h6" color={'#09102B'} fontWeight={400}>
                {item?.duration}
              </Typography>
            </Stack>
            <Stack p={1} spacing={0.4}>
              <Typography variant="h5" color={'#09102B'} fontWeight={700}>
                {item?.price}
              </Typography>
              <Typography variant="h6" color={'#09102B'} fontWeight={400}>
                {item?.text}
              </Typography>
            </Stack>
          </Box>
        ))}
        <Typography
          variant="h6"
          color={'#09102B'}
          fontSize={'12px'}
          fontWeight={400}
        >
          {minimumAmountText + '€100'}
        </Typography>
      </Box>
    </Box>
  );
};

CreditCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CreditCard;
