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
          isPerAllowed={1}
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
  title: PropTypes.string,
  btntitle: PropTypes.string,
  centerValue: PropTypes.string,
  centerLabel: PropTypes.string,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  chartColors: PropTypes.arrayOf(PropTypes.string),
  modalOpen: PropTypes.func,
  open: PropTypes.bool,
  handleOpenChartModalDropDown: PropTypes.func,
  innerRadius: PropTypes.func,
  outerRadius: PropTypes.func,
};

export default EngagementRatio;
