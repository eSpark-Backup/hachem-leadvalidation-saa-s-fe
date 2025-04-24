import { useLocation } from 'react-router-dom';

const LeadScoringSetting = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default LeadScoringSetting;
