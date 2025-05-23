import {
  Box,
  Card,
  ClickAwayListener,
  Grid,
  Popper,
  Typography,
} from '@mui/material';
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
import { useRef, useState } from 'react';
import ChartsModal from '../global/ChartsModal';
import {
  ADMIN_BILLING,
  ADMIN_DASHBOARD,
  CLIENTS_DATA,
  PROFIT_LOSS_OVERVIEW_DATA,
} from '../../constants/components/billing/AdminBilling';
import SalesAnalysis from './SalesAnalysis';
import ProfitLossOverview from './ProfitLossOverview';
import TotalClientSupplier from './TotalClientSupplier';
import TopClientsByRevenue from './TopClientsByRevenue';
import CustomSeriesDatePicker from '../global/CustomSeriesDatePicker';
import { DATE_PICKER_VARIANTS } from '../../constants/components/globals/CustomSeriesDatePicker';
import { styles } from '../../styles/components/billing/AdminBilling';
import TotalClientsRevenue from './TotalClientsRevenue';

const AdminBilling = () => {
  const [open, setOpen] = useState(false);

  const [payload, setPayload] = useState({});

  const [pickerID, setPickerID] = useState('123');

  const [children, setChildren] = useState(<></>);

  const [openDatePicker, setOpenDatePicker] = useState(false);

  const anchorRef = useRef(null);

  const handleToggle = (id) =>
    setOpenDatePicker((prev) => !prev, setPickerID(id));

  const handleOpenChartModal = (component) => {
    setChildren(component);
    setOpen(true);
  };

  const handleCloseChartModal = () => {
    setOpen(false);
    setOpenDatePicker(false);
  };

  return (
    <>
      <Box sx={styles.outerBox}>
        <HeaderActions title={ADMIN_DASHBOARD.title} />
        {/* Top Row */}
        <Grid container gap={2}>
          {/* 4/5 Box */}
          <Grid item xs={12} sm={6} md={8.9}>
            <Card sx={styles.salesCard}>
              <SalesAnalysis
                chartData={CREDIT_USAGE_DATA}
                modalOpen={() =>
                  handleOpenChartModal(
                    <SalesAnalysis
                      chartData={CREDIT_USAGE_DATA}
                      btnTitle={ADMIN_BILLING.SalesAnalysis.btnTitle}
                      title={ADMIN_BILLING.SalesAnalysis.title}
                      color={ADMIN_BILLING.SalesAnalysis.color}
                      fillColor={ADMIN_BILLING.SalesAnalysis.fillColor}
                      totalSales={ADMIN_BILLING.SalesAnalysis.totalSales}
                      strokeWidth={ADMIN_BILLING.SalesAnalysis.strokeWidth}
                      curreny={ADMIN_BILLING.SalesAnalysis.curreny}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(ADMIN_BILLING.SalesAnalysis.pickerID)
                      }
                      anchorRef={anchorRef}
                    />
                  )
                }
                btnTitle={ADMIN_BILLING.SalesAnalysis.btnTitle}
                title={ADMIN_BILLING.SalesAnalysis.title}
                color={ADMIN_BILLING.SalesAnalysis.color}
                fillColor={ADMIN_BILLING.SalesAnalysis.fillColor}
                totalSales={ADMIN_BILLING.SalesAnalysis.totalSales}
                strokeWidth={ADMIN_BILLING.SalesAnalysis.strokeWidth}
                curreny={ADMIN_BILLING.SalesAnalysis.curreny}
                handleOpenChartModalDropDown={() =>
                  handleToggle(ADMIN_BILLING.SalesAnalysis.pickerID)
                }
                anchorRef={anchorRef}
                open={open}
                up={ADMIN_BILLING.SalesAnalysis.up}
                inPer={ADMIN_BILLING.SalesAnalysis.inper}
              />
            </Card>
            <Card sx={styles.profitLossCard}>
              <ProfitLossOverview
                data={PROFIT_LOSS_OVERVIEW_DATA}
                title={ADMIN_BILLING.ProfitLossOverview.title}
              />
            </Card>
          </Grid>

          {/* 1/5 Box */}
          <Grid item xs={12} md={2.9} sx={styles.rightColumn}>
            <Typography sx={styles.rightColumnTitle}>
              {ADMIN_BILLING.usage}
            </Typography>
            <Box sx={styles.rightColumnBox}>
              <Card sx={cardStyle}>
                <TopClientsByRevenue
                  open={open}
                  tableHeader={TOP_REVENUE_CLIENTS_TABLE_HEADERS}
                  handleOpenChartModalDropDown={() =>
                    handleToggle(ADMIN_BILLING.TopClientsByRevenue.pickerID)
                  }
                  anchorRef={anchorRef}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <TopClientsByRevenue
                        handleOpenChartModalDropDown={() =>
                          handleToggle(
                            ADMIN_BILLING.TopClientsByRevenue.pickerID
                          )
                        }
                        anchorRef={anchorRef}
                        tableHeader={TOP_REVENUE_CLIENTS_TABLE_HEADERS}
                        chartData={TOP_REVENUE_CLIENTS_CHARTS}
                        chartColors={TOP_REVENUE_CLIENTS_CHARTS_COLORS}
                        title={ADMIN_BILLING.TopClientsByRevenue.title}
                        dropdownLabel={
                          ADMIN_BILLING.TopClientsByRevenue.dropdownLabel
                        }
                      />
                    );
                  }}
                  chartData={TOP_REVENUE_CLIENTS_CHARTS}
                  chartColors={TOP_REVENUE_CLIENTS_CHARTS_COLORS}
                  title={ADMIN_BILLING.TopClientsByRevenue.title}
                  dropdownLabel={
                    ADMIN_BILLING.TopClientsByRevenue.dropdownLabel
                  }
                />
              </Card>
              <Card sx={cardStyle}>
                <TotalClientSupplier
                  open={open}
                  modalOpen={() => {
                    handleOpenChartModal(
                      <TotalClientSupplier
                        title={ADMIN_BILLING.TotalClientSupplier.title}
                        dropdownLabel={
                          ADMIN_BILLING.TotalClientSupplier.dropdownLabel
                        }
                        handleOpenChartModalDropDown={() =>
                          handleToggle(
                            ADMIN_BILLING.TotalClientSupplier.pickerID
                          )
                        }
                        centerValue={
                          ADMIN_BILLING.TotalClientSupplier.centerValue
                        }
                        clientLabel={
                          ADMIN_BILLING.TotalClientSupplier.clientLabel
                        }
                        supplierLabel={
                          ADMIN_BILLING.TotalClientSupplier.supplierLabel
                        }
                        anchorRef={anchorRef}
                        chartData={TOTAL_CLIENT_SUPPLIER_CHARTS}
                        chartColors={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS}
                        clientValue={TOTAL_CLIENT_SUPPLIER_CHARTS[1].value}
                        clientColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[1]}
                        supplierValue={TOTAL_CLIENT_SUPPLIER_CHARTS[0].value}
                        supplierColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[0]}
                        cardStyle={cardContentStyle}
                      />
                    );
                  }}
                  title={ADMIN_BILLING.TotalClientSupplier.title}
                  dropdownLabel={
                    ADMIN_BILLING.TotalClientSupplier.dropdownLabel
                  }
                  handleOpenChartModalDropDown={() =>
                    handleToggle(ADMIN_BILLING.TotalClientSupplier.pickerID)
                  }
                  centerValue={ADMIN_BILLING.TotalClientSupplier.centerValue}
                  clientLabel={ADMIN_BILLING.TotalClientSupplier.clientLabel}
                  supplierLabel={
                    ADMIN_BILLING.TotalClientSupplier.supplierLabel
                  }
                  anchorRef={anchorRef}
                  chartData={TOTAL_CLIENT_SUPPLIER_CHARTS}
                  chartColors={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS}
                  clientValue={TOTAL_CLIENT_SUPPLIER_CHARTS[1].value}
                  clientColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[1]}
                  supplierValue={TOTAL_CLIENT_SUPPLIER_CHARTS[0].value}
                  supplierColor={TOTAL_CLIENT_SUPPLIER_CHARTS_COLORS[0]}
                  cardStyle={cardContentStyle}
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.fullWidthBox}>
        <Grid container gap={2}>
          {/* 3/4 Box */}
          <Grid item xs={12} md={12} sx={styles.fullWidthGrid}>
            <TotalClientsRevenue
              title={ADMIN_BILLING.TotalClientsRevenue.title}
              tableHead={ADMIN_BILLING.TotalClientsRevenue.headers}
              tableData={CLIENTS_DATA}
            />
          </Grid>
        </Grid>
      </Box>

      <ChartsModal
        handleCloseChartModal={handleCloseChartModal}
        open={open}
        width={children?.type === SalesAnalysis ? 900 : 400}
      >
        {children}
      </ChartsModal>

      <Popper
        sx={styles.popper}
        open={openDatePicker}
        anchorEl={anchorRef.current}
        placement={'bottom-start'}
      >
        <ClickAwayListener
          onClickAway={() => {
            setOpenDatePicker(false);
          }}
        >
          <CustomSeriesDatePicker
            isSeries={true}
            variant={DATE_PICKER_VARIANTS.FULL}
            payload={payload}
            setPayload={setPayload}
            pickerID={pickerID}
            allowArrowNavigation={true}
            setOpen={setOpenDatePicker}
          />
        </ClickAwayListener>
      </Popper>
    </>
  );
};
AdminBilling.propTypes = {
  handleOpenChartModal: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default AdminBilling;
