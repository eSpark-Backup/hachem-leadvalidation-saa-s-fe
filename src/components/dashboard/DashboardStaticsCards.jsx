import { Box, Card, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ClientStaticsChart from '../charts/ClientStaticsChart';
import { CLIENT_STATICS_CHART } from '../../constants/components/charts/ClientStaticsChart';
import { PIE_CHARTS2 } from '../../constants/components/charts/PieCharts';
import DonutChartSingleWithText from '../charts/DonutChartSingleWithText';
import {
  DASHBOARD_STATICS_CARDS,
  LEAD_STATS,
  stats,
} from '../../constants/components/dashboard/DashboardStaticsCards';
import {
  containerStyles,
  boxStyles,
  sectionTitle,
  statsCardStyles,
  statCard,
  statLabel,
  chartContainer,
  actionBoxStyles,
  actionTitle,
  actionItemBox,
  actionLabel,
} from '../../styles/components/dashboard/DashboardStaticsCards';

const StatsCard = ({ data }) => (
  <>
    {data.map(({ label, icon, light }) => (
      <Grid item xs={12} sm={6} key={label}>
        <Card variant="outlined" sx={statCard}>
          <img src={icon} alt={DASHBOARD_STATICS_CARDS.iconAlt} />
          <Typography variant="subtitle1" sx={statLabel}>
            {label}
          </Typography>
          <img src={light} alt={DASHBOARD_STATICS_CARDS.lightIconAlt} />
        </Card>
      </Grid>
    ))}
  </>
);

StatsCard.propTypes = {
  data: PropTypes.array.isRequired,
};

const DashboardStaticsCards = () => (
  <Grid container sx={containerStyles} spacing={2}>
    {/* Left Section */}
    <Grid item xs={12} md={6}>
      <Box sx={boxStyles}>
        <Typography sx={sectionTitle}>
          {DASHBOARD_STATICS_CARDS.sectionTitle}
        </Typography>
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
        <Typography sx={actionTitle}>
          {DASHBOARD_STATICS_CARDS.latestActionTitle}
        </Typography>
        <Grid container>
          {LEAD_STATS.map(({ label, value, color }) => (
            <Grid item xs={12} md={4} sx={actionItemBox} key={label}>
              <DonutChartSingleWithText
                data={PIE_CHARTS2}
                color={color}
                text={value}
              />
              <Typography sx={actionLabel}>{label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  </Grid>
);

export default DashboardStaticsCards;
