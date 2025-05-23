import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { VIEW_TOGGLE } from '../../../constants/components/dashboard/viewToggle';

const ViewToggle = () => {
  const [view, setView] = useState('day');

  const handleChange = (_, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <Box>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleChange}
        size="small"
        aria-label={VIEW_TOGGLE.ariaLabel}
      >
        <ToggleButton value="week" aria-label={VIEW_TOGGLE.weekLabel}>
          {VIEW_TOGGLE.weekText}
        </ToggleButton>
        <ToggleButton value="day" aria-label={VIEW_TOGGLE.dayLabel}>
          {VIEW_TOGGLE.dayText}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ViewToggle;
