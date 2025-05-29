import { CLIENTS_SETTINGS } from '../../../api/apiEndPoints';
import { apiSlice } from '../../../api/apiSlice';

export const settingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => ({
        url: CLIENTS_SETTINGS,
        method: 'GET',
      }),
    }),
    updateSettings: builder.mutation({
      query: (body) => ({
        url: CLIENTS_SETTINGS,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetSettingsQuery, useUpdateSettingsMutation } =
  settingsApiSlice;
