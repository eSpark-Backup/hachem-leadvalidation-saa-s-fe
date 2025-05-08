import { CardContent } from '@mui/material';
import SupplierHeaderSection from './SupplierHeaderSection';
import SingleLineChart2 from '../charts/SingleLineChart2';
import { LEADS_OVERVIEW_CHART2 } from '../../constants/components/charts/SingleLineChart2';
import { DASHBOARD_TEXT } from '../../constants/components/reports/SupplierReports';
import { cardContentStyle } from '../../styles/components/report-analytics/SupplierReports';
import PropTypes from 'prop-types';
const LeadsOverview = ({ open, modalOpen, handleOpenChartModalDropDown }) => {
  return (
    <CardContent sx={cardContentStyle}>
      <SupplierHeaderSection
        title={DASHBOARD_TEXT.LEADS_OVERVIEW}
        buttonText={DASHBOARD_TEXT.THIS_YEAR}
        onClick={open == false ? modalOpen : handleOpenChartModalDropDown}
      />
      <SingleLineChart2
        data={LEADS_OVERVIEW_CHART2}
        color="#09102B"
        fillColor="#136BE5"
        strokeWidth={3.38}
      />
    </CardContent>
  );
};
LeadsOverview.propTypes = {
  open: PropTypes.any,
  modalOpen: PropTypes.any,
  handleOpenChartModalDropDown: PropTypes.any,
};
export default LeadsOverview;
