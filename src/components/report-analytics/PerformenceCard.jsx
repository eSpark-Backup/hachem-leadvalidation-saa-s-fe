import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  cardContentStyle,
  performanceBoxStyle,
  simpleBoxStyle,
  typographyMainStyle,
  typographySubStyle,
} from '../../styles/components/report-analytics/SupplierReports';
import { TEXT_CONSTANTS } from '../../constants/components/reports/SupplierReports';
import DropdownButton from './DropdownButton';

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
  anchorRef,
}) => (
  <CardContent sx={cardContentStyle}>
    <Box sx={simpleBoxStyle}>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <DropdownButton
        onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
        label={TEXT_CONSTANTS.thisMonth}
        ref={anchorRef}
      />
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
  anchorRef: PropTypes.any,
};

export default PerformanceCard;
