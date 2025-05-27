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

const PerformenceLead = ({
  open,
  modalOpen,
  handleOpenChartModalDropDown,
  anchorRef,
}) => {
  return (
    <CardContent sx={cardContentStyle}>
      <Box sx={{ ...simpleBoxStyle, flexDirection: 'column' }}>
        <Typography variant="h4" fontWeight="bold">
          {TEXT_CONSTANTS.leadsPerformance}
        </Typography>
        <DropdownButton
          onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
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
          {'30%'}
        </Typography>
        <Typography sx={typographySubStyle}>
          {TEXT_CONSTANTS.leadsImprovement('30%', 'last month')}
        </Typography>
      </Box>
    </CardContent>
  );
};
PerformenceLead.propTypes = {
  open: PropTypes.any,
  modalOpen: PropTypes.any,
  handleOpenChartModalDropDown: PropTypes.any,
  anchorRef: PropTypes.any,
};
export default PerformenceLead;
