import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

const ViewToggle = () => {
  const [view, setView] = useState('day');

  const handleChange = (event, newView) => {
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
        aria-label="View Toggle"
      >
        <ToggleButton value="week" aria-label="Week View">
          Week
        </ToggleButton>
        <ToggleButton value="day" aria-label="Day View">
          Day
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ViewToggle;
