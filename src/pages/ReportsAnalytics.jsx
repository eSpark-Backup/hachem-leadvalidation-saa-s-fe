import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';

import { useState } from 'react';
import SupplierReports from '../components/report-analytics/SupplierReports';
import ClientReports from '../components/report-analytics/ClientReports';
import ChartsModal from '../components/report-analytics/ChartsModal';
import {
  copyReportDataToClipboard,
  downloadReportData,
} from '../utils/reports/reports';
import { NOT_FOUND_PAGE } from '../constants/pages/NotFound';
import NotFound from './NotFound';

const ReportsAnalytics = () => {
  const handleDownload = () => downloadReportData(USER_TYPE);
  const handleCopy = () => copyReportDataToClipboard(USER_TYPE);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {USER_TYPE === USER_TYPES.supplier ? (
        <SupplierReports
          handleOpen={handleOpen}
          handleCopy={handleCopy}
          handleDownload={handleDownload}
        />
      ) : USER_TYPE === USER_TYPES.client ? (
        <ClientReports
          handleOpen={handleOpen}
          handleCopy={handleCopy}
          handleDownload={handleDownload}
        />
      ) : (
        <NotFound />
      )}
      <ChartsModal handleClose={handleClose} open={open} />
    </>
  );
};

export default ReportsAnalytics;
