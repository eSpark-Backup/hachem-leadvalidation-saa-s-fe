import { Box, CardContent, Chip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../../report-analytics/DropdownButton';
import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';
import DonutChartWithText from '../../charts/DonutChartWithText';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FmoMonth = ({
  handleOpenChartModalDropDown,
  modalOpen,
  open,
  title,
  btnTitle,
  chartData,
  chartColors,
  clientValue,
  clientChange,
  clientColor,
  clientChangeDirection, // 'up' or 'down'
  supplierValue,
  supplierChange,
  supplierColor,
  innerRadius,
  outerRadius,
  centerValue,
  supplierChangeDirection, // 'up' or 'down'
}) => (
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
        label={btnTitle}
      />
    </Box>

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
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        centerValue={centerValue}
      />

      <Box
        mt={2}
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
            <Typography>Client</Typography>
          </Box>
          <Typography fontWeight="bold">{clientValue}</Typography>
          <Chip
            label={clientChange}
            color={clientChangeDirection === 'up' ? 'success' : 'error'}
            size="small"
            icon={
              clientChangeDirection === 'up' ? (
                <ArrowUpwardIcon fontSize="small" />
              ) : (
                <ArrowDownwardIcon fontSize="small" />
              )
            }
            sx={{ pl: 0.5 }}
          />
        </Box>

        {/* Supplier Box */}
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          sx={{
            textAlign: 'right',
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              width={10}
              height={10}
              bgcolor={supplierColor}
              borderRadius="50%"
            />
            <Typography>Supplier</Typography>
          </Box>
          <Typography fontWeight="bold">{supplierValue}</Typography>
          <Chip
            label={supplierChange}
            color={supplierChangeDirection === 'up' ? 'success' : 'error'}
            size="small"
            icon={
              supplierChangeDirection === 'up' ? (
                <ArrowUpwardIcon fontSize="small" />
              ) : (
                <ArrowDownwardIcon fontSize="small" />
              )
            }
            sx={{ pl: 0.5 }}
          />
        </Box>
      </Box>
    </Box>
  </CardContent>
);

FmoMonth.propTypes = {
  handleOpenChartModalDropDown: PropTypes.func,
  modalOpen: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  btnTitle: PropTypes.string,
  chartData: PropTypes.array,
  chartColors: PropTypes.array,
  clientValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  clientChange: PropTypes.string,
  clientColor: PropTypes.string,
  clientChangeDirection: PropTypes.oneOf(['up', 'down']),
  supplierValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  supplierChange: PropTypes.string,
  supplierColor: PropTypes.string,
  supplierChangeDirection: PropTypes.oneOf(['up', 'down']),
  innerRadius: PropTypes.any,
  outerRadius: PropTypes.any,
  centerValue: PropTypes.any,
};

export default FmoMonth;
