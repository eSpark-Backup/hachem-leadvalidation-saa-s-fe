import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  containerStyles,
  progressStyles,
  labelBoxStyles,
  labelTypographyStyles,
} from '../../styles/components/dashboard/CircularProgressWithLabel';
import { CIRCULAR_PROGRESS_WITH_LABEL } from '../../constants/components/dashboard/CircularProgressWithLabel';

const CircularProgressWithLabel = ({ value, color, isPerAllowed = false }) => (
  <Box sx={containerStyles}>
    <CircularProgress
      variant="determinate"
      value={value}
      size={100}
      thickness={5}
      sx={progressStyles(color)}
    />
    <Box sx={labelBoxStyles}>
      <Typography variant="h6" component="div" sx={labelTypographyStyles}>
        {`${value}${isPerAllowed ? CIRCULAR_PROGRESS_WITH_LABEL.percentSymbol : ''}`}
      </Typography>
    </Box>
  </Box>
);

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isPerAllowed: PropTypes.bool,
};

export default CircularProgressWithLabel;
