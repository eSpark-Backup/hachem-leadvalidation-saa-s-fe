import { Box, Typography } from '@mui/material';
import { headerBoxStyle } from '../../styles/components/report-analytics/SupplierReports';
import DropdownButton from './DropdownButton';
import PropTypes from 'prop-types';

const SupplierHeaderSection = ({ title, buttonText, onClick, anchorRef }) => (
  <Box sx={headerBoxStyle}>
    <Typography variant="h4" fontWeight="bold">
      {title}
    </Typography>
    <DropdownButton onClick={onClick} label={buttonText} ref={anchorRef} />
  </Box>
);
SupplierHeaderSection.propTypes = {
  title: PropTypes.any,
  buttonText: PropTypes.any,
  onClick: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default SupplierHeaderSection;
