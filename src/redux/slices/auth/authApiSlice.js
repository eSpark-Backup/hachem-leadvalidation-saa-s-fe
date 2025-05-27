import {
  GOOGLE,
  LOGIN,
  LOGOUT,
  PROFILE,
  REFRESH,
  REGISTER,
  RESEND_VERIFICATION,
  RESET_PASSWORD,
  RESET_REQUEST,
  VERIFY_EMAIL,
} from '../../../api/apiEndPoints';
import { apiSlice } from '../../../api/apiSlice';

import { logOut } from './authSlice';

import { handleLogout } from '../../../utils/auth';
import { navigate } from '../../../utils/navigateService';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: LOGIN,
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: REGISTER,
        method: 'POST',
        body,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (body) => ({
        url: VERIFY_EMAIL,
        method: 'POST',
        body,
      }),
    }),
    resendVerificationCode: builder.mutation({
      query: (body) => ({
        url: RESEND_VERIFICATION,
        method: 'POST',
        body,
      }),
    }),
    resetPasswordRequest: builder.mutation({
      query: (body) => ({
        url: RESET_REQUEST,
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: RESET_PASSWORD,
        method: 'POST',
        body,
      }),
    }),
    loginWithGoogle: builder.mutation({
      query: (body) => ({
        url: GOOGLE,
        method: 'POST',
        body,
      }),
    }),
    profile: builder.query({
      query: () => PROFILE,
    }),
    logout: builder.mutation({
      query: (body) => ({
        url: LOGOUT,
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());
          handleLogout(navigate);
        } catch {
          // ignore
        }
      },
    }),
    refresh: builder.mutation({
      query: (token) => ({
        url: REFRESH,
        method: 'POST',
        body: token,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
  useResendVerificationCodeMutation,
  useResetPasswordRequestMutation,
  useResetPasswordMutation,
  useLoginWithGoogleMutation,
  useProfileQuery,
  useLogoutMutation,
  useRefreshMutation,
} = authApiSlice;
