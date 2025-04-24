import { useLocation } from "react-router-dom";

const LeadMonitoring = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default LeadMonitoring;
