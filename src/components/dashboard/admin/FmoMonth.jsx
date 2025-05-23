import { Box, CardContent, Chip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../../report-analytics/DropdownButton';
import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';
import DonutChartWithText from '../../charts/DonutChartWithText';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styles } from '../../../styles/components/dashboard/admin/FmoMonth';
import { FMO_MONTH } from '../../../constants/components/dashboard/FmoMonth';

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
  anchorRef,

  centerValue,
  supplierChangeDirection, // 'up' or 'down'
}) => (
  <CardContent sx={cardContentStyle}>
    <Box sx={styles.headerBox}>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <DropdownButton
        ref={anchorRef}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
        label={btnTitle}
      />
    </Box>

    <Box sx={styles.chartContainer}>
      <DonutChartWithText
        data={chartData}
        colors={chartColors}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        centerValue={centerValue}
      />

      <Box sx={styles.statsContainer}>
        {/* Client Box */}
        <Box sx={styles.statBox}>
          <Box sx={styles.labelRow}>
            <Box sx={{ ...styles.colorDot, bgcolor: clientColor }} />
            <Typography>{FMO_MONTH.clientLabel}</Typography>
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
            sx={styles.chipIconPadding}
          />
        </Box>

        {/* Supplier Box */}
        <Box sx={{ ...styles.statBox, ...styles.statBoxRightAligned }}>
          <Box sx={styles.labelRow}>
            <Box sx={{ ...styles.colorDot, bgcolor: supplierColor }} />
            <Typography>{FMO_MONTH.supplierLabel}</Typography>
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
            sx={styles.chipIconPadding}
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
  anchorRef: PropTypes.any,
};

export default FmoMonth;
