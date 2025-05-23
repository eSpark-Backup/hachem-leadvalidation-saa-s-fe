import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../report-analytics/DropdownButton';
import DonutChartWithText from '../charts/DonutChartWithText';
import { TOTAL_CLIENT_SUPPLIER } from '../../constants/components/billing/TotalClientSupplier';
import { styles } from '../../styles/components/billing/TotalClientSupplier';

const TotalClientSupplier = ({
  open,
  modalOpen,
  handleOpenChartModalDropDown,
  title,
  dropdownLabel,
  chartData,
  chartColors,
  clientLabel = TOTAL_CLIENT_SUPPLIER.clientLabelDefault,
  clientValue,
  clientColor,
  supplierLabel = TOTAL_CLIENT_SUPPLIER.supplierLabelDefault,
  supplierValue,
  supplierColor,
  cardStyle,
  centerValue,
  anchorRef,
}) => (
  <CardContent sx={styles.cardContent(cardStyle)}>
    <Box sx={styles.headerBox}>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <DropdownButton
        ref={anchorRef}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
        label={dropdownLabel}
      />
    </Box>

    <Box sx={styles.chartWrapper}>
      <DonutChartWithText
        data={chartData}
        colors={chartColors}
        width={200}
        height={200}
        innerRadius={70}
        outerRadius={80}
        dataKey="value"
        centerValue={centerValue}
        valueFontSize="20px"
        labelFontSize="10px"
        isPerAllowed
      />

      <Box sx={styles.chartLegendWrapper}>
        <Box sx={styles.clientBox}>
          <Box sx={styles.legendItem}>
            <Box sx={styles.colorCircle(clientColor)} />
            <Typography>{clientLabel}</Typography>
          </Box>
          <Typography fontWeight="bold">{clientValue}</Typography>
        </Box>

        <Box sx={styles.supplierBox}>
          <Box sx={styles.legendItem}>
            <Box sx={styles.colorCircle(supplierColor)} />
            <Typography>{supplierLabel}</Typography>
          </Box>
          <Typography fontWeight="bold">{supplierValue}</Typography>
        </Box>
      </Box>
    </Box>
  </CardContent>
);

TotalClientSupplier.propTypes = {
  open: PropTypes.bool,
  modalOpen: PropTypes.func.isRequired,
  handleOpenChartModalDropDown: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dropdownLabel: PropTypes.string.isRequired,
  chartData: PropTypes.array.isRequired,
  chartColors: PropTypes.array.isRequired,
  clientLabel: PropTypes.string,
  clientValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  clientColor: PropTypes.string.isRequired,
  supplierLabel: PropTypes.string,
  supplierValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  supplierColor: PropTypes.string.isRequired,
  cardStyle: PropTypes.object,
  centerValue: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default TotalClientSupplier;
