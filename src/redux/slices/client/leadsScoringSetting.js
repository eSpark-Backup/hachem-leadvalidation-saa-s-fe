import { CLIENTS_LEADS_SCORING_SETTING } from '../../../api/apiEndPoints';
import { apiSlice } from '../../../api/apiSlice';

export const settingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchLeadScoringSettings: builder.query({
      query: () => ({
        url: CLIENTS_LEADS_SCORING_SETTING,
        method: 'GET',
      }),
    }),
    updateLeadScoringSettings: builder.mutation({
      query: (payload) => ({
        url: CLIENTS_LEADS_SCORING_SETTING,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  useFetchLeadScoringSettingsQuery,
  useUpdateLeadScoringSettingsMutation,
} = settingsApiSlice;
