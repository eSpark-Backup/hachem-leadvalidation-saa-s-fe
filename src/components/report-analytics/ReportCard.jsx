import { Box, CardContent, Typography } from '@mui/material';
import DropdownButton from './DropdownButton';
import PropTypes from 'prop-types';

const ReportCard = ({
  title,
  value,
  chartComponent: ChartComponent,
  chartProps,
  label,
  open,
  handleOpenChartModalDropDown,
  modalOpen,
}) => (
  <CardContent>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          textTransform="uppercase"
        >
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </Box>
      <DropdownButton
        onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
        label={label}
      />
    </Box>
    <Box>
      <ChartComponent {...chartProps} />
    </Box>
  </CardContent>
);
ReportCard.propTypes = {
  title: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  chartComponent: PropTypes.any.isRequired,
  chartProps: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  handleOpenChartModalDropDown: PropTypes.any,
  modalOpen: PropTypes.any,
  open: PropTypes.any,
};

export default ReportCard;
