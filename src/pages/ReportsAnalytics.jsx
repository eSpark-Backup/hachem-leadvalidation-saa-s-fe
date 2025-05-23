import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  copyReportDataToClipboard,
  downloadReportData,
} from '../utils/pages/reports/reports';

import ClientReports from '../components/report-analytics/pages/ClientReports';
import SupplierReports from '../components/report-analytics/pages/SupplierReports';

const TEXT = {
  userTypeKey: 'USER_TYPE',
};

const ReportsAnalytics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.client && USER_TYPE !== USER_TYPES.supplier) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  const handleDownload = () => downloadReportData(TEXT.userTypeKey);

  const handleCopy = () => copyReportDataToClipboard(TEXT.userTypeKey);

  if (USER_TYPE === USER_TYPES.supplier) {
    return (
      <SupplierReports
        handleCopy={handleCopy}
        handleDownload={handleDownload}
      />
    );
  }

  if (USER_TYPE === USER_TYPES.client) {
    return (
      <ClientReports handleCopy={handleCopy} handleDownload={handleDownload} />
    );
  }

  return null;
};

export default ReportsAnalytics;
