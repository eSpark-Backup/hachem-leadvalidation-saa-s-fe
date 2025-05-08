import ClientStaticsChart from '../charts/ClientStaticsChart';
import { Box, Card, Grid, Typography } from '@mui/material';
import { stats } from '../../constants/components/dashboard/DashboardStaticsCards';
import { CLIENT_STATICS_CHART } from '../../constants/components/charts/ClientStaticsChart';

// =================== STYLES ===================
const containerBoxSx = { py: 2 };

const outerGridSx = { borderRadius: '10px', background: '#09102B0D' };

const innerBoxSx = {
  p: 2,
  borderRadius: '17px',
};

const titleTextSx = {
  fontWeight: 800,
  fontSize: {
    xs: '20px',
    sm: '25px',
  },
  color: '#1B2559',
};

const statsGridSx = {
  p: 2,
};

const statCardSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 2,
  borderRadius: 3,
};

const statLabelSx = {
  fontWeight: 400,
  fontSize: {
    xs: '14px',
    sm: '16px',
  },
  color: '#3A3A49',
};

const chartContainerSx = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: 2,
};

// =================== STATIC COMPONENT ===================
const StatCards = () => (
  <Grid container spacing={2} sx={{ flex: 1 }}>
    {stats.map((item) => (
      <Grid item xs={12} sm={3} key={item.label}>
        <Card variant="outlined" sx={statCardSx}>
          <img src={item.icon} alt={`${item.label} icon`} />
          <Typography variant="subtitle1" sx={statLabelSx}>
            {item.label}
          </Typography>
          <img src={item.light} alt={`${item.label} light`} />
        </Card>
      </Grid>
    ))}
  </Grid>
);

// =================== COMPONENT ===================
const SupplierPerformance = () => {
  return (
    <Box sx={containerBoxSx}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={12}>
          <Grid container sx={outerGridSx}>
            <Grid item xs={12} md={9}>
              <Box sx={innerBoxSx}>
                <Typography sx={titleTextSx}>Supplier performance</Typography>
                <Box sx={statsGridSx}>
                  <StatCards />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={chartContainerSx}>
              <ClientStaticsChart data={CLIENT_STATICS_CHART} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SupplierPerformance;
