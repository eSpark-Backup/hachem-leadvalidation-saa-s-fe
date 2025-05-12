import { Box, Card, ClickAwayListener, Grid, Popper } from '@mui/material';
import PropTypes from 'prop-types';
import { CLIENT_REPORTS_ANALYTICS } from '../../../constants/pages/ReportsAnalytics';
import {
  ACTIVE_SUPPLIER_CHART,
  COLORS,
} from '../../../constants/components/charts/ActiveSupplierChart';
import {
  CLIENT_HEADERS,
  CLIENT_LEADS_TABLE,
} from '../../../constants/components/charts/LeadsTable';

import {
  PIE_COUNTRIES_CHARTS,
  PIE_COUNTRIES_CHARTS_COLORS,
} from '../../../constants/components/charts/PieCharts';
import { CREDIT_USAGE_DATA } from '../../../constants/components/charts/SingleLineChart2';
import { LEADS_USAGE_DATA } from '../../../constants/components/charts/SingleLineChart';
import { WEEKLY_CREDIT_SCORE } from '../../../constants/components/charts/WeeklyCreditScore';
import {
  DATA_LAST_MONTH,
  DATA_THIS_MONTH,
} from '../../../constants/components/charts/SupplierBreadkDown';
import SupplierBreakdown from '../../charts/SupplierBreadkDown';
import MultiLineChart from '../../charts/MultiLineChart';
import HeaderActions from '../HeaderActions';
import SupplierPerformance from '../../dashboard/SupplierPerformance';

import ReportCard from '../ReportCard';
import {
  CLIENT_REPORTS,
  styles,
} from '../../../constants/components/reports/ClientReports';
import CustomBarChart from '../../charts/CustomBarChart';
import DotedLineChart from '../../charts/DotedLineChart';
import { useRef, useState } from 'react';
import ChartsModal from '../../global/ChartsModal';
import CreditUsage from '../CreditUsage';
import ClientCardWrapper from '../ClientCardWrapper';
import CustomSeriesDatePicker from '../../global/CustomSeriesDatePicker';
import { DATE_PICKER_VARIANTS } from '../../../constants/components/globals/CustomSeriesDatePicker';
import ClientMostGenerateLeads from '../ClientMostGenerateLeads';

