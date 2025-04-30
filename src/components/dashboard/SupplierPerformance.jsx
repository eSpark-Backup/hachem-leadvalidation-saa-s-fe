import ClientStaticsChart from '../charts/ClientStaticsChart';
import { Box, Card, Grid, Typography } from '@mui/material';
import { stats } from '../../constants/components/dashboard/DashboardStaticsCards';
import { CLIENT_STATICS_CHART } from '../../constants/components/charts/ClientStaticsChart';

const SupplierPerformance = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={12} sx={{}}>
        <Grid container sx={{ borderRadius: '10px', background: '#09102B0D' }}>
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                p: 2,
                borderRadius: '17px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: '20px',
                    sm: '25px',
                  },
                  color: '#1B2559',
                }}
              >
                Supplier performance
              </Typography>
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2} sx={{ flex: 1 }}>
                  {stats.map((item) => (
                    <Grid item xs={12} sm={3} key={item.label}>
                      <Card
                        variant="outlined"
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          p: 2,
                          borderRadius: 3,
                        }}
                      >
                        <img src={item.icon} />
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 400,
                            fontSize: {
                              xs: '14px',
                              sm: '16px',
                            },
                          }}
                          color="#3A3A49"
                        >
                          {item.label}
                        </Typography>
                        <img src={item.light} />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <ClientStaticsChart data={CLIENT_STATICS_CHART} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SupplierPerformance;
