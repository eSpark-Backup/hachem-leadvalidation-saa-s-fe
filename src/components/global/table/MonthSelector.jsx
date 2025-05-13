import PropTypes from 'prop-types';

import dayjs from 'dayjs';

import { IconButton, Typography, Box } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
  iconButtonStyles,
  monthHeadingStyles,
  montSelectStyles,
} from '../../../styles/components/globals/table/MonthSelector';

const MonthSelector = ({ currentMonth, onChange, display = 'flex' }) => {
  const safeMonth = currentMonth ? dayjs(currentMonth) : dayjs();

  return (
    <Box sx={{ ...montSelectStyles, display }}>
      <IconButton onClick={() => onChange('prev')} sx={iconButtonStyles}>
        <ArrowLeftIcon />
      </IconButton>

      <Typography variant="subtitle1" sx={monthHeadingStyles}>
        {safeMonth.format('MMMM')}
      </Typography>

      <IconButton onClick={() => onChange('next')} sx={iconButtonStyles}>
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
};

MonthSelector.propTypes = {
  currentMonth: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MonthSelector;
