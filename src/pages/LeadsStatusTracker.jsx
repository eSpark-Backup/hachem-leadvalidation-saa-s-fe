import { useLocation } from 'react-router-dom';

const LeadsStatusTracker = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default LeadsStatusTracker;
