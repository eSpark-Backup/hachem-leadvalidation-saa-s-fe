import PropTypes from 'prop-types';
import { TEXT_CONSTANTS } from '../../constants/components/reports/SupplierReports';
import {
  cardContentStyle,
  performanceBoxStyle,
  simpleBoxStyle,
  typographyMainStyle,
  typographySubStyle,
} from '../../styles/components/report-analytics/SupplierReports';
import { Box, CardContent, Typography } from '@mui/material';
import BarLineChart from '../charts/BarLineChart';
import { LEADS_CHART } from '../../constants/components/charts/LeadsPerformanceChart';
import DropdownButton from './DropdownButton';
import { PERFORMENCE_LEAD } from '../../constants/components/report-analytics/PerformenceLead';

const PerformenceLead = ({
  open,
  modalOpen,
  handleOpenChartModalDropDown,
  anchorRef,
}) => {
  const onDropdownClick = () => {
    if (open === false) {
      modalOpen?.();
    } else {
      handleOpenChartModalDropDown?.();
    }
  };

  return (
    <CardContent sx={cardContentStyle}>
      <Box sx={{ ...simpleBoxStyle, flexDirection: 'column' }}>
        <Typography variant="h4" fontWeight="bold">
          {TEXT_CONSTANTS.leadsPerformance}
        </Typography>
        <DropdownButton
          onClick={onDropdownClick}
          label={TEXT_CONSTANTS.thisMonth}
          ref={anchorRef}
        />
      </Box>
      <BarLineChart
        data={LEADS_CHART}
        lineColor="#FFA500"
        barColor="#EAECFB"
        height={200}
      />
      <Box sx={performanceBoxStyle}>
        <Typography sx={{ ...typographyMainStyle, color: '#FFA500' }}>
          {PERFORMENCE_LEAD.leadImprovementValue}
        </Typography>
        <Typography sx={typographySubStyle}>
          {TEXT_CONSTANTS.leadsImprovement(
            PERFORMENCE_LEAD.leadImprovementValue,
            PERFORMENCE_LEAD.leadImprovementPeriod
          )}
        </Typography>
      </Box>
    </CardContent>
  );
};

PerformenceLead.propTypes = {
  open: PropTypes.bool,
  modalOpen: PropTypes.func,
  handleOpenChartModalDropDown: PropTypes.func,
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

PerformenceLead.defaultProps = {
  open: false,
  modalOpen: null,
  handleOpenChartModalDropDown: null,
  anchorRef: null,
};

export default PerformenceLead;
