import dayjs from 'dayjs';

import { IconButton, Typography, Box } from '@mui/material';

import ToRight from '../../../assets/images/global/table-icons/to-right.svg';
import ToLeft from '../../../assets/images/global/table-icons/to-left.svg';

import {
  iconButtonStyles,
  monthHeadingStyles,
  montSelectStyles,
} from '../../../styles/components/globals/Table';

const MonthSelector = ({ currentMonth, onChange }) => {
  const safeMonth = currentMonth ? dayjs(currentMonth) : dayjs();

  return (
    <Box display="flex" alignItems="center" gap={'5px'} sx={montSelectStyles}>
      <IconButton onClick={() => onChange('prev')} sx={iconButtonStyles}>
        <img src={ToLeft} alt="left" />
      </IconButton>

      <Typography variant="subtitle1" sx={monthHeadingStyles}>
        {safeMonth.format('MMMM')}
      </Typography>

      <IconButton onClick={() => onChange('next')} sx={iconButtonStyles}>
        <img src={ToRight} alt="right" />
      </IconButton>
    </Box>
  );
};

export default MonthSelector;
