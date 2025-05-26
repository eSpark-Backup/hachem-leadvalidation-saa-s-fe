// import { useGoogleLogin } from '@react-oauth/google';

import { Box } from '@mui/material';
import { AUTH_FORMS } from '../../constants/auth';
import { toast } from 'sonner';

const GoogleLoginWithCustomImage = () => {
  const { googlePic } = AUTH_FORMS || {};

  // const login = useGoogleLogin({
  //   flow: 'auth-code',
  //   onSuccess: async (tokenResponse) => {
  //     console.log('Access Token:', tokenResponse);

  //     // Fetch the id_token from Google's tokeninfo endpoint
  //     const res = await fetch(
  //       'https://www.googleapis.com/oauth2/v3/tokeninfo',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${tokenResponse.access_token}`,
  //         },
  //       }
  //     );

  //     const data = await res.json();
  //     console.log('ID Token Info:', data);
  //   },
  //   onError: (errorResponse) => {
  //     toast.error(`Login Failed: ${errorResponse}`);
  //   },
  //   scope: 'openid email profile',
  //   overrideScope: true,
  // });

  return (
    <Box
      component="img"
      src={googlePic}
      alt="Login with Google"
      sx={{ width: 40, height: 40, cursor: 'pointer' }}
      // onClick={() => login()}
    />
  );
};

export default GoogleLoginWithCustomImage;
