import { Box, Typography } from '@mui/material';
import DropdownButton from './DropdownButton';
import PropTypes from 'prop-types';
import { headerBoxStyles } from '../../styles/components/report-analytics/ClientReports';

const ClientCardHeader = ({ title, label, onClick }) => (
  <Box sx={headerBoxStyles}>
    <Box>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
    </Box>
    <DropdownButton onClick={onClick} label={label} />
  </Box>
);

ClientCardHeader.propTypes = {
  title: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
};
export default ClientCardHeader;
