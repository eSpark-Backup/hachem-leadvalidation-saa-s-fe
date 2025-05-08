import { Box, Card, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { cardStyle } from '../../../styles/components/report-analytics/SupplierReports';

import {
  CLIENT_CHART,
  SUPPLIER_CHART,
} from '../../../constants/components/charts/SupplierChart';
import {
  CLIENT_SUPPLIER_RATIO_CHARTS,
  CLIENT_SUPPLIER_RATIO_CHARTS_COLORS,
  ENGAGEMENT_RATIO_CHARTS,
  ENGAGEMENT_RATIO_CHARTS_COLORS,
  FMP_MONTH_CHARTS,
  FMP_MONTH_CHARTS_COLORS,
} from '../../../constants/components/charts/PieCharts';

import {
  CLIENT_STATS_CHART,
  SUPPLIER_STATS_CHART,
} from '../../../constants/components/charts/ClientStatsChart';
import { useState } from 'react';
import ChartsModal from '../../global/ChartsModal';
import ClientSupplierRatio from './ClientSupplierRatio';
import ClientTotalLeads from './ClientTotalLeads';
import SupplierTotalLeads from './SupplierTotalLeads';
import EngagementRatio from './EngagementRatio';
import FmoMonth from './FMOMonth';
import StatisticsCard from './StatisticsCard';

const ADMIN_DASHBOARD = { title: `Total Leads` };

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [children, setChildren] = useState(<></>);

  const handleOpenChartModal = (component) => {
    setChildren(component);
    setOpen(true);
  };
  const handleCloseChartModal = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          py: 2,
        }}
      >
        {/* Top Row */}
        <Grid container gap={2}>
          {/* 4/5 Box */}
          <Grid
            item
            xs={12}
            md={8.9}
            sx={{
              background: '#09102B0D',
              p: 2,
              borderRadius: '17px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: '20px', sm: '25px' },
                color: '#1B2559',
                mb: 2,
              }}
            >
              {ADMIN_DASHBOARD.title}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card sx={cardStyle}>
                  <ClientTotalLeads
                    title={'Client'}
                    btnTitle={'This Month'}
                    chartData={CLIENT_CHART}
                    open={open}
                    modalOpen={() =>
                      handleOpenChartModal(
                        <ClientTotalLeads
                          title={'Client'}
                          btnTitle={'This Month'}
                          chartData={CLIENT_CHART}
                          modalOpen={() => handleOpenChartModal(<></>)}
                          handleOpenChartModalDropDown={() => {}}
                        />
                      )
                    }
                    handleOpenChartModalDropDown={() => {}}
                  />
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={cardStyle}>
                  <SupplierTotalLeads
                    title={'Supplier'}
                    btnTitle={'This Month'}
                    chartData={SUPPLIER_CHART}
                    validColor={' #FFB443'}
                    rejectColor={' #136BE575'}
                    open={open}
                    modalOpen={() =>
                      handleOpenChartModal(
                        <SupplierTotalLeads
                          title={'Supplier'}
                          btnTitle={'This Month'}
                          chartData={SUPPLIER_CHART}
                          validColor={' #FFB443'}
                          rejectColor={' #136BE575'}
                          modalOpen={() => handleOpenChartModal(<></>)}
                          handleOpenChartModalDropDown={() => {}}
                        />
                      )
                    }
                    handleOpenChartModalDropDown={() => {}}
                  />
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={cardStyle}>
                  <EngagementRatio
                    title={'Engagement Ratio'}
                    btntitle={'This Month'}
                    chartData={ENGAGEMENT_RATIO_CHARTS}
                    chartColors={ENGAGEMENT_RATIO_CHARTS_COLORS}
                    innerRadius={70}
                    outerRadius={90}
                    centerValue={234893}
                    centerLabel={'Total Engagement'}
                    open={open}
                    modalOpen={() =>
                      handleOpenChartModal(
                        <EngagementRatio
                          title={'Engagement Ratio'}
                          btntitle={'This Month'}
                          chartData={ENGAGEMENT_RATIO_CHARTS}
                          chartColors={ENGAGEMENT_RATIO_CHARTS_COLORS}
                          innerRadius={70}
                          outerRadius={90}
                          centerValue={234893}
                          centerLabel={'Total Engagement'}
                          handleOpenChartModalDropDown={() => {}}
                        />
                      )
                    }
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* 1/5 Box */}
          <Grid
            item
            xs={12}
            md={2.9}
            sx={{
              background: '#09102B0D',
              p: 2,
              borderRadius: '17px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: '20px', sm: '25px' },
                color: '#1B2559',
                mb: 2,
              }}
            >
              {`Usage`}
            </Typography>

            <Card sx={cardStyle}>
              <FmoMonth
                handleOpenChartModalDropDown={() => {}}
                modalOpen={() => {
                  handleOpenChartModal(
                    <FmoMonth
                      handleOpenChartModalDropDown={() => {}}
                      modalOpen={() => {
                        handleOpenChartModal(<></>);
                      }}
                      title={'FMO April'}
                      btnTitle={'This Month'}
                      centerValue={1024}
                      innerRadius={70}
                      outerRadius={90}
                      chartData={FMP_MONTH_CHARTS}
                      chartColors={FMP_MONTH_CHARTS_COLORS}
                      clientValue={50}
                      clientChange={'0%'}
                      clientColor={FMP_MONTH_CHARTS_COLORS[1]}
                      clientChangeDirection="up"
                      supplierValue={50}
                      supplierChange={'0%'}
                      supplierColor={FMP_MONTH_CHARTS_COLORS[0]}
                      supplierChangeDirection="down"
                    />
                  );
                }}
                open={open}
                title={'FMO April'}
                btnTitle={'This Month'}
                centerValue={1024}
                innerRadius={70}
                outerRadius={90}
                chartData={FMP_MONTH_CHARTS}
                chartColors={FMP_MONTH_CHARTS_COLORS}
                clientValue={50}
                clientChange={'0%'}
                clientColor={FMP_MONTH_CHARTS_COLORS[1]}
                clientChangeDirection="up"
                supplierValue={50}
                supplierChange={'0%'}
                supplierColor={FMP_MONTH_CHARTS_COLORS[0]}
                supplierChangeDirection="down"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: 2,
        }}
      >
        <Grid container gap={2}>
          {/* 3/4 Box */}
          <Grid
            item
            xs={12}
            md={7.9}
            sx={{
              background: '#09102B0D',
              p: 2,
              borderRadius: '17px',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ p: 3, bgcolor: 'white', borderRadius: 3, boxShadow: 3 }}
                >
                  <StatisticsCard
                    chartData={CLIENT_STATS_CHART}
                    handleOpenChartModalDropDown={() => {}}
                    modalOpen={() => {
                      handleOpenChartModal(
                        <StatisticsCard
                          chartData={CLIENT_STATS_CHART}
                          title="Client"
                          showToggle={true}
                          totalLeads={0}
                          totalLeadsLabel={'Total Leads'}
                          totalLeadsChange={'0%'}
                          totalLeadsChangeColor={'success.main'}
                          totalLeadsChangeIcon={'up'}
                          totalLeadsChangeTime={''}
                          rejectedLeads={0}
                          rejectedLeadsLabel={'Rejected Leads'}
                          rejectedLeadsChange={'0%'}
                          rejectedLeadsChangeColor={'error.main'}
                          rejectedLeadsChangeIcon={'down'}
                        />
                      );
                    }}
                    open={open}
                    title="Client"
                    showToggle={true}
                    totalLeads={0}
                    totalLeadsLabel={'Total Leads'}
                    totalLeadsChange={'0%'}
                    totalLeadsChangeColor={'success.main'}
                    totalLeadsChangeIcon={'up'}
                    totalLeadsChangeTime={''}
                    rejectedLeads={0}
                    rejectedLeadsLabel={'Rejected Leads'}
                    rejectedLeadsChange={'0%'}
                    rejectedLeadsChangeColor={'error.main'}
                    rejectedLeadsChangeIcon={'down'}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ p: 3, bgcolor: 'white', borderRadius: 3, boxShadow: 3 }}
                >
                  <StatisticsCard
                    chartData={SUPPLIER_STATS_CHART}
                    handleOpenChartModalDropDown={() => {}}
                    modalOpen={() => {
                      handleOpenChartModal(
                        <StatisticsCard
                          chartData={SUPPLIER_STATS_CHART}
                          title="Supplier"
                          showToggle={true}
                          totalLeads={1000}
                          totalLeadsLabel={'Total Leads'}
                          totalLeadsChange={'10%'}
                          totalLeadsChangeIcon={'up'}
                          totalLeadsChangeTime={''}
                          rejectedLeads={200}
                          rejectedLeadsLabel={'Rejected Leads'}
                          rejectedLeadsChange={'20%'}
                          rejectedLeadsChangeIcon={'down'}
                        />
                      );
                    }}
                    open={open}
                    title="Supplier"
                    showToggle={true}
                    totalLeads={1000}
                    totalLeadsLabel={'Total Leads'}
                    totalLeadsChange={'10%'}
                    totalLeadsChangeIcon={'up'}
                    totalLeadsChangeTime={''}
                    rejectedLeads={200}
                    rejectedLeadsLabel={'Rejected Leads'}
                    rejectedLeadsChange={'20%'}
                    rejectedLeadsChangeIcon={'down'}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* 1/4 Box */}
          <Grid
            item
            xs={12}
            md={3.9}
            sx={{
              background: '#09102B0D',
              p: 2,
              borderRadius: '17px',
            }}
          >
            <Card sx={cardStyle}>
              <ClientSupplierRatio
                title="Client/Supplier Ratio"
                chartData={CLIENT_SUPPLIER_RATIO_CHARTS}
                chartColors={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS}
                centerImageUrl="/src/assets/images/global/pie-image.png"
                clientValue="346.2"
                clientColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[1]}
                supplierColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[0]}
                clientLegnedTitle={'Client'}
                supplierLegnedTitle={'Supplier'}
                open={open}
                modalOpen={() =>
                  handleOpenChartModal(
                    <ClientSupplierRatio
                      title="Client/Supplier Ratio"
                      chartData={CLIENT_SUPPLIER_RATIO_CHARTS}
                      chartColors={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS}
                      clientColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[1]}
                      supplierColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[0]}
                      clientLegnedTitle={'Client'}
                      supplierLegnedTitle={'Supplier'}
                      centerImageUrl="/src/assets/images/global/pie-image.png"
                      clientValue="346.2"
                      modalOpen={() => handleOpenChartModal(<></>)}
                      supplierValue="46.2"
                    />
                  )
                }
                supplierValue="46.2"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <ChartsModal handleCloseChartModal={handleCloseChartModal} open={open}>
        {children}
      </ChartsModal>
    </>
  );
};
AdminDashboard.propTypes = {
  handleOpenChartModal: PropTypes.any,
};
export default AdminDashboard;
