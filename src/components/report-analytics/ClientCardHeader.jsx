import { Box, Typography } from '@mui/material';
import DropdownButton from './DropdownButton';
import PropTypes from 'prop-types';
import {
  headerBoxStyles,
  headerBoxTitleStyles,
} from '../../styles/components/report-analytics/ClientReports';

const ClientCardHeader = ({ title, label, onClick, anchorRef }) => (
  <Box sx={headerBoxStyles}>
    <Box>
      <Typography variant="h4" sx={headerBoxTitleStyles}>
        {title}
      </Typography>
    </Box>
    <DropdownButton onClick={onClick} label={label} ref={anchorRef} />
  </Box>
);

ClientCardHeader.propTypes = {
  title: PropTypes.any,
  label: PropTypes.any,
  onClick: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default ClientCardHeader;
