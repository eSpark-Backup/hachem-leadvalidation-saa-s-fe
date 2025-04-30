import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { CLIENT_REPORTS_ANALYTICS } from '../../constants/pages/ReportsAnalytics';
import { KeyboardArrowDown } from '@mui/icons-material';
import { ACTIVE_SUPPLIER_CHART } from '../../constants/components/charts/ActiveSupplierChart';
import {
  HEADERS,
  LEADS_TABLE,
} from '../../constants/components/charts/LeadsTable';
import LeadsTable from '../charts/LeadsTable';
import {
  PIE_CHARTS,
  PIE_CHARTS_COLORS,
} from '../../constants/components/charts/PieCharts';
import { CREDIT_USAGE_DATA } from '../../constants/components/charts/SingleLineChart2';
import {
  LEADS_USAGE_DATA,
  REJECTED_LEADS_DATA,
} from '../../constants/components/charts/SingleLineChart';
import DonutChart from '../charts/DonutChart';
import SingleLineChartWeeks from '../charts/SingleLineChartWeeks';
import SingleLineChart from '../charts/SingleLineChart';
import { WEEKLY_CREDIT_SCORE } from '../../constants/components/charts/WeeklyCreditScore';
import WeeklyCreditScore from '../charts/WeeklyCreditScore';
import {
  DATA_LAST_MONTH,
  DATA_THIS_MONTH,
} from '../../constants/components/charts/SupplierBreadkDown';
import SupplierBreakdown from '../charts/SupplierBreadkDown';
import ActiveSupplierChart from '../charts/ActiveSupplierChart';
import HeaderActions from './HeaderActions';
import SupplierPerformance from '../dashboard/SupplierPerformance';
import SingleChart from '../charts/SingleChart';

// Reusable Button component for handling dropdown actions
const DropdownButton = ({ onClick, label }) => (
  <Button
    sx={{
      color: '#4A5154',
      background: '#F5F6F7',
    }}
    onClick={onClick}
  >
    <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>{label}</Typography>
    <KeyboardArrowDown />
  </Button>
);
DropdownButton.propTypes = {
  onClick: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
};

// Reusable Card component to handle the structure for all report cards
const ReportCard = ({
  title,
  value,
  chartComponent: ChartComponent,
  chartProps,
  label,
  handleOpen,
}) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ borderRadius: 4, p: 1 }}>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              textTransform={'uppercase'}
            >
              {title}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
          </Box>
          <DropdownButton onClick={handleOpen} label={label} />
        </Box>
        <Box>
          <ChartComponent {...chartProps} />
        </Box>
      </CardContent>
    </Card>
  </Grid>
);
ReportCard.propTypes = {
  title: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  chartComponent: PropTypes.any.isRequired,
  chartProps: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  handleOpen: PropTypes.any.isRequired,
};

const ClientReports = ({ handleOpen, handleDownload }) => {
  return (
    <>
      <Box>
        <HeaderActions
          title={CLIENT_REPORTS_ANALYTICS.title}
          buttons={[
            {
              title: CLIENT_REPORTS_ANALYTICS.downBtnTitle,
              icon: CLIENT_REPORTS_ANALYTICS.downBtnIcon,
              onClick: handleDownload,
            },
          ]}
        />
        <Box sx={{ py: 2 }}>
          <Grid container spacing={2}>
            {/* Active Suppliers Card */}
            <ReportCard
              title="ACTIVE SUPPLIERS"
              value="421"
              chartComponent={ActiveSupplierChart}
              chartProps={{ data: ACTIVE_SUPPLIER_CHART }}
              label="This Month"
              handleOpen={handleOpen}
            />

            {/* Supplier Breakdown Card */}
            <ReportCard
              title="Breakdown BY Supplier"
              value="69.25%"
              chartComponent={SupplierBreakdown}
              chartProps={{
                dataLastMonth: DATA_LAST_MONTH,
                dataThisMonth: DATA_THIS_MONTH,
              }}
              label="This Month"
              handleOpen={handleOpen}
            />

            {/* Weekly Credit Score Card */}
            <ReportCard
              title="WEEKLY Credits Score"
              value="50%"
              chartComponent={WeeklyCreditScore}
              chartProps={{ data: WEEKLY_CREDIT_SCORE }}
              label="This Month"
              handleOpen={handleOpen}
            />

            {/* Lead Usage Card */}
            <ReportCard
              title="LEAD USEAGE"
              value="81.94%"
              chartComponent={SingleChart}
              chartProps={{
                data: LEADS_USAGE_DATA,
                color: '#0FAF62',
                fillColor: '#0FAF62',
              }}
              label="This Month"
              handleOpen={handleOpen}
            />
          </Grid>
        </Box>

        <Box sx={{ py: 2 }}>
          <Grid container spacing={2}>
            {/* Credit Usage Card */}
            <Grid item xs={12} sm={6} md={9}>
              <Card sx={{ borderRadius: 4, p: 1 }}>
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        Credit Usage
                      </Typography>
                    </Box>
                    <DropdownButton onClick={handleOpen} label="This Month" />
                  </Box>
                  <SingleLineChartWeeks
                    data={CREDIT_USAGE_DATA}
                    color="#0E5FD9"
                    fillColor="#CFDFF7"
                    strokeWidth={3.38}
                  />
                </CardContent>
              </Card>
            </Grid>

            {/* Most Generate Leads Card */}
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
                        Most Generate Leads
                      </Typography>
                    </Box>
                    <DropdownButton onClick={handleOpen} label="This Month" />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <DonutChart data={PIE_CHARTS} colors={PIE_CHARTS_COLORS} />
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

        <Box sx={{ py: 2 }}>
          <SupplierPerformance data={ACTIVE_SUPPLIER_CHART} />
        </Box>
      </Box>
    </>
  );
};

ClientReports.propTypes = {
  handleDownload: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default ClientReports;
