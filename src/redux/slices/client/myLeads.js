import { CLIENTS_LEAD, SUPPLIER_LEADS } from '../../../api/apiEndPoints';
import { apiSlice } from '../../../api/apiSlice';

const getSettingsUrl = (type) =>
  type === 'supplier' ? SUPPLIER_LEADS : CLIENTS_LEAD;

export const clientLeadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // GET all client leads
    getLeads: builder.query({
      query: ({ type }) => ({
        url: getSettingsUrl(type),
        method: 'GET',
      }),
      providesTags: ['Leads'],
    }),

    // GET a single client lead by ID
    getLeadById: builder.query({
      query: ({ id, type }) => ({
        url: `${getSettingsUrl(type)}/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, { id }) => [{ type: 'Leads', id }],
    }),

    // CREATE a new client lead
    createLead: builder.mutation({
      query: ({ type, body }) => ({
        url: getSettingsUrl(type),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Leads'],
    }),

    // UPDATE an existing client lead
    updateLead: builder.mutation({
      query: ({ id, type, body }) => ({
        url: `${getSettingsUrl(type)}/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        'Leads',
        { type: 'Leads', id },
      ],
    }),

    // DELETE a client lead
    deleteLead: builder.mutation({
      query: ({ id, type }) => ({
        url: `${getSettingsUrl(type)}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { id }) => [
        'Leads',
        { type: 'Leads', id },
      ],
    }),
  }),
});

export const {
  useGetLeadsQuery,
  useGetLeadByIdQuery,
  useCreateLeadMutation,
  useUpdateLeadMutation,
  useDeleteLeadMutation,
} = clientLeadApiSlice;
