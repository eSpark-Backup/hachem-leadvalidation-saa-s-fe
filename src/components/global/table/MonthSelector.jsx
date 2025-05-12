import PropTypes from 'prop-types';

import dayjs from 'dayjs';

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

const MonthSelector = ({ currentMonth, onChange, display = 'flex' }) => {
  const safeMonth = currentMonth ? dayjs(currentMonth) : dayjs();

  return (
    <Box sx={{ ...montSelectStyles, display }}>
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
