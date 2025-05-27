import PropTypes from 'prop-types';

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

const LeadMonitoringHeaderButtons = ({
  buttonRef,
  onClick,
  setIsViewingHistory,
  isViewingHistory,
}) => {
  return (
    <Stack sx={leadMonitoringButtonStackStyles}>
      <Button
        sx={historyButtonStyles(isViewingHistory)}
        onClick={() => setIsViewingHistory(!isViewingHistory)}
      >
        {TABLE_STATIC_TEXTS.history}
      </Button>

      <Button
        ref={buttonRef}
        onClick={onClick}
        sx={monthButtonStyles}
        endIcon={<Box component={'img'} src={ICONS.gradientDropdown} />}
      >
        <span style={monthButtonSpanStyles}>{TABLE_STATIC_TEXTS.month}</span>
      </Button>
    </Stack>
  );
};

LeadMonitoringHeaderButtons.propTypes = {
  buttonRef: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  setIsViewingHistory: PropTypes.func.isRequired,
  isViewingHistory: PropTypes.bool.isRequired,
};

export default LeadMonitoringHeaderButtons;
