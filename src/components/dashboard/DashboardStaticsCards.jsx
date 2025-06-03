import { Box, Card, Grid, Tooltip, Typography } from '@mui/material';
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
import TooltipText from '../global/TooltipText';
import AppSlider from '../global/AppSlider';
// --- Styles ---
const containerStyles = { borderRadius: '17px', overflowY: 'hidden' };

const boxStyles = { background: '#09102B0D', p: 2, borderRadius: '17px' };

const sectionTitle = {
  fontWeight: 800,
  color: '#1B2559',
};

const statsCardStyles = {
  mt: '14px',
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

const statLabel = (index) => ({
  fontWeight: 400,
  fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minWidth: '70px',
  maxWidth: 'auto', // optional
  display: 'inline-block', // required for ellipsis
  mx: index === 0 ? 2 : 0,
  color: '#3A3A49',
});

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
  height: '100%',
};

const actionTitle = {
  fontWeight: 800,
  color: '#1B2559',
};

const actionItemBox = {
  display: { xs: 'none', sm: 'flex' },
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: '#1B2559',
  py: 2,
};

const actionLabel = {
  fontWeight: 500,
  textTransform: 'capitalize',
  pt: 1,
};

const slideStyle = {
  width: '100%',
  maxWidth: '170px',
  paddingBottom: '20px',
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
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card variant="outlined" sx={statCard}>
            <img src={item?.icon} alt="icon" />
            <TooltipText
              text={item?.label}
              typographyStyle={statLabel(index)}
              maxLength={10}
              variant="subtitle1"
            />
            <img src={item?.light} alt="light-icon" />
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
      <Grid item xs={12} md={6.5}>
        <Box sx={boxStyles}>
          <Typography variant="h3" sx={sectionTitle}>
            Statistics
          </Typography>
          <Grid container sx={statsCardStyles}>
            <Grid item xs={12} lg={8}>
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <StatsCard data={stats} />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4} sx={chartContainer}>
              <ClientStaticsChart data={CLIENT_STATICS_CHART} height={'100%'} />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={5.5}>
        <Box sx={actionBoxStyles}>
          <Typography variant="h3" sx={actionTitle}>
            {'Latest Action'}
          </Typography>
          <Grid container mt={'8px'} maxWidth={'550px'} mx={'auto'}>
            {leadStats?.map((item) => (
              <Grid item xs={4} sm={4} sx={actionItemBox} key={item.label}>
                <DonutChartSingleWithText
                  data={PIE_CHARTS2}
                  color={item.color}
                  text={item.value}
                />
                <Typography variant="h6" sx={actionLabel}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
            <AppSlider
              data={leadStats}
              isDisplay={true}
              slideStyle={slideStyle}
              card={(item) => (
                <Box
                  sx={{ ...actionItemBox, display: { xs: 'flex', sm: 'none' } }}
                >
                  <DonutChartSingleWithText
                    data={PIE_CHARTS2}
                    color={item?.color}
                    text={item?.value}
                  />
                  <Typography variant="h6" sx={actionLabel}>
                    {item?.label}
                  </Typography>
                </Box>
              )}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardStaticsCards;
