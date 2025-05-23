import { Box, CardContent, Typography } from '@mui/material';
import DropdownButton from '../report-analytics/DropdownButton';
import DonutChart from '../charts/DonutChart';
import PropTypes from 'prop-types';
import RevenueTable from './RevenueTable';
import { styles } from '../../styles/components/billing/TopClientsByRevenue';

const TopClientsByRevenue = ({
  open,
  modalOpen,
  handleOpenChartModalDropDown,
  chartData,
  chartColors,
  cardStyle,
  title,
  dropdownLabel,
  tableHeader,
  anchorRef,
}) => (
  <CardContent sx={cardStyle}>
    <Box sx={styles.headerBox}>
      <Typography variant="h4" sx={styles.titleTypography}>
        {title}
      </Typography>
      <DropdownButton
        ref={anchorRef}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
        label={dropdownLabel}
      />
    </Box>

    <Box sx={styles.chartBox}>
      <DonutChart data={chartData} colors={chartColors} />
      <RevenueTable data={chartData} dot={chartColors} header={tableHeader} />
    </Box>
  </CardContent>
);

TopClientsByRevenue.propTypes = {
  open: PropTypes.bool,
  modalOpen: PropTypes.func,
  handleOpenChartModalDropDown: PropTypes.func,
  chartData: PropTypes.array,
  tableHeader: PropTypes.array,
  chartColors: PropTypes.array,
  cardStyle: PropTypes.object,
  title: PropTypes.string,
  anchorRef: PropTypes.any,
  dropdownLabel: PropTypes.string,
  boxItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      chipLabel: PropTypes.string,
      chipColor: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ]),
      direction: PropTypes.oneOf(['up', 'down']),
      tableHeader: PropTypes.any,
      tableData: PropTypes.any,
    })
  ),
};

export default TopClientsByRevenue;
