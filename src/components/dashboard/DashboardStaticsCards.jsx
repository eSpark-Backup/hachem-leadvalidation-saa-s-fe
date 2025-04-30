import { Box, Card, Grid, Typography } from '@mui/material';

import { stats } from '../../constants/components/dashboard/DashboardStaticsCards';
import CircularProgressWithAutoUpdate from './CircularProgressWithLabel';
import ClientStaticsChart from '../charts/ClientStaticsChart';
import { CLIENT_STATICS_CHART } from '../../constants/components/charts/ClientStaticsChart';

const DashboardStaticsCards = () => {
  return (
    <>
      <Grid container sx={{ borderRadius: '17px' }} spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: '#09102B0D',
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
              Statistics
            </Typography>

            <Grid
              container
              sx={{ borderRadius: '10px', background: '#ffffff' }}
            >
              <Grid item xs={12} md={8}>
                <Box sx={{ p: 2 }}>
                  <Grid container spacing={2} sx={{ flex: 1 }}>
                    {stats.map((item) => (
                      <Grid item xs={12} sm={6} key={item.label}>
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
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <ClientStaticsChart data={CLIENT_STATICS_CHART} />
                {/* <img src={staticsCardImage} /> */}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: '#09102B0D',
              p: 2.5,
              borderRadius: '17px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: '25px',
                color: '#1B2559',
              }}
            >
              Latest Action
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  color: '#1B2559',
                  p: 2,
                }}
              >
                <CircularProgressWithAutoUpdate
                  value={80.47}
                  color={'#54D14D'}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    pt: 1,
                  }}
                >
                  {'valid Leads'}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: '#1B2559',
                  p: 2,
                }}
              >
                <CircularProgressWithAutoUpdate
                  value={50.56}
                  color={'#136BE5'}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    pt: 1,
                  }}
                >
                  {'Duplicate Leads'}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: '#1B2559',
                  p: 2,
                }}
              >
                <CircularProgressWithAutoUpdate
                  value={19.53}
                  color={'#FF4343'}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    pt: 1,
                  }}
                >
                  {'False Leads'}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardStaticsCards;
