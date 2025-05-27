import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import DropdownButton from '../../report-analytics/DropdownButton';
import DonutChartWithText from '../../charts/DonutChartWithText';

import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';

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
}) => {
  return (
    <CardContent sx={cardContentStyle}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <DropdownButton
          ref={anchorRef}
          onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
          label={btntitle}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py={5}
        gap={2}
      >
        <DonutChartWithText
          data={chartData}
          colors={chartColors}
          centerValue={centerValue}
          centerLabel={centerLabel}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          isPerAllowed={true}
        />
        <Box mt={2} display="flex" gap={2}>
          {chartData.map((item, index) => (
            <Box
              key={item.label || index}
              display="flex"
              alignItems="center"
              gap={0.5}
            >
              <Box
                width={10}
                height={10}
                bgcolor={chartColors[index] || '#ccc'}
                borderRadius="50%"
              />
              <Typography variant="caption">{item.key}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </CardContent>
  );
};

EngagementRatio.propTypes = {
  title: PropTypes.any,
  btntitle: PropTypes.any,
  centerValue: PropTypes.any,
  centerLabel: PropTypes.any,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.any,
      value: PropTypes.any,
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
