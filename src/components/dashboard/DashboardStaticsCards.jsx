import { Box, Card, Grid, Typography } from '@mui/material';
import { stats } from '../../constants/components/dashboard/DashboardStaticsCards';
import CircularProgressWithAutoUpdate from './CircularProgressWithLabel';
import ClientStaticsChart from '../charts/ClientStaticsChart';
import { CLIENT_STATICS_CHART } from '../../constants/components/charts/ClientStaticsChart';
import PropTypes from 'prop-types';
import DonutChartWithText from '../charts/DonutChartWithText';
import {
  PIE_CHARTS,
  PIE_CHARTS2,
  PIE_CHARTS_COLORS,
} from '../../constants/components/charts/PieCharts';
import DonutChartSingleWithText from '../charts/DonutChartSingleWithText';
// --- Styles ---
const containerStyles = { borderRadius: '17px' };

const boxStyles = { background: '#09102B0D', p: 2, borderRadius: '17px' };

const sectionTitle = {
  fontWeight: 800,
  fontSize: { xs: '20px', sm: '25px' },
  color: '#1B2559',
};

const statsCardStyles = {
  borderRadius: '10px',
  background: '#ffffff',
};

const statCard = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 2,
  borderRadius: 3,
};

const statLabel = {
  fontWeight: 400,
  fontSize: { xs: '14px', sm: '16px' },
};

const chartContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: 2,
};

const actionBoxStyles = {
  background: '#09102B0D',
  p: 2.5,
  borderRadius: '17px',
};

const actionTitle = {
  fontWeight: 800,
  fontSize: '25px',
  color: '#1B2559',
};

const actionItemBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: '#1B2559',
  p: 2,
};

const actionLabel = {
  fontWeight: 400,
  fontSize: '16px',
  textTransform: 'capitalize',
  pt: 1,
};

// --- Static Data ---

const leadStats = [
  { label: 'valid Leads', value: 80.47, color: '#54D14D' },
  { label: 'Duplicate Leads', value: 50.56, color: '#136BE5' },
  { label: 'False Leads', value: 19.53, color: '#FF4343' },
];

const LEAD_STATS_DATA = [{ key: 'Group A', value: 50.56 }];

const StatsCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Grid item xs={12} sm={6} key={item.label}>
          <Card variant="outlined" sx={statCard}>
            <img src={item.icon} alt="icon" />
            <Typography variant="subtitle1" sx={statLabel} color="#3A3A49">
              {item.label}
            </Typography>
            <img src={item.light} alt="light-icon" />
          </Card>
        </Grid>
      ))}
    </>
  );
};
StatsCard.propTypes = {
  data: PropTypes.array.isRequired,
};

const DashboardStaticsCards = () => {
  return (
    <Grid container sx={containerStyles} spacing={2}>
      {/* Left Section */}
      <Grid item xs={12} md={6}>
        <Box sx={boxStyles}>
          <Typography sx={sectionTitle}>Statistics</Typography>
          <Grid container sx={statsCardStyles}>
            <Grid item xs={12} md={8}>
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <StatsCard data={stats} />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={chartContainer}>
              <ClientStaticsChart data={CLIENT_STATICS_CHART} />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={6}>
        <Box sx={actionBoxStyles}>
          <Typography sx={actionTitle}>{'Latest Action'}</Typography>
          <Grid container>
            {leadStats.map((item) => (
              <Grid item xs={12} md={4} sx={actionItemBox} key={item.label}>
                <DonutChartSingleWithText
                  data={PIE_CHARTS2}
                  color={item.color}
                  text={item.value}
                />
                <Typography sx={actionLabel}>{item.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardStaticsCards;
