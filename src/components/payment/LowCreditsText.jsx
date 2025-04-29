import { Box, Typography } from '@mui/material';
import { LOW_CREDITS_DATA } from '../../constants/components/payment/Payment';

const LowCreditsText = () => {
  const { title, style } = LOW_CREDITS_DATA || {};
  const { mainBoxStyle, titleStyle, circleStyle } = style || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={circleStyle} />
      <Typography sx={titleStyle}>{title}</Typography>
    </Box>
  );
};

export default LowCreditsText;
