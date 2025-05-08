import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../../report-analytics/DropdownButton';
import BarPipeChart from '../../charts/BarPipeChart';
import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';

const ClientTotalLeads = ({
  chartData,
  title,
  btnTitle,
  modalOpen,
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
        {title}
      </Typography>
      <DropdownButton
        onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
        label={btnTitle}
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
      <BarPipeChart data={chartData} />
    </Box>
  </CardContent>
);
ClientTotalLeads.propTypes = {
  handleOpenChartModalDropDown: PropTypes.any,
  chartData: PropTypes.any,
  title: PropTypes.any,
  btnTitle: PropTypes.any,
  modalOpen: PropTypes.any,
  open: PropTypes.any,
};

export default ClientTotalLeads;
