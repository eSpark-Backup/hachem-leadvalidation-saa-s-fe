import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import NotFound from './NotFound';
import { useLocation } from 'react-router-dom';
const SystemSetting = () => {
  const { pathname } = useLocation();

  return (
    <>
      {USER_TYPE === USER_TYPES.admin ? (
        <>{pathname}</>
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}
    </>
  );
};

export default SystemSetting;
