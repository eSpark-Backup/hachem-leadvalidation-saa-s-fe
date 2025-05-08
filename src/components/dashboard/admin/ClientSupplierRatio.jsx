import { Box, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import DonutChartWithImage from '../../charts/DonutChartWithImage';
import DropdownButton from '../../report-analytics/DropdownButton';

const ClientSupplierRatio = ({
  title,
  btntitle,
  chartData,
  chartColors,
  centerImageUrl,
  clientValue,
  supplierValue,
  clientColor,
  supplierColor,
  clientLegnedTitle,
  supplierLegnedTitle,
  modalOpen,
  isPerAllowed,
  handleOpenChartModalDropDown,
  open,
}) => (
  <CardContent sx={{ p: 2 }}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <DropdownButton
        onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
        label={btntitle || 'This Month'}
      />
    </Box>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={4}
    >
      <DonutChartWithImage
        data={chartData}
        colors={chartColors}
        centerImageUrl={centerImageUrl}
      />
    </Box>

    <Box
      mt={5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap={2}
      flexWrap="wrap"
    >
      {/* Client Box */}
      <Box display="flex" flexDirection="column" gap={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            width={10}
            height={10}
            bgcolor={clientColor || '#4CAF50'}
            borderRadius="50%"
          />
          <Typography>{clientLegnedTitle || 'Client'}</Typography>
        </Box>
        <Typography fontWeight="bold">
          {clientValue}
          {isPerAllowed ? '%' : ''}
        </Typography>
      </Box>

      {/* Supplier Box */}
      <Box display="flex" flexDirection="column" gap={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            width={10}
            height={10}
            bgcolor={supplierColor || '#B0BEC5'}
            borderRadius="50%"
          />
          <Typography>{supplierLegnedTitle || 'Supplier'}</Typography>
        </Box>
        <Typography fontWeight="bold">{supplierValue}</Typography>
      </Box>
    </Box>
  </CardContent>
);
ClientSupplierRatio.propTypes = {
  btntitle: PropTypes.any,
  title: PropTypes.any,
  chartData: PropTypes.any,
  chartColors: PropTypes.any,
  centerImageUrl: PropTypes.any,
  clientValue: PropTypes.any,
  supplierValue: PropTypes.any,
  modalOpen: PropTypes.any,
  open: PropTypes.any,
  handleOpenChartModalDropDown: PropTypes.any,
  isPerAllowed: PropTypes.any,
  clientColor: PropTypes.any,
  supplierColor: PropTypes.any,
  clientLegnedTitle: PropTypes.any,
  supplierLegnedTitle: PropTypes.any,
};

export default ClientSupplierRatio;
