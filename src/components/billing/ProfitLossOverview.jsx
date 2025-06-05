import { Box, Typography } from '@mui/material';
import renderTable from './renderTable';
import PropTypes from 'prop-types';
import {
  containerStyle,
  titleStyle,
  tablesWrapperStyle,
} from '../../styles/components/billing/ProfitLossOverview';

const ProfitLossOverview = ({ data, title }) => {
  return (
    <Box sx={containerStyle}>
      <Typography variant="h5" sx={titleStyle}>
        {title}
      </Typography>
      <Box sx={tablesWrapperStyle}>
        {renderTable('Last Month', data.lastMonth)}
        {renderTable('This year to date', data.yearToDate)}
      </Box>
    </Box>
  );
};

ProfitLossOverview.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    lastMonth: PropTypes.array.isRequired,
    yearToDate: PropTypes.array.isRequired,
  }).isRequired,
};

export default ProfitLossOverview;
