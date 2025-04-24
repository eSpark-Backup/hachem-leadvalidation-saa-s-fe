import { useLocation } from "react-router-dom";

const SystemSetting = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default SystemSetting;
