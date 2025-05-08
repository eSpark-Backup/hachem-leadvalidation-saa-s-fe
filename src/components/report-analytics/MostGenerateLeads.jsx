import { Card, CardContent } from '@mui/material';
import SupplierHeaderSection from './SupplierHeaderSection';
import PropTypes from 'prop-types';
import CenteredBox from './CenteredBox';
import DonutChartWithText from '../charts/DonutChartWithText';
import LeadsTable from '../charts/LeadsTable';

const MostGenerateLeads = ({
  open,
  modalOpen,
  handleOpenChartModalDropDown,
  title,
  buttonText,
  chartData,
  chartColors,
  tableData,
  tableHeaders,
}) => {
  return (
    <CardContent>
      <SupplierHeaderSection
        title={title}
        buttonText={buttonText}
        onClick={open === false ? modalOpen : handleOpenChartModalDropDown}
      />
      <CenteredBox>
        <DonutChartWithText data={chartData} colors={chartColors} />
      </CenteredBox>
      <CenteredBox py={1}>
        <LeadsTable data={tableData} headers={tableHeaders} />
      </CenteredBox>
    </CardContent>
  );
};

MostGenerateLeads.propTypes = {
  open: PropTypes.any,
  modalOpen: PropTypes.func,
  handleOpenChartModalDropDown: PropTypes.func,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  chartData: PropTypes.array,
  chartColors: PropTypes.array,
  tableData: PropTypes.array,
  tableHeaders: PropTypes.array,
};

export default MostGenerateLeads;
