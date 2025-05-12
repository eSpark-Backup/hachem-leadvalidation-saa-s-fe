import PropTypes from 'prop-types';
import ClientCardHeader from './ClientCardHeader';
import { centerColumnBox } from '../../styles/components/report-analytics/ClientReports';
import DonutChart from '../charts/DonutChart';
import LeadsTable from '../charts/LeadsTable';
import { Box } from '@mui/material';

const ClientMostGenerateLeads = ({
  title,
  label,
  open,
  modalOpen,
  handleOpenChartModalDropDown,
  chartData,
  chartColors,
  tableData,
  tableHeaders,
  anchorRef,
}) => {
  return (
    <>
      <ClientCardHeader
        title={title}
        label={label}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
        anchorRef={anchorRef}
      />
      <Box sx={centerColumnBox}>
        <DonutChart data={chartData} colors={chartColors} />
      </Box>
      <Box sx={{ ...centerColumnBox, py: 1 }}>
        <LeadsTable data={tableData} headers={tableHeaders} />
      </Box>
    </>
  );
};
ClientMostGenerateLeads.propTypes = {
  title: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.any,
  modalOpen: PropTypes.any,
  handleOpenChartModalDropDown: PropTypes.any,
  chartData: PropTypes.any,
  chartColors: PropTypes.any,
  tableData: PropTypes.any,
  tableHeaders: PropTypes.any,
  anchorRef: PropTypes.any,
};

export default ClientMostGenerateLeads;
