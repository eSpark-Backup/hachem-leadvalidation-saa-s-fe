import { useLocation } from "react-router-dom";

const KlaienManagement = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default KlaienManagement;
