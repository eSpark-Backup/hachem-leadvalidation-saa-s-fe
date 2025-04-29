import { useLocation } from 'react-router-dom';

const MyLeads = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default MyLeads;
