import { Box, Button, Stack } from '@mui/material';

import {
  ICONS,
  TABLE_STATIC_TEXTS,
} from '../../../constants/components/globals/Table';

import {
  historyButtonStyles,
  leadMonitoringButtonStackStyles,
  monthButtonSpanStyles,
  monthButtonStyles,
} from '../../../styles/components/globals/table/LeadMonitoringHeaderButtons';

const LeadMonitoringHeaderButtons = () => {
  return (
    <Stack sx={leadMonitoringButtonStackStyles}>
      <Button sx={historyButtonStyles}>{TABLE_STATIC_TEXTS.history}</Button>

      <Button
        sx={monthButtonStyles}
        endIcon={<Box component={'img'} src={ICONS.gradientDropdown} />}
      >
        <span style={monthButtonSpanStyles}>{TABLE_STATIC_TEXTS.month}</span>
      </Button>
    </Stack>
  );
};

export default LeadMonitoringHeaderButtons;
