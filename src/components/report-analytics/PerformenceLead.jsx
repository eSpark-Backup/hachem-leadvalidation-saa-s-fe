import PropTypes from 'prop-types';
import { TEXT_CONSTANTS } from '../../constants/components/reports/SupplierReports';
import {
  buttonStyle,
  cardContentStyle,
  performanceBoxStyle,
  simpleBoxStyle,
  typographyMainStyle,
  typographySubStyle,
} from '../../styles/components/report-analytics/SupplierReports';
import { Box, Button, CardContent, Typography } from '@mui/material';
import BarLineChart from '../charts/BarLineChart';
import { LEADS_CHART } from '../../constants/components/charts/LeadsPerformanceChart';
import { KeyboardArrowDown } from '@mui/icons-material';

const PerformenceLead = ({ open, modalOpen, handleOpenChartModalDropDown }) => {
  return (
    <CardContent sx={cardContentStyle}>
      <Box sx={{ ...simpleBoxStyle, flexDirection: 'column' }}>
        <Typography variant="h4" fontWeight="bold">
          {TEXT_CONSTANTS.leadsPerformance}
        </Typography>
        <Button
          sx={buttonStyle}
          onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
        >
          <Typography
            sx={{ fontWeight: 400, fontSize: '14px', color: '#4A5154' }}
          >
            {TEXT_CONSTANTS.thisMonth}
          </Typography>
          <KeyboardArrowDown sx={{ color: '#4A5154' }} />
        </Button>
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
};
export default PerformenceLead;
