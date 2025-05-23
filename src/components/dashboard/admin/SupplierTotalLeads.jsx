import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../../report-analytics/DropdownButton';
import BarPipeChart from '../../charts/BarPipeChart';
import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';
import { SUPPLIER_TOTAL_LEADS } from '../../../constants/components/dashboard/SupplierTotalLeads';
import { styles } from '../../../styles/components/dashboard/admin/SupplierTotalLeads';

const SupplierTotalLeads = ({
  chartData,
  title,
  btnTitle,
  modalOpen,
  validColor,
  rejectColor,
  handleOpenChartModalDropDown,
  open,
  anchorRef,
}) => (
  <CardContent sx={cardContentStyle}>
    <Box sx={styles.headerBox}>
      <Typography variant="h4" fontWeight="bold">
        {title || SUPPLIER_TOTAL_LEADS.defaultTitle}
      </Typography>
      <DropdownButton
        ref={anchorRef}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
        label={btnTitle || SUPPLIER_TOTAL_LEADS.defaultBtnTitle}
      />
    </Box>
    <Box sx={styles.chartWrapper}>
      <BarPipeChart
        data={chartData}
        validColor={validColor}
        rejectColor={rejectColor}
      />
    </Box>
  </CardContent>
);

SupplierTotalLeads.propTypes = {
  handleOpenChartModalDropDown: PropTypes.any,
  chartData: PropTypes.any,
  title: PropTypes.any,
  btnTitle: PropTypes.any,
  modalOpen: PropTypes.any,
  open: PropTypes.any,
  validColor: PropTypes.any,
  rejectColor: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default SupplierTotalLeads;
