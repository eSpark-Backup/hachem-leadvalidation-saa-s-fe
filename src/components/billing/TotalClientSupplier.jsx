import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../report-analytics/DropdownButton';
import DonutChartWithText from '../charts/DonutChartWithText';

const TotalClientSupplier = ({
  open,
  modalOpen,
  handleOpenChartModalDropDown,
  title,
  dropdownLabel,
  chartData,
  chartColors,
  clientLabel,
  clientValue,
  clientColor,
  supplierLabel,
  supplierValue,
  supplierColor,
  cardStyle,
  centerValue,
}) => {
  return (
    <CardContent sx={cardStyle}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={'column'}
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <DropdownButton
          onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
          label={dropdownLabel}
        />
      </Box>

      {/* Chart + Legend */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        <DonutChartWithText
          data={chartData}
          colors={chartColors}
          width={200}
          height={200}
          innerRadius={70}
          outerRadius={80}
          dataKey={'value'}
          centerValue={centerValue}
          valueFontSize={'20px'}
          labelFontSize={'10px'}
          isPerAllowed={1}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          gap={2}
          flexWrap="wrap"
        >
          {/* Client Box */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                width={10}
                height={10}
                bgcolor={clientColor}
                borderRadius="50%"
              />
              <Typography>{clientLabel}</Typography>
            </Box>
            <Typography fontWeight="bold">{clientValue}</Typography>
          </Box>

          {/* Supplier Box */}
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            sx={{
              textAlign: 'end',
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                width={10}
                height={10}
                bgcolor={supplierColor}
                borderRadius="50%"
              />
              <Typography>{supplierLabel}</Typography>
            </Box>
            <Typography fontWeight="bold">{supplierValue}</Typography>
          </Box>
        </Box>
      </Box>
    </CardContent>
  );
};

TotalClientSupplier.propTypes = {
  open: PropTypes.bool,
  modalOpen: PropTypes.func.isRequired,
  handleOpenChartModalDropDown: PropTypes.func.isRequired,
  title: PropTypes.string,
  dropdownLabel: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartColors: PropTypes.array.isRequired,
  clientLabel: PropTypes.string,
  clientValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  clientColor: PropTypes.string,
  supplierLabel: PropTypes.string,
  supplierValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  supplierColor: PropTypes.string,
  cardStyle: PropTypes.object,
  centerValue: PropTypes.any,
};

export default TotalClientSupplier;
