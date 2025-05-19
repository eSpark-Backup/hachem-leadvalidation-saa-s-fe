import { Card, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import { cardStyles } from '../../styles/components/report-analytics/ClientReports';

const ClientCardWrapper = ({ children, sx = {} }) => (
  <Card sx={{ ...cardStyles, ...sx }}>
    <CardContent>{children}</CardContent>
  </Card>
);
ClientCardWrapper.propTypes = {
  sx: PropTypes.any,
  children: PropTypes.any,
};

export default ClientCardWrapper;
