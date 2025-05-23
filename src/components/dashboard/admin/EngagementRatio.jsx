import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import DropdownButton from '../../report-analytics/DropdownButton';
import DonutChartWithText from '../../charts/DonutChartWithText';

import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';
import { styles } from '../../../styles/components/dashboard/admin/EngagementRatio';

const EngagementRatio = ({
  title,
  btntitle,
  chartData,
  chartColors,
  modalOpen,
  centerValue,
  centerLabel,
  open,
  handleOpenChartModalDropDown,
  innerRadius,
  outerRadius,
  anchorRef,
}) => (
  <CardContent sx={cardContentStyle}>
    <Box sx={styles.headerBox}>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <DropdownButton
        ref={anchorRef}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
        label={btntitle}
      />
    </Box>

    <Box sx={styles.chartContainer}>
      <DonutChartWithText
        data={chartData}
        colors={chartColors}
        centerValue={centerValue}
        centerLabel={centerLabel}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        isPerAllowed={true}
      />
      <Box sx={styles.legendBox}>
        {chartData.map((item, index) => (
          <Box key={item.label || index} sx={styles.legendItem}>
            <Box
              sx={{
                ...styles.colorDot,
                bgcolor: chartColors[index] || '#ccc',
              }}
            />
            <Typography variant="caption">{item.key}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </CardContent>
);

EngagementRatio.propTypes = {
  title: PropTypes.any,
  btntitle: PropTypes.any,
  centerValue: PropTypes.any,
  centerLabel: PropTypes.any,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.any,
      value: PropTypes.any,
      key: PropTypes.any, // added to match usage in legend
    })
  ),
  chartColors: PropTypes.arrayOf(PropTypes.any),
  modalOpen: PropTypes.any,
  open: PropTypes.bool,
  handleOpenChartModalDropDown: PropTypes.any,
  innerRadius: PropTypes.any,
  outerRadius: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default EngagementRatio;
