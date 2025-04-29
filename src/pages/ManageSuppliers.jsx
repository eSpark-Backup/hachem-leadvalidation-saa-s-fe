import { useLocation } from 'react-router-dom';

const ManageSuppliers = () => {
  const { pathname } = useLocation();
  return <>{pathname}</>;
};

export default ManageSuppliers;
