import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { SUPPLIER_REPORTS_ANALYTICS } from '../../constants/pages/ReportsAnalytics';
import LeadsChart from '../charts/LeadsChart';
import { LEADS_CHART } from '../../constants/components/charts/LeadsChart';
import { KeyboardArrowDown } from '@mui/icons-material';
import {
  PENDING_LEADS_DATA,
  REJECTED_LEADS_DATA,
  VALID_LEADS_DATA,
} from '../../constants/components/charts/SingleLineChart';
import SingleLineChart from '../charts/SingleLineChart';
import { LEADS_OVERVIEW_CHART2 } from '../../constants/components/charts/SingleLineChart2';
import {
  PIE_CHARTS,
  PIE_CHARTS_COLORS,
} from '../../constants/components/charts/PieCharts';
import DonutChartWithText from '../charts/DonutChartWithText';
import LeadsTable from '../charts/LeadsTable';
import {
  HEADERS,
  LEADS_TABLE,
} from '../../constants/components/charts/LeadsTable';
import SingleLineChart2 from '../charts/SingleLineChart2';
import HeaderActions from './HeaderActions';
import {
  boxStyle,
  buttonStyle,
  cardContentStyle,
  cardStyle,
  performanceBoxStyle,
  typographyMainStyle,
  typographySubStyle,
} from '../../styles/components/report-analytics/SupplierReports';

const SupplierReports = ({ handleOpen, handleCopy, handleDownload }) => {
  return (
    <>
      <Box>
        <HeaderActions
          title={SUPPLIER_REPORTS_ANALYTICS.title}
          buttons={[
            {
              title: SUPPLIER_REPORTS_ANALYTICS.copyBtnTitle,
              icon: SUPPLIER_REPORTS_ANALYTICS.copyBtnIcon,
              onClick: handleCopy,
            },
            {
              title: SUPPLIER_REPORTS_ANALYTICS.downBtnTitle,
              icon: SUPPLIER_REPORTS_ANALYTICS.downBtnIcon,
              onClick: handleDownload,
            },
          ]}
        />
        <Box sx={{ py: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                  <Box sx={boxStyle}>
                    <Typography variant="h4" fontWeight="bold">
                      {'Leads Performance'}
                    </Typography>
                    <Typography
                      onClick={handleOpen}
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      {'This month'}
                    </Typography>
                  </Box>
                  <LeadsChart
                    data={LEADS_CHART}
                    lineColor={'#FFA500'}
                    barColor={'#EAECFB'}
                  />
                  <Box sx={performanceBoxStyle}>
                    <Typography
                      sx={{ ...typographyMainStyle, color: '#FFA500' }}
                    >
                      {'30%'}
                    </Typography>
                    <Typography sx={typographySubStyle}>
                      {`Your leads performance is 30% better compare to last month`}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {'Valid Leads'}
                      </Typography>
                    </Box>
                    <Button sx={buttonStyle} onClick={handleOpen}>
                      <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
                        {'This Month'}
                      </Typography>
                      <KeyboardArrowDown />
                    </Button>
                  </Box>
                  <SingleLineChart
                    data={VALID_LEADS_DATA}
                    color={'#126D30'}
                    fillColor={'#54D14D'}
                  />
                  <Box sx={performanceBoxStyle}>
                    <Typography
                      sx={{ ...typographyMainStyle, color: '#126D30' }}
                    >
                      {'30%'}
                    </Typography>
                    <Typography sx={typographySubStyle}>
                      {`Your leads performance is 40% better compare to last week`}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {'Pending Leads'}
                      </Typography>
                    </Box>
                    <Button sx={buttonStyle} onClick={handleOpen}>
                      <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
                        {'This Month'}
                      </Typography>
                      <KeyboardArrowDown />
                    </Button>
                  </Box>
                  <SingleLineChart
                    data={PENDING_LEADS_DATA}
                    color={'#1E2875'}
                    fillColor={'#5188D4'}
                  />
                  <Box sx={performanceBoxStyle}>
                    <Typography
                      sx={{ ...typographyMainStyle, color: '#1E2875' }}
                    >
                      {'30%'}
                    </Typography>
                    <Typography sx={typographySubStyle}>
                      {`Your leads performance is 20% better compare to last week`}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {'Rejected Leads'}
                      </Typography>
                    </Box>
                    <Button sx={buttonStyle} onClick={handleOpen}>
                      <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
                        {'This Month'}
                      </Typography>
                      <KeyboardArrowDown />
                    </Button>
                  </Box>
                  <SingleLineChart
                    data={REJECTED_LEADS_DATA}
                    color={'#FF4343'}
                    fillColor={'#F35F5F'}
                  />
                  <Box sx={performanceBoxStyle}>
                    <Typography
                      sx={{ ...typographyMainStyle, color: '#FF4343' }}
                    >
                      {'30%'}
                    </Typography>
                    <Typography sx={typographySubStyle}>
                      {`Your leads performance is 20% better compare to last week`}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ py: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={9}>
              <Card sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {'Leads overview'}
                      </Typography>
                    </Box>
                    <Button sx={buttonStyle} onClick={handleOpen}>
                      <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
                        {'This Year'}
                      </Typography>
                      <KeyboardArrowDown />
                    </Button>
                  </Box>
                  <SingleLineChart2
                    data={LEADS_OVERVIEW_CHART2}
                    color="#09102B"
                    fillColor="#136BE5"
                    strokeWidth={3.38}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {'Most Generate Leads'}
                      </Typography>
                    </Box>
                    <Button sx={buttonStyle} onClick={handleOpen}>
                      <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
                        {'This Month'}
                      </Typography>
                      <KeyboardArrowDown />
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    py={5}
                  >
                    <DonutChartWithText
                      data={PIE_CHARTS}
                      colors={PIE_CHARTS_COLORS}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    py={1}
                  >
                    <LeadsTable data={LEADS_TABLE} headers={HEADERS} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

SupplierReports.propTypes = {
  handleDownload: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

export default SupplierReports;
