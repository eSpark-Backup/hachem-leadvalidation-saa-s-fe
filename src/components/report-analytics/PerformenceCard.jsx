import { Box, Button, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  buttonStyle,
  cardContentStyle,
  performanceBoxStyle,
  simpleBoxStyle,
  typographyMainStyle,
  typographySubStyle,
} from '../../styles/components/report-analytics/SupplierReports';
import { TEXT_CONSTANTS } from '../../constants/components/reports/SupplierReports';
import { KeyboardArrowDown } from '@mui/icons-material';

const PerformanceCard = ({
  title,
  chart: ChartComponent,
  chartProps,
  percent,
  percentColor,
  improvementText,
  modalOpen,
  open,
  handleOpenChartModalDropDown,
}) => (
  <CardContent sx={cardContentStyle}>
    <Box sx={simpleBoxStyle}>
      <Typography variant="h4" fontWeight="bold">
        {title}
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

    <ChartComponent {...chartProps} />

    <Box sx={performanceBoxStyle}>
      <Typography sx={{ ...typographyMainStyle, color: percentColor }}>
        {percent}
      </Typography>
      <Typography sx={typographySubStyle}>{improvementText}</Typography>
    </Box>
  </CardContent>
);

PerformanceCard.propTypes = {
  title: PropTypes.any.isRequired,
  chart: PropTypes.any.isRequired,
  chartProps: PropTypes.any.isRequired,
  percent: PropTypes.any.isRequired,
  percentColor: PropTypes.any.isRequired,
  improvementText: PropTypes.any.isRequired,
  handleOpenChartModalDropDown: PropTypes.any,
  modalOpen: PropTypes.any,
  open: PropTypes.any,
};
export default PerformanceCard;
