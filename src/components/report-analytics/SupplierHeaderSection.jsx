import { Box, Typography } from '@mui/material';
import { headerBoxStyle } from '../../styles/components/report-analytics/SupplierReports';
import DropdownButton from './DropdownButton';
import PropTypes from 'prop-types';

const SupplierHeaderSection = ({ title, buttonText, onClick }) => (
  <Box sx={headerBoxStyle}>
    <Typography variant="h4" fontWeight="bold">
      {title}
    </Typography>
    <DropdownButton onClick={onClick} label={buttonText} />
  </Box>
);
SupplierHeaderSection.propTypes = {
  title: PropTypes.any,
  buttonText: PropTypes.any,
  onClick: PropTypes.any,
};

export default SupplierHeaderSection;
