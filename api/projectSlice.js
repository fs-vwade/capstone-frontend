import api from "./store/api";

const projectsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => "projects",
			transformResponse: (response) => response,
		}),
		getProjectInfo: builder.query({
			query: (id) => `projects/${id}`,
			transformResponse: (response) => response,
			providesTags: ["Project"],
		}),
		enroll: builder.mutation({
			query: (id) => ({
				url: `projects/${id}`,
				method: "POST",
			}),
			transformResponse: (response) => response,
			invalidatesTags: ["Project"],
		}),
		submit: builder.mutation({
			query: ({ submission }) => ({
				url: `submissions`,
				method: "PUT",
				body: {
					studentId: submission.studentId,
					projectId: submission.projectId,
					grade: submission.grade,
				},
			}),
			transformResponse: (response) => response,
			invalidatesTags: ["Project"],
		}),
	}),
});

// Export the auto-generated hooks
export const {
	useGetProjectsQuery,
	useGetProjectInfoQuery,
	useEnrollMutation,
	useSubmitMutation,
} = projectsApi;

export default projectsApi;
