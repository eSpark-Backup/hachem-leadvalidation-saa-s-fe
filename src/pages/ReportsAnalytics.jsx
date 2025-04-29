import { useLocation } from 'react-router-dom';

const ReportsAnalytics = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default ReportsAnalytics;
