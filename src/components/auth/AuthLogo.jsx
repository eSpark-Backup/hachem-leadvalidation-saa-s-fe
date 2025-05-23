import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { AUTH_FORMS } from '../../constants/auth';
import { ROUTES } from '../../constants/components/globals/Auth';

import AuthLogoStyles from '../../styles/components/auth/AuthLogo';

const AuthLogo = () => {
  const { splash } = ROUTES || {};

  const { pathname } = useLocation();

  const { auth_image } = AUTH_FORMS;

  return (
    <Box
      src={auth_image}
      component={'img'}
      sx={AuthLogoStyles(pathname, splash)}
    />
  );
};

export default AuthLogo;
