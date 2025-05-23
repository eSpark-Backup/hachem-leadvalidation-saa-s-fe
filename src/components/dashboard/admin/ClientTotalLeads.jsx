import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DropdownButton from '../../report-analytics/DropdownButton';
import BarPipeChart from '../../charts/BarPipeChart';
import { cardContentStyle } from '../../../styles/components/report-analytics/SupplierReports';
import { styles } from '../../../styles/components/dashboard/admin/ClientTotalLeads';

const ClientTotalLeads = ({
  chartData,
  title,
  btnTitle,
  modalOpen,
  open,
  anchorRef,
  handleOpenChartModalDropDown,
}) => {
  const handleClick = () => {
    if (open === false) {
      modalOpen();
    } else {
      handleOpenChartModalDropDown();
    }
  };

  return (
    <CardContent sx={cardContentStyle}>
      <Box sx={styles.headerBox}>
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <DropdownButton
          ref={anchorRef}
          onClick={handleClick}
          label={btnTitle}
        />
      </Box>
      <Box sx={styles.chartContainer}>
        <BarPipeChart data={chartData} />
      </Box>
    </CardContent>
  );
};

ClientTotalLeads.propTypes = {
  chartData: PropTypes.any,
  title: PropTypes.any,
  btnTitle: PropTypes.any,
  modalOpen: PropTypes.func,
  open: PropTypes.bool,
  handleOpenChartModalDropDown: PropTypes.func,
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default ClientTotalLeads;