const ClientReports = ({ handleDownload }) => {
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

  const {
    reportCards,
    creditUsage,
    mostGenerateLeads,
    clientsMostGenerateLeads,
  } = CLIENT_REPORTS;

  return (
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
      <Box sx={styles.section}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={styles.card}>
              <ReportCard
                title={reportCards.activeSuppliers.title}
                value={reportCards.activeSuppliers.value}
                handleOpenChartModalDropDown={() =>
                  handleToggle(reportCards.activeSuppliers.packerID)
                }
                anchorRef={anchorRef}
                chartComponent={MultiLineChart}
                chartProps={{
                  data: ACTIVE_SUPPLIER_CHART,
                  colors: COLORS,
                }}
                label={reportCards.activeSuppliers.label}
                open={open}
                modalOpen={() => {
                  handleOpenChartModal(
                    <ReportCard
                      title={reportCards.activeSuppliers.title}
                      value={reportCards.activeSuppliers.value}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(reportCards.activeSuppliers.packerID)
                      }
                      anchorRef={anchorRef}
                      chartComponent={MultiLineChart}
                      chartProps={{
                        data: ACTIVE_SUPPLIER_CHART,
                        colors: COLORS,
                      }}
                      label={reportCards.activeSuppliers.label}
                    />
                  );
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={styles.card}>
              <ReportCard
                title={reportCards.supplierBreakdown.title}
                value={reportCards.supplierBreakdown.value}
                chartComponent={SupplierBreakdown}
                chartProps={{
                  dataLastMonth: DATA_LAST_MONTH,
                  dataThisMonth: DATA_THIS_MONTH,
                }}
                label={reportCards.supplierBreakdown.label}
                open={open}
                handleOpenChartModalDropDown={() =>
                  handleToggle(reportCards.supplierBreakdown.packerID)
                }
                anchorRef={anchorRef}
                modalOpen={() => {
                  handleOpenChartModal(
                    <ReportCard
                      title={reportCards.supplierBreakdown.title}
                      value={reportCards.supplierBreakdown.value}
                      chartComponent={SupplierBreakdown}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(reportCards.supplierBreakdown.packerID)
                      }
                      anchorRef={anchorRef}
                      chartProps={{
                        dataLastMonth: DATA_LAST_MONTH,
                        dataThisMonth: DATA_THIS_MONTH,
                      }}
                      label={reportCards.supplierBreakdown.label}
                    />
                  );
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={styles.card}>
              <ReportCard
                title={reportCards.weeklyCreditScore.title}
                value={reportCards.weeklyCreditScore.value}
                chartComponent={CustomBarChart}
                chartProps={{ data: WEEKLY_CREDIT_SCORE, barColor: '#8884d8' }}
                label={reportCards.weeklyCreditScore.label}
                open={open}
                handleOpenChartModalDropDown={() =>
                  handleToggle(reportCards.weeklyCreditScore.packerID)
                }
                anchorRef={anchorRef}
                modalOpen={() => {
                  handleOpenChartModal(
                    <ReportCard
                      title={reportCards.weeklyCreditScore.title}
                      value={reportCards.weeklyCreditScore.value}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(reportCards.weeklyCreditScore.packerID)
                      }
                      anchorRef={anchorRef}
                      chartComponent={CustomBarChart}
                      chartProps={{
                        data: WEEKLY_CREDIT_SCORE,
                        barColor: '#8884d8',
                      }}
                      label={reportCards.weeklyCreditScore.label}
                    />
                  );
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={styles.card}>
              <ReportCard
                title={reportCards.leadUsage.title}
                value={reportCards.leadUsage.value}
                chartComponent={DotedLineChart}
                chartProps={{
                  data: LEADS_USAGE_DATA,
                  color: '#0FAF62',
                  fillColor: '#0FAF62',
                  height: 250,
                }}
                label={reportCards.leadUsage.label}
                open={open}
                handleOpenChartModalDropDown={() =>
                  handleToggle(reportCards.leadUsage.packerID)
                }
                anchorRef={anchorRef}
                modalOpen={() => {
                  handleOpenChartModal(
                    <ReportCard
                      title={reportCards.leadUsage.title}
                      value={reportCards.leadUsage.value}
                      chartComponent={DotedLineChart}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(reportCards.leadUsage.packerID)
                      }
                      anchorRef={anchorRef}
                      chartProps={{
                        data: LEADS_USAGE_DATA,
                        color: '#0FAF62',
                        fillColor: '#0FAF62',
                      }}
                      label={reportCards.leadUsage.label}
                    />
                  );
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={9}>
            <ClientCardWrapper sx={styles.clientCardWrapper}>
              <CreditUsage
                title={creditUsage.title}
                label={creditUsage.label}
                chartData={CREDIT_USAGE_DATA}
                chartColor="#0E5FD9"
                fillColor="#CFDFF7"
                strokeWidth={3.38}
                open={open}
                handleOpenChartModalDropDown={() =>
                  handleToggle(creditUsage.packerID)
                }
                anchorRef={anchorRef}
                modalOpen={() => {
                  handleOpenChartModal(
                    <CreditUsage
                      title={creditUsage.title}
                      label={creditUsage.label}
                      chartData={CREDIT_USAGE_DATA}
                      chartColor="#0E5FD9"
                      fillColor="#CFDFF7"
                      strokeWidth={3.38}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(creditUsage.packerID)
                      }
                      anchorRef={anchorRef}
                    />
                  );
                }}
              />
            </ClientCardWrapper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ClientCardWrapper>
              <ClientMostGenerateLeads
                title={mostGenerateLeads.title}
                label={mostGenerateLeads.label}
                open={open}
                chartData={PIE_COUNTRIES_CHARTS}
                chartColors={PIE_COUNTRIES_CHARTS_COLORS}
                tableData={CLIENT_LEADS_TABLE}
                tableHeaders={CLIENT_HEADERS}
                anchorRef={anchorRef}
                handleOpenChartModalDropDown={() =>
                  handleToggle(clientsMostGenerateLeads)
                }
                modalOpen={() => {
                  handleOpenChartModal(
                    <ClientMostGenerateLeads
                      title={mostGenerateLeads.title}
                      label={mostGenerateLeads.label}
                      chartData={PIE_COUNTRIES_CHARTS}
                      chartColors={PIE_COUNTRIES_CHARTS_COLORS}
                      tableData={CLIENT_LEADS_TABLE}
                      tableHeaders={CLIENT_HEADERS}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(clientsMostGenerateLeads)
                      }
                      anchorRef={anchorRef}
                    />
                  );
                }}
              />
            </ClientCardWrapper>
          </Grid>
        </Grid>
      </Box>

      <SupplierPerformance data={ACTIVE_SUPPLIER_CHART} />

      <ChartsModal
        handleCloseChartModal={handleCloseChartModal}
        open={open}
        width={children?.type === CreditUsage ? 800 : 400}
      >
        {children}
      </ChartsModal>

      <Popper
        sx={{ zIndex: 99999 }}
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
    </Box>
  );
};

ClientReports.propTypes = {
  handleDownload: PropTypes.func,
  handleOpenChartModal: PropTypes.func,
};

export default ClientReports;
