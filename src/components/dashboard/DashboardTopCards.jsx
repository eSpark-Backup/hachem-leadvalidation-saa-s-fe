import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  cardStyles,
  chartTitleStyles,
  // containerStyles,
  iconBoxStyles,
  layoutStyles,
  textColumnStyles,
  titleStyles,
  unitStyles,
  valueStyles,
} from '../../styles/components/dashboard/DashboardTopCards';
import LeadsPerformanceChart from '../charts/LeadsPerformanceChart';
import { LEADS_PERFORMANCE_CHART } from '../../constants/components/charts/LeadsPerformanceChart';

const DashboardTopCards = ({ data, content }) => {
  return (
    <Grid container spacing={2} justifyContent={'center'} px={{ xs: 1, lg: 2 }}>
      {content?.map((card, index) => (
        <Grid item xs={11.8} sm={6} md={3} key={index}>
          <Box
            sx={{
              ...cardStyles,
              background: card.bgColor || '#fff',
              color: index === 3 ? 'white' : 'black',
            }}
          >
            <Box sx={layoutStyles(card.isInverted)}>
              <Box sx={textColumnStyles(!!card.chartTitle)}>
                <Typography variant="h6" sx={titleStyles(card.titleColor)}>
                  {card.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5 }}>
                  <Typography variant="h4" sx={valueStyles(card.valueColor)}>
                    {data[index].toLocaleString()}
                    {card.postText || ''}
                  </Typography>
                  <Typography sx={unitStyles(card.unitColor)}>
                    {card.unit || ''}
                  </Typography>
                </Box>
              </Box>
              <Box sx={iconBoxStyles}>
                {card.chartTitle && (
                  <>
                    <Box sx={chartTitleStyles(card.titleColor)}>
                      {card.chartTitle}
                    </Box>
                  </>
                )}
                {card.icon ? (
                  <Box
                    component={'img'}
                    src={card.icon}
                    alt={card.title}
                    sx={{
                      width: { xs: '88%', lg: 'auto' },
                      mr: 'auto',
                    }}
                  />
                ) : (
                  <LeadsPerformanceChart
                    color={card.chartColor}
                    data={LEADS_PERFORMANCE_CHART}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

DashboardTopCards.propTypes = {
  data: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired,
};

export default DashboardTopCards;
