import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import renderTable from './RenderTable';
import { styles } from '../../styles/components/billing/ProfitLossOverview';
import { PROFIT_LOSS_OVERVIEW } from '../../constants/components/billing/ProfitLossOverview';

const ProfitLossOverview = ({ data, title }) => (
  <Box sx={styles.container}>
    <Typography variant="h5" sx={styles.title} mx="auto">
      {title}
    </Typography>
    <Box sx={styles.tablesWrapper}>
      {renderTable(PROFIT_LOSS_OVERVIEW.lastMonth, data.lastMonth)}
      {renderTable(PROFIT_LOSS_OVERVIEW.yearToDate, data.yearToDate)}
    </Box>
  </Box>
);

ProfitLossOverview.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    lastMonth: PropTypes.arrayOf(PropTypes.object).isRequired,
    yearToDate: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ProfitLossOverview;
