import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DonutChartWithImage from '../../charts/DonutChartWithImage';
import DropdownButton from '../../report-analytics/DropdownButton';
import { styles } from '../../../styles/components/dashboard/admin/ClientSupplierRatio';
import { CLIENT_SUPPLIER_RATIO } from '../../../constants/components/dashboard/ClientSupplierRatio';

const ClientSupplierRatio = ({
  title,
  btntitle,
  chartData,
  chartColors,
  centerImageUrl,
  clientValue,
  supplierValue,
  clientColor = '#4CAF50',
  supplierColor = '#B0BEC5',
  clientLegnedTitle,
  supplierLegnedTitle,
  modalOpen,
  isPerAllowed,
  handleOpenChartModalDropDown,
  open,
  anchorRef,
}) => {
  const onDropdownClick =
    open === false ? modalOpen : handleOpenChartModalDropDown;

  return (
    <CardContent sx={styles.cardContent}>
      <Box sx={styles.headerBox}>
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <DropdownButton
          onClick={onDropdownClick}
          label={btntitle || CLIENT_SUPPLIER_RATIO.defaultBtnTitle}
          ref={anchorRef}
        />
      </Box>

      <Box sx={styles.chartBox}>
        <DonutChartWithImage
          data={chartData}
          colors={chartColors}
          centerImageUrl={centerImageUrl}
        />
      </Box>

      <Box sx={styles.footerBox}>
        {/* Client Box */}
        <Box sx={styles.legendBox}>
          <Box sx={styles.legendTitleBox}>
            <Box sx={styles.colorDot(clientColor)} />
            <Typography>
              {clientLegnedTitle || CLIENT_SUPPLIER_RATIO.defaultClientLegend}
            </Typography>
          </Box>
          <Typography sx={styles.valueText}>
            {clientValue}
            {isPerAllowed ? '%' : ''}
          </Typography>
        </Box>

        {/* Supplier Box */}
        <Box sx={styles.legendBox}>
          <Box sx={styles.legendTitleBox}>
            <Box sx={styles.colorDot(supplierColor)} />
            <Typography>
              {supplierLegnedTitle ||
                CLIENT_SUPPLIER_RATIO.defaultSupplierLegend}
            </Typography>
          </Box>
          <Typography sx={styles.valueText}>{supplierValue}</Typography>
        </Box>
      </Box>
    </CardContent>
  );
};

ClientSupplierRatio.propTypes = {
  title: PropTypes.string.isRequired,
  btntitle: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartColors: PropTypes.array,
  centerImageUrl: PropTypes.string,
  clientValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  supplierValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  clientColor: PropTypes.string,
  supplierColor: PropTypes.string,
  clientLegnedTitle: PropTypes.string,
  supplierLegnedTitle: PropTypes.string,
  modalOpen: PropTypes.func.isRequired,
  isPerAllowed: PropTypes.bool,
  handleOpenChartModalDropDown: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default ClientSupplierRatio;
