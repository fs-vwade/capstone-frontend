import api from "./store/api";

const projectsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => "projects",
			transformResponse: ({ projects }) => projects,
		}),
		getProjectInfo: builder.query({
			query: (id) => ({
				url: `projects/${id}`,
				method: "GET",
			}),
			transformResponse: ({ project }) => project,
			providesTags: ["Project"],
		}),
		enroll: builder.mutation({
			query: ({ id }) => ({
				url: `projects/${id}`,
				method: "POST",
			}),
			transformResponse: (response) => response,
			invalidatesTags: ["Project"],
		}),
		submit: builder.mutation({
			query: ({ studentId, projectId, grade }) => ({
				url: `submissions`,
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: { studentId, projectId, grade },
			}),
			transformResponse: ({ evaluation }) => evaluation,
			invalidatesTags: ["Project"],
		}),
		resign: builder.mutation({
			query: ({ id }) => ({
				url: `projects/${id}`,
				method: "DELETE",
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
	useResignMutation,
} = projectsApi;

export default projectsApi;
