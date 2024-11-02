import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => 'projects',
    }),
    getProjectById: builder.query({
      query: (id) => `projects/${id}`,
    }),
    updateProjectStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `projects/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
    }),
  }),
});

// Export the hooks
export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useUpdateProjectStatusMutation,
} = projectsApi;

// Make sure to export projectsApi
export default projectsApi;