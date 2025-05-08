import { Box, Card, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  TOP_REVENUE_CLIENTS_CHARTS,
  TOP_REVENUE_CLIENTS_CHARTS_COLORS,
  TOP_REVENUE_CLIENTS_TABLE_HEADERS,
  TOTAL_CLIENT_SUPPLIER_CHARTS,
  TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS,
} from '../../constants/components/charts/PieCharts';
import {
  cardContentStyle,
  cardStyle,
} from '../../styles/components/report-analytics/SupplierReports';
import HeaderActions from '../report-analytics/HeaderActions';
import { CREDIT_USAGE_DATA } from '../../constants/components/charts/SingleLineChart2';
import { useState } from 'react';
import ChartsModal from '../global/ChartsModal';
import {
  ADMIN_DASHBOARD,
  clientsData,
  data,
} from '../../constants/components/billing/AdminBilling';
import SalesAnalysis from './SalesAnalysis';
import ProfitLossOverview from './ProfitLossOverview';
import TotalClientsRevenue from './TotalClientsRevenue';
import TotalClientSupplier from './TotalClientSupplier';
import TopClientsByRevenue from './TopClientsByRevenue';

const AdminBilling = () => {
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
        <HeaderActions title={ADMIN_DASHBOARD.title} />
        {/* Top Row */}
        <Grid container gap={2}>
          {/* 4/5 Box */}
          <Grid item xs={12} sm={6} md={8.9}>
            <Card sx={{ borderRadius: 4, p: 1 }}>
              <SalesAnalysis
                chartData={CREDIT_USAGE_DATA}
                modalOpen={() =>
                  handleOpenChartModal(
                    <SalesAnalysis
                      chartData={CREDIT_USAGE_DATA}
                      btnTitle={'This Year'}
                      title={'Sales Analysis'}
                      color={'#0E5FD9'}
                      fillColor={'#CFDFF7'}
                      totalSales={44452}
                      strokeWidth={3.38}
                      curreny={'€'}
                    />
                  )
                }
                open={open}
                btnTitle={'This Year'}
                title={'Sales Analysis'}
                color={'#0E5FD9'}
                fillColor={'#CFDFF7'}
                strokeWidth={3.38}
                up={0}
                curreny={'€'}
                totalSales={44452}
                inPer={`-12.2%`}
              />
            </Card>
            <Card sx={{ borderRadius: 4, my: 2 }}>
              <ProfitLossOverview
                data={data}
                title={'PROFIT & LOSSES OVERVIEW'}
              />
            </Card>
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
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexDirection: 'column',
              }}
            >
              <Card sx={cardStyle}>
                <TopClientsByRevenue
                  open={open}
                  tableHeader={TOP_REVENUE_CLIENTS_TABLE_HEADERS}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <TopClientsByRevenue
                        tableHeader={TOP_REVENUE_CLIENTS_TABLE_HEADERS}
                        chartData={TOP_REVENUE_CLIENTS_CHARTS}
                        chartColors={TOP_REVENUE_CLIENTS_CHARTS_COLORS}
                        title={'Top 5 Clients By Revenue'}
                        dropdownLabel={'This Month'}
                      />
                    );
                  }}
                  handleOpenChartModalDropDown={() => {}}
                  chartData={TOP_REVENUE_CLIENTS_CHARTS}
                  chartColors={TOP_REVENUE_CLIENTS_CHARTS_COLORS}
                  title={'Top 5 Clients By Revenue'}
                  dropdownLabel={'This Month'}
                />
              </Card>
              <Card sx={cardStyle}>
                <TotalClientSupplier
                  open={open}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <TotalClientSupplier
                        title={'Total Clients & Suppliers'}
                        dropdownLabel={'This Month'}
                        chartData={TOTAL_CLIENT_SUPPLIER_CHARTS}
                        chartColors={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS}
                        clientLabel={'Client'}
                        clientValue={TOTAL_CLIENT_SUPPLIER_CHARTS[1].value}
                        clientColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[1]}
                        supplierLabel={'Supplier'}
                        supplierValue={TOTAL_CLIENT_SUPPLIER_CHARTS[0].value}
                        supplierColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[0]}
                        cardStyle={cardContentStyle}
                        centerValue={1024}
                      />
                    );
                  }}
                  handleOpenChartModalDropDown={() => {}}
                  title="Total Clients & Suppliers"
                  dropdownLabel="This Month"
                  chartData={TOTAL_CLIENT_SUPPLIER_CHARTS}
                  chartColors={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS}
                  clientLabel={'Client'}
                  clientValue={TOTAL_CLIENT_SUPPLIER_CHARTS[1].value}
                  clientColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[1]}
                  supplierLabel={'Supplier'}
                  supplierValue={TOTAL_CLIENT_SUPPLIER_CHARTS[0].value}
                  supplierColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[0]}
                  cardStyle={cardContentStyle}
                  centerValue={1024}
                />
              </Card>
            </Box>
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
            md={12}
            sx={{
              background: '#09102B0D',
              p: 2,
              borderRadius: '17px',
            }}
          >
            <TotalClientsRevenue
              title={'Total Clients and Revenue'}
              tableHead={['Clients', 'Credits Buy', 'Revenue']}
              tableData={clientsData}
            />
          </Grid>
        </Grid>
      </Box>

      <ChartsModal handleCloseChartModal={handleCloseChartModal} open={open}>
        {children}
      </ChartsModal>
    </>
  );
};
AdminBilling.propTypes = {
  handleOpenChartModal: PropTypes.func.isRequired,
  children: PropTypes.any,
};
export default AdminBilling;
