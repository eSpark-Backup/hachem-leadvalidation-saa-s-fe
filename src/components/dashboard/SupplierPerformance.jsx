import ClientStaticsChart from '../charts/ClientStaticsChart';
import { Box, Card, Grid, Typography } from '@mui/material';
import { stats } from '../../constants/components/dashboard/DashboardStaticsCards';
import { CLIENT_STATICS_CHART } from '../../constants/components/charts/ClientStaticsChart';
import { SUPPLIER_PERFORMANCE } from '../../constants/components/dashboard/SupplierPerformance';
import {
  containerBoxStyles,
  outerGridStyles,
  innerBoxStyles,
  titleTextStyles,
  statsGridStyles,
  statCardStyles,
  statLabelStyles,
  chartContainerStyles,
} from '../../styles/components/dashboard/admin/SupplierPerformance';

const StatCards = () => (
  <Grid container spacing={2} sx={{ flex: 1 }}>
    {stats.map(({ label, icon, light }) => (
      <Grid item xs={12} sm={3} key={label}>
        <Card variant="outlined" sx={statCardStyles}>
          <img
            src={icon}
            alt={`${label} ${SUPPLIER_PERFORMANCE.iconAltSuffix}`}
          />
          <Typography variant="subtitle1" sx={statLabelStyles}>
            {label}
          </Typography>
          <img
            src={light}
            alt={`${label} ${SUPPLIER_PERFORMANCE.lightAltSuffix}`}
          />
        </Card>
      </Grid>
    ))}
  </Grid>
);

const SupplierPerformance = () => (
  <Box sx={containerBoxStyles}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={12}>
        <Grid container sx={outerGridStyles}>
          <Grid item xs={12} md={9}>
            <Box sx={innerBoxStyles}>
              <Typography sx={titleTextStyles}>
                {SUPPLIER_PERFORMANCE.supplierPerformanceTitle}
              </Typography>
              <Box sx={statsGridStyles}>
                <StatCards />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={chartContainerStyles}>
            <ClientStaticsChart data={CLIENT_STATICS_CHART} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default SupplierPerformance;
