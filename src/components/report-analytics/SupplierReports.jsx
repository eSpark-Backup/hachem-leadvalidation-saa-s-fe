import { Box, Card, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { SUPPLIER_REPORTS_ANALYTICS } from '../../constants/pages/ReportsAnalytics';

import HeaderActions from './HeaderActions';
import { useState } from 'react';
import ChartsModal from '../global/ChartsModal';
import {
  chartCardStyle,
  cardStyle,
  containerStyle,
  wrapperStyle,
  cardStyles,
} from '../../styles/components/report-analytics/SupplierReports';
import PerformenceLead from './PerformenceLead';
import LeadsOverview from './LeadsOverview';
import MostGenerateLeads from './MostGenerateLeads';
import { VALID_LEADS_DATA } from '../../constants/components/charts/SingleLineChart';
import {
  DASHBOARD_TEXT,
  TEXT_CONSTANTS,
} from '../../constants/components/reports/SupplierReports';
import SingleLineChart from '../charts/SingleLineChart';
import PerformanceCard from './PerformenceCard';
import { PENDING_LEADS_DATA } from '../../constants/components/charts/SingleLineChart';
import { REJECTED_LEADS_DATA } from '../../constants/components/charts/SingleLineChart';
import {
  PIE_CHARTS,
  PIE_CHARTS_COLORS,
} from '../../constants/components/charts/PieCharts';
import {
  HEADERS,
  LEADS_TABLE,
} from '../../constants/components/charts/LeadsTable';

const SupplierReports = ({ handleCopy, handleDownload }) => {
  const [open, setOpen] = useState(false);
  const [children, setChildren] = useState(<></>);

  const handleOpenChartModal = (component) => {
    setChildren(component);
    setOpen(true);
  };

  const handleCloseChartModal = () => setOpen(false);
  // styles.js or at top of the file

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
        <Box sx={wrapperStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <PerformenceLead
                  open={open}
                  modalOpen={() => {
                    handleOpenChartModal(<PerformenceLead />);
                  }}
                  handleOpenChartModalDropDown={() => {}}
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <PerformanceCard
                  title={TEXT_CONSTANTS.validLeads}
                  chart={SingleLineChart}
                  chartProps={{
                    data: VALID_LEADS_DATA,
                    color: '#126D30',
                    fillColor: '#54D14D',
                  }}
                  percent={'40%'}
                  percentColor="#126D30"
                  improvementText={TEXT_CONSTANTS.leadsImprovement(
                    '40%',
                    'last week'
                  )}
                  open={open}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <PerformanceCard
                        title={TEXT_CONSTANTS.validLeads}
                        chart={SingleLineChart}
                        chartProps={{
                          data: VALID_LEADS_DATA,
                          color: '#126D30',
                          fillColor: '#54D14D',
                        }}
                        percent={'40%'}
                        percentColor="#126D30"
                        improvementText={TEXT_CONSTANTS.leadsImprovement(
                          '40%',
                          'last week'
                        )}
                        open={open}
                        modalOpen={() => {
                          handleOpenChartModal();
                        }}
                        handleOpenChartModalDropDown={() => {}}
                      />
                    );
                  }}
                  handleOpenChartModalDropDown={() => {}}
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <PerformanceCard
                  title={TEXT_CONSTANTS.pendingLeads}
                  chart={SingleLineChart}
                  chartProps={{
                    data: PENDING_LEADS_DATA,
                    color: '#1E2875',
                    fillColor: '#5188D4',
                  }}
                  percent={'20%'}
                  percentColor="#1E2875"
                  improvementText={TEXT_CONSTANTS.leadsImprovement(
                    '20%',
                    'last week'
                  )}
                  open={open}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <PerformanceCard
                        title={TEXT_CONSTANTS.pendingLeads}
                        chart={SingleLineChart}
                        chartProps={{
                          data: PENDING_LEADS_DATA,
                          color: '#1E2875',
                          fillColor: '#5188D4',
                        }}
                        percent={'20%'}
                        percentColor="#1E2875"
                        improvementText={TEXT_CONSTANTS.leadsImprovement(
                          '20%',
                          'last week'
                        )}
                        modalOpen={() => {
                          handleOpenChartModal();
                        }}
                        handleOpenChartModalDropDown={() => {}}
                      />
                    );
                  }}
                  handleOpenChartModalDropDown={() => {}}
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyle}>
                <PerformanceCard
                  title={TEXT_CONSTANTS.rejectedLeads}
                  chart={SingleLineChart}
                  chartProps={{
                    data: REJECTED_LEADS_DATA,
                    color: '#FF4343',
                    fillColor: '#F35F5F',
                  }}
                  percent={'20%'}
                  percentColor="#FF4343"
                  improvementText={TEXT_CONSTANTS.leadsImprovement(
                    '20%',
                    'last week'
                  )}
                  open={open}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <PerformanceCard
                        title={TEXT_CONSTANTS.rejectedLeads}
                        chart={SingleLineChart}
                        chartProps={{
                          data: REJECTED_LEADS_DATA,
                          color: '#FF4343',
                          fillColor: '#F35F5F',
                        }}
                        percent={'20%'}
                        percentColor="#FF4343"
                        improvementText={TEXT_CONSTANTS.leadsImprovement(
                          '20%',
                          'last week'
                        )}
                      />
                    );
                  }}
                  handleOpenChartModalDropDown={() => {}}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={containerStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={9}>
              <Box sx={{ p: 2, background: ' #09102B0D', borderRadius: 4 }}>
                <Card sx={chartCardStyle}>
                  <LeadsOverview
                    open={open}
                    modalOpen={() => {
                      handleOpenChartModal(<LeadsOverview />);
                    }}
                    handleOpenChartModalDropDown={() => {}}
                  />
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={cardStyles}>
                <MostGenerateLeads
                  open={open}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <MostGenerateLeads
                        open={open}
                        title={DASHBOARD_TEXT.MOST_GENERATE_LEADS}
                        buttonText={DASHBOARD_TEXT.THIS_MONTH}
                        chartData={PIE_CHARTS}
                        chartColors={PIE_CHARTS_COLORS}
                        tableData={LEADS_TABLE}
                        tableHeaders={HEADERS}
                      />
                    );
                  }}
                  handleOpenChartModalDropDown={() => {}}
                  title={DASHBOARD_TEXT.MOST_GENERATE_LEADS}
                  buttonText={DASHBOARD_TEXT.THIS_MONTH}
                  chartData={PIE_CHARTS}
                  chartColors={PIE_CHARTS_COLORS}
                  tableData={LEADS_TABLE}
                  tableHeaders={HEADERS}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
        <ChartsModal handleCloseChartModal={handleCloseChartModal} open={open}>
          {children}
        </ChartsModal>
      </Box>
    </>
  );
};

SupplierReports.propTypes = {
  handleDownload: PropTypes.func.isRequired,
  handleOpenChartModal: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

export default SupplierReports;
