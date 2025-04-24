import { useLocation } from "react-router-dom";

const UploadLeads = () => {
  const {pathname}= useLocation()
  return <>{pathname}</>;
};

export default UploadLeads;
