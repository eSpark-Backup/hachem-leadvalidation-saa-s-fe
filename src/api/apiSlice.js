import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { toast } from 'sonner';

import { REFRESH } from './apiEndPoints';

import { setCredentials, logOut } from '../redux/slices/auth/authSlice';

import { navigate } from '../utils/navigateService';
import { handleLogout } from '../utils/auth';

const baseURL = import.meta.env.VITE_API_URL;
const authenticateMessages = [
  'Invalid or expired access token',
  'Invalid token',
];

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) headers.set('authorization', `Bearer ${token}`);

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const is401 = result?.error?.status === 401;
  const isExpiredToken = authenticateMessages.includes(
    result?.error?.data?.message
  );

  if (is401 && isExpiredToken) {
    const user = api.getState().auth.user;
    const refreshToken = api.getState().auth.token;

    const refreshResult = await baseQuery(
      { url: REFRESH, method: 'POST', body: { refreshToken } },
      api,
      extraOptions
    );

    if (refreshResult?.data?.success) {
      api.dispatch(setCredentials({ ...refreshResult?.data?.tokens, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      toast.error('Your session has expired. Please log in again.');

      api.dispatch(logOut());
      handleLogout(navigate);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
