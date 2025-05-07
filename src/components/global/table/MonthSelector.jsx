import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { IconButton, Typography, Box } from '@mui/material';

import {
  ALT_ATTRIBUTE,
  ICONS,
} from '../../../constants/components/globals/Table';

import {
  iconButtonStyles,
  monthHeadingStyles,
  montSelectStyles,
} from '../../../styles/components/globals/table/MonthSelector';

const MonthSelector = ({ currentMonth, onChange }) => {
  const safeMonth = currentMonth ? dayjs(currentMonth) : dayjs();

  return (
    <Box display="flex" alignItems="center" gap={'5px'} sx={montSelectStyles}>
      <IconButton onClick={() => onChange('prev')} sx={iconButtonStyles}>
        <img src={ICONS.smallLeftArrow} alt={ALT_ATTRIBUTE.left} />
      </IconButton>

      <Typography variant="subtitle1" sx={monthHeadingStyles}>
        {safeMonth.format('MMMM')}
      </Typography>

      <IconButton onClick={() => onChange('next')} sx={iconButtonStyles}>
        <img src={ICONS.smallRightArrow} alt={ALT_ATTRIBUTE.right} />
      </IconButton>
    </Box>
  );
};

MonthSelector.propTypes = {
  currentMonth: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MonthSelector;
