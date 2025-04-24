import { useLocation } from "react-router-dom";

const Settings = () => {
   const { pathname } = useLocation();
   return <>{pathname}</>;
};

export default Settings;
