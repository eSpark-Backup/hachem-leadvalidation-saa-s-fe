import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../../report-analytics/DropdownButton';
import BarPipeChart from '../../charts/BarPipeChart';
import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';

const SupplierTotalLeads = ({
  chartData,
  title,
  btnTitle,
  modalOpen,
  validColor,
  rejectColor,
  handleOpenChartModalDropDown,
  open,
}) => (
  <CardContent sx={cardContentStyle}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography variant="h4" fontWeight="bold">
        {title || 'Supplier'}
      </Typography>
      <DropdownButton
        onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
        label={btnTitle || 'This Month'}
      />
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
        gap: 1,
      }}
    >
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
};

export default SupplierTotalLeads;
