import {
  Box,
  Card,
  ClickAwayListener,
  Grid,
  Popper,
  Typography,
} from '@mui/material';
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
import { useRef, useState } from 'react';
import ChartsModal from '../../global/ChartsModal';
import ClientSupplierRatio from './ClientSupplierRatio';
import ClientTotalLeads from './ClientTotalLeads';
import SupplierTotalLeads from './SupplierTotalLeads';
import EngagementRatio from './EngagementRatio';
import FmoMonth from './FMOMonth';
import StatisticsCard from './StatisticsCard';
import CustomSeriesDatePicker from '../../global/CustomSeriesDatePicker';
import { DATE_PICKER_VARIANTS } from '../../../constants/components/globals/CustomSeriesDatePicker';
import { ADMIN_DASHBOARD } from '../../../constants/components/dashboard/AdminDashboard';

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState({});
  const [pickerID, setPickerID] = useState('123');
  const [children, setChildren] = useState(<></>);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const anchorRef = useRef(null);

  const handleOpenChartModal = (component) => {
    setChildren(component);
    setOpen(true);
  };
  const handleCloseChartModal = () => {
    setOpen(false);
    setOpenDatePicker(false);
  };

  const handleToggle = (id) =>
    setOpenDatePicker((prev) => !prev, setPickerID(id));

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
              {ADMIN_DASHBOARD.ClientTotalLeads.mainTitle}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card sx={cardStyle}>
                  <ClientTotalLeads
                    title={ADMIN_DASHBOARD.ClientTotalLeads.title}
                    btnTitle={ADMIN_DASHBOARD.ClientTotalLeads.btnTitle}
                    chartData={CLIENT_CHART}
                    open={open}
                    modalOpen={() =>
                      handleOpenChartModal(
                        <ClientTotalLeads
                          title={ADMIN_DASHBOARD.ClientTotalLeads.title}
                          btnTitle={ADMIN_DASHBOARD.ClientTotalLeads.btnTitle}
                          chartData={CLIENT_CHART}
                          modalOpen={() => handleOpenChartModal(<></>)}
                          handleOpenChartModalDropDown={() =>
                            handleToggle(
                              ADMIN_DASHBOARD.ClientTotalLeads.packerID
                            )
                          }
                          anchorRef={anchorRef}
                        />
                      )
                    }
                    handleOpenChartModalDropDown={() =>
                      handleToggle(ADMIN_DASHBOARD.ClientTotalLeads.packerID)
                    }
                    anchorRef={anchorRef}
                  />
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={cardStyle}>
                  <SupplierTotalLeads
                    title={ADMIN_DASHBOARD.SupplierTotalLeads.title}
                    btnTitle={ADMIN_DASHBOARD.SupplierTotalLeads.btnTitle}
                    chartData={SUPPLIER_CHART}
                    validColor={ADMIN_DASHBOARD.SupplierTotalLeads.validColor}
                    rejectColor={ADMIN_DASHBOARD.SupplierTotalLeads.rejectColor}
                    handleOpenChartModalDropDown={() =>
                      handleToggle(ADMIN_DASHBOARD.SupplierTotalLeads.packerID)
                    }
                    anchorRef={anchorRef}
                    open={open}
                    modalOpen={() =>
                      handleOpenChartModal(
                        <SupplierTotalLeads
                          title={ADMIN_DASHBOARD.SupplierTotalLeads.title}
                          btnTitle={ADMIN_DASHBOARD.SupplierTotalLeads.btnTitle}
                          chartData={SUPPLIER_CHART}
                          validColor={
                            ADMIN_DASHBOARD.SupplierTotalLeads.validColor
                          }
                          rejectColor={
                            ADMIN_DASHBOARD.SupplierTotalLeads.rejectColor
                          }
                          handleOpenChartModalDropDown={() =>
                            handleToggle(
                              ADMIN_DASHBOARD.SupplierTotalLeads.packerID
                            )
                          }
                          modalOpen={() => handleOpenChartModal(<></>)}
                          anchorRef={anchorRef}
                        />
                      )
                    }
                  />
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={cardStyle}>
                  <EngagementRatio
                    title={ADMIN_DASHBOARD.EngagementRatio.title}
                    btntitle={ADMIN_DASHBOARD.EngagementRatio.btntitle}
                    chartData={ENGAGEMENT_RATIO_CHARTS}
                    chartColors={ENGAGEMENT_RATIO_CHARTS_COLORS}
                    innerRadius={ADMIN_DASHBOARD.EngagementRatio.innerRadius}
                    outerRadius={ADMIN_DASHBOARD.EngagementRatio.outerRadius}
                    centerValue={ADMIN_DASHBOARD.EngagementRatio.centerValue}
                    centerLabel={ADMIN_DASHBOARD.EngagementRatio.centerLabel}
                    open={open}
                    handleOpenChartModalDropDown={() =>
                      handleToggle(ADMIN_DASHBOARD.EngagementRatio.packerID)
                    }
                    anchorRef={anchorRef}
                    modalOpen={() =>
                      handleOpenChartModal(
                        <EngagementRatio
                          title={ADMIN_DASHBOARD.EngagementRatio.title}
                          btntitle={ADMIN_DASHBOARD.EngagementRatio.btntitle}
                          chartData={ENGAGEMENT_RATIO_CHARTS}
                          chartColors={ENGAGEMENT_RATIO_CHARTS_COLORS}
                          innerRadius={
                            ADMIN_DASHBOARD.EngagementRatio.innerRadius
                          }
                          outerRadius={
                            ADMIN_DASHBOARD.EngagementRatio.outerRadius
                          }
                          centerValue={
                            ADMIN_DASHBOARD.EngagementRatio.centerValue
                          }
                          centerLabel={
                            ADMIN_DASHBOARD.EngagementRatio.centerLabel
                          }
                          handleOpenChartModalDropDown={() =>
                            handleToggle(
                              ADMIN_DASHBOARD.EngagementRatio.packerID
                            )
                          }
                          anchorRef={anchorRef}
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
              {ADMIN_DASHBOARD.usage}
            </Typography>

            <Card sx={cardStyle}>
              <FmoMonth
                open={open}
                title={ADMIN_DASHBOARD.FmoMonth.title}
                btnTitle={ADMIN_DASHBOARD.FmoMonth.btnTitle}
                centerValue={ADMIN_DASHBOARD.FmoMonth.centerValue}
                innerRadius={ADMIN_DASHBOARD.FmoMonth.innerRadius}
                outerRadius={ADMIN_DASHBOARD.FmoMonth.outerRadius}
                clientValue={ADMIN_DASHBOARD.FmoMonth.clientValue}
                clientChange={ADMIN_DASHBOARD.FmoMonth.clientChange}
                clientChangeDirection={
                  ADMIN_DASHBOARD.FmoMonth.clientChangeDirection
                }
                supplierValue={ADMIN_DASHBOARD.FmoMonth.supplierValue}
                supplierChange={ADMIN_DASHBOARD.FmoMonth.supplierChange}
                supplierChangeDirection={
                  ADMIN_DASHBOARD.FmoMonth.supplierChangeDirection
                }
                chartData={FMP_MONTH_CHARTS}
                chartColors={FMP_MONTH_CHARTS_COLORS}
                clientColor={FMP_MONTH_CHARTS_COLORS[1]}
                supplierColor={FMP_MONTH_CHARTS_COLORS[0]}
                anchorRef={anchorRef}
                handleOpenChartModalDropDown={() =>
                  handleToggle(ADMIN_DASHBOARD.FmoMonth.packerID)
                }
                modalOpen={() => {
                  handleOpenChartModal(
                    <FmoMonth
                      anchorRef={anchorRef}
                      title={ADMIN_DASHBOARD.FmoMonth.title}
                      btnTitle={ADMIN_DASHBOARD.FmoMonth.btnTitle}
                      centerValue={ADMIN_DASHBOARD.FmoMonth.centerValue}
                      innerRadius={ADMIN_DASHBOARD.FmoMonth.innerRadius}
                      outerRadius={ADMIN_DASHBOARD.FmoMonth.outerRadius}
                      clientValue={ADMIN_DASHBOARD.FmoMonth.clientValue}
                      clientChange={ADMIN_DASHBOARD.FmoMonth.clientChange}
                      clientChangeDirection={
                        ADMIN_DASHBOARD.FmoMonth.clientChangeDirection
                      }
                      supplierValue={ADMIN_DASHBOARD.FmoMonth.supplierValue}
                      supplierChange={ADMIN_DASHBOARD.FmoMonth.supplierChange}
                      supplierChangeDirection={
                        ADMIN_DASHBOARD.FmoMonth.supplierChangeDirection
                      }
                      chartData={FMP_MONTH_CHARTS}
                      chartColors={FMP_MONTH_CHARTS_COLORS}
                      clientColor={FMP_MONTH_CHARTS_COLORS[1]}
                      supplierColor={FMP_MONTH_CHARTS_COLORS[0]}
                      handleOpenChartModalDropDown={() =>
                        handleToggle(ADMIN_DASHBOARD.FmoMonth.packerID)
                      }
                    />
                  );
                }}
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
                    open={open}
                    title={ADMIN_DASHBOARD.ClientStatisticsCard.title}
                    showToggle={ADMIN_DASHBOARD.ClientStatisticsCard.showToggle}
                    totalLeads={ADMIN_DASHBOARD.ClientStatisticsCard.totalLeads}
                    totalLeadsLabel={
                      ADMIN_DASHBOARD.ClientStatisticsCard.totalLeadsLabel
                    }
                    totalLeadsChange={
                      ADMIN_DASHBOARD.ClientStatisticsCard.totalLeadsChange
                    }
                    totalLeadsChangeColor={
                      ADMIN_DASHBOARD.ClientStatisticsCard.totalLeadsChangeColor
                    }
                    totalLeadsChangeIcon={
                      ADMIN_DASHBOARD.ClientStatisticsCard.totalLeadsChangeIcon
                    }
                    totalLeadsChangeTime={
                      ADMIN_DASHBOARD.ClientStatisticsCard.totalLeadsChangeTime
                    }
                    rejectedLeads={
                      ADMIN_DASHBOARD.ClientStatisticsCard.rejectedLeads
                    }
                    rejectedLeadsLabel={
                      ADMIN_DASHBOARD.ClientStatisticsCard.rejectedLeadsLabel
                    }
                    rejectedLeadsChange={
                      ADMIN_DASHBOARD.ClientStatisticsCard.rejectedLeadsChange
                    }
                    rejectedLeadsChangeColor={
                      ADMIN_DASHBOARD.ClientStatisticsCard
                        .rejectedLeadsChangeColor
                    }
                    rejectedLeadsChangeIcon={
                      ADMIN_DASHBOARD.ClientStatisticsCard
                        .rejectedLeadsChangeIcon
                    }
                    handleOpenChartModalDropDown={() =>
                      handleToggle(
                        ADMIN_DASHBOARD.ClientStatisticsCard.packerID
                      )
                    }
                    anchorRef={anchorRef}
                    modalOpen={() => {
                      handleOpenChartModal(
                        <StatisticsCard
                          chartData={CLIENT_STATS_CHART}
                          title={ADMIN_DASHBOARD.ClientStatisticsCard.title}
                          showToggle={
                            ADMIN_DASHBOARD.ClientStatisticsCard.showToggle
                          }
                          totalLeads={
                            ADMIN_DASHBOARD.ClientStatisticsCard.totalLeads
                          }
                          totalLeadsLabel={
                            ADMIN_DASHBOARD.ClientStatisticsCard.totalLeadsLabel
                          }
                          totalLeadsChange={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .totalLeadsChange
                          }
                          totalLeadsChangeColor={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .totalLeadsChangeColor
                          }
                          totalLeadsChangeIcon={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .totalLeadsChangeIcon
                          }
                          totalLeadsChangeTime={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .totalLeadsChangeTime
                          }
                          rejectedLeads={
                            ADMIN_DASHBOARD.ClientStatisticsCard.rejectedLeads
                          }
                          rejectedLeadsLabel={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .rejectedLeadsLabel
                          }
                          rejectedLeadsChange={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .rejectedLeadsChange
                          }
                          rejectedLeadsChangeColor={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .rejectedLeadsChangeColor
                          }
                          rejectedLeadsChangeIcon={
                            ADMIN_DASHBOARD.ClientStatisticsCard
                              .rejectedLeadsChangeIcon
                          }
                          handleOpenChartModalDropDown={() =>
                            handleToggle(
                              ADMIN_DASHBOARD.ClientStatisticsCard.packerID
                            )
                          }
                          anchorRef={anchorRef}
                        />
                      );
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ p: 3, bgcolor: 'white', borderRadius: 3, boxShadow: 3 }}
                >
                  <StatisticsCard
                    chartData={SUPPLIER_STATS_CHART}
                    open={open}
                    title={ADMIN_DASHBOARD.SupplierStatisticsCard.title}
                    showToggle={
                      ADMIN_DASHBOARD.SupplierStatisticsCard.showToggle
                    }
                    totalLeads={
                      ADMIN_DASHBOARD.SupplierStatisticsCard.totalLeads
                    }
                    totalLeadsLabel={
                      ADMIN_DASHBOARD.SupplierStatisticsCard.totalLeadsLabel
                    }
                    totalLeadsChange={
                      ADMIN_DASHBOARD.SupplierStatisticsCard.totalLeadsChange
                    }
                    totalLeadsChangeIcon={
                      ADMIN_DASHBOARD.SupplierStatisticsCard
                        .totalLeadsChangeIcon
                    }
                    totalLeadsChangeTime={
                      ADMIN_DASHBOARD.SupplierStatisticsCard
                        .totalLeadsChangeTime
                    }
                    rejectedLeads={
                      ADMIN_DASHBOARD.SupplierStatisticsCard.rejectedLeads
                    }
                    rejectedLeadsLabel={
                      ADMIN_DASHBOARD.SupplierStatisticsCard.rejectedLeadsLabel
                    }
                    rejectedLeadsChange={
                      ADMIN_DASHBOARD.SupplierStatisticsCard.rejectedLeadsChange
                    }
                    rejectedLeadsChangeIcon={
                      ADMIN_DASHBOARD.SupplierStatisticsCard
                        .rejectedLeadsChangeIcon
                    }
                    handleOpenChartModalDropDown={() =>
                      handleToggle(
                        ADMIN_DASHBOARD.SupplierStatisticsCard.packerID
                      )
                    }
                    anchorRef={anchorRef}
                    modalOpen={() => {
                      handleOpenChartModal(
                        <StatisticsCard
                          chartData={SUPPLIER_STATS_CHART}
                          open={open}
                          title={ADMIN_DASHBOARD.SupplierStatisticsCard.title}
                          showToggle={
                            ADMIN_DASHBOARD.SupplierStatisticsCard.showToggle
                          }
                          totalLeads={
                            ADMIN_DASHBOARD.SupplierStatisticsCard.totalLeads
                          }
                          totalLeadsLabel={
                            ADMIN_DASHBOARD.SupplierStatisticsCard
                              .totalLeadsLabel
                          }
                          totalLeadsChange={
                            ADMIN_DASHBOARD.SupplierStatisticsCard
                              .totalLeadsChange
                          }
                          totalLeadsChangeIcon={
                            ADMIN_DASHBOARD.SupplierStatisticsCard
                              .totalLeadsChangeIcon
                          }
                          totalLeadsChangeTime={
                            ADMIN_DASHBOARD.SupplierStatisticsCard
                              .totalLeadsChangeTime
                          }
                          rejectedLeads={
                            ADMIN_DASHBOARD.SupplierStatisticsCard.rejectedLeads
                          }
                          rejectedLeadsLabel={
                            ADMIN_DASHBOARD.SupplierStatisticsCard
                              .rejectedLeadsLabel
                          }
                          rejectedLeadsChange={
                            ADMIN_DASHBOARD.SupplierStatisticsCard
                              .rejectedLeadsChange
                          }
                          rejectedLeadsChangeIcon={
                            ADMIN_DASHBOARD.SupplierStatisticsCard
                              .rejectedLeadsChangeIcon
                          }
                          handleOpenChartModalDropDown={() =>
                            handleToggle(
                              ADMIN_DASHBOARD.SupplierStatisticsCard.packerID
                            )
                          }
                          anchorRef={anchorRef}
                        />
                      );
                    }}
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
                title={ADMIN_DASHBOARD.ClientSupplierRatio.title}
                chartData={CLIENT_SUPPLIER_RATIO_CHARTS}
                chartColors={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS}
                clientColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[1]}
                supplierColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[0]}
                clientLegnedTitle={
                  ADMIN_DASHBOARD.ClientSupplierRatio.clientLegnedTitle
                }
                supplierLegnedTitle={
                  ADMIN_DASHBOARD.ClientSupplierRatio.supplierLegnedTitle
                }
                centerImageUrl={
                  ADMIN_DASHBOARD.ClientSupplierRatio.centerImageUrl
                }
                clientValue={ADMIN_DASHBOARD.ClientSupplierRatio.clientValue}
                supplierValue={
                  ADMIN_DASHBOARD.ClientSupplierRatio.supplierValue
                }
                handleOpenChartModalDropDown={() =>
                  handleToggle(ADMIN_DASHBOARD.ClientSupplierRatio.packerID)
                }
                anchorRef={anchorRef}
                open={open}
                modalOpen={() =>
                  handleOpenChartModal(
                    <ClientSupplierRatio
                      title={ADMIN_DASHBOARD.ClientSupplierRatio.title}
                      chartData={CLIENT_SUPPLIER_RATIO_CHARTS}
                      chartColors={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS}
                      clientColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[1]}
                      supplierColor={CLIENT_SUPPLIER_RATIO_CHARTS_COLORS[0]}
                      clientLegnedTitle={
                        ADMIN_DASHBOARD.ClientSupplierRatio.clientLegnedTitle
                      }
                      supplierLegnedTitle={
                        ADMIN_DASHBOARD.ClientSupplierRatio.supplierLegnedTitle
                      }
                      centerImageUrl={
                        ADMIN_DASHBOARD.ClientSupplierRatio.centerImageUrl
                      }
                      clientValue={
                        ADMIN_DASHBOARD.ClientSupplierRatio.clientValue
                      }
                      modalOpen={() => handleOpenChartModal(<></>)}
                      supplierValue={
                        ADMIN_DASHBOARD.ClientSupplierRatio.supplierValue
                      }
                      handleOpenChartModalDropDown={() =>
                        handleToggle(
                          ADMIN_DASHBOARD.ClientSupplierRatio.packerID
                        )
                      }
                      anchorRef={anchorRef}
                    />
                  )
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <ChartsModal handleCloseChartModal={handleCloseChartModal} open={open}>
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
            allowArrowNavigation={true}
            setOpen={setOpenDatePicker}
            payload={payload}
            setPayload={setPayload}
            pickerID={pickerID}
          />
        </ClickAwayListener>
      </Popper>
    </>
  );
};
AdminDashboard.propTypes = {
  handleOpenChartModal: PropTypes.any,
};

export default AdminDashboard;
