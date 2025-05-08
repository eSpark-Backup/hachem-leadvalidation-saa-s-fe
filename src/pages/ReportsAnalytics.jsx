import { USER_TYPE } from '../utils/auth';
import { USER_TYPES } from '../constants/components/globals/Auth';
import SupplierReports from '../components/report-analytics/SupplierReports';
import ClientReports from '../components/report-analytics/ClientReports';
import {
  copyReportDataToClipboard,
  downloadReportData,
} from '../utils/pages/reports/reports';
import NotFound from './NotFound';

const ReportsAnalytics = () => {
  const handleDownload = () => downloadReportData('USER_TYPE');
  const handleCopy = () => copyReportDataToClipboard('USER_TYPE');
  return (
    <>
      {USER_TYPE === USER_TYPES.supplier ? (
        <SupplierReports
          handleCopy={handleCopy}
          handleDownload={handleDownload}
        />
      ) : USER_TYPE === USER_TYPES.client ? (
        <ClientReports
          handleCopy={handleCopy}
          handleDownload={handleDownload}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ReportsAnalytics;
