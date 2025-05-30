import { CLIENTS_SETTINGS, SUPPLIER_SETTINGS } from '../../../api/apiEndPoints';
import { apiSlice } from '../../../api/apiSlice';

const getSettingsUrl = (type) =>
  type === 'supplier' ? SUPPLIER_SETTINGS : CLIENTS_SETTINGS;

export const settingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: (type = 'client') => ({
        url: getSettingsUrl(type),
        method: 'GET',
      }),
    }),
    updateSettings: builder.mutation({
      query: ({ type = 'client', body }) => ({
        url: getSettingsUrl(type),
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetSettingsQuery, useUpdateSettingsMutation } =
  settingsApiSlice;
