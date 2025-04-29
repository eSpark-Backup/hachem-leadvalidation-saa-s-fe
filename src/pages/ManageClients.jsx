import { useLocation } from 'react-router-dom';

const ManageClients = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default ManageClients;
