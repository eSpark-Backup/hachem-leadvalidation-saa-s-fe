import PropTypes from 'prop-types';
import { centerBoxStyle } from '../../styles/components/report-analytics/SupplierReports';
import { Box } from '@mui/material';

const CenteredBox = ({ children, py = 5 }) => {
  return <Box sx={centerBoxStyle(py)}>{children}</Box>;
};

CenteredBox.propTypes = {
  children: PropTypes.any.isRequired,
  py: PropTypes.any.isRequired,
};

export default CenteredBox;
