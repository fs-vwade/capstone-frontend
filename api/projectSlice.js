// src/features/projects.js
import { createApi } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
	reducerPath: "projectsApi",
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => "projects",
			providesTags: ["Project"],
		}),
		getProjectById: builder.query({
			query: (id) => `projects/${id}`,
			providesTags: ["Project"],
		}),
		updateProjectSubmit: builder.mutation({
			query: ({ submission }) => ({
				url: `submissions`,
				method: "PUT",
				body: {
					studentId: submission.studentId,
					projectId: submission.projectId,
					grade: submission.grade,
				},
			}),
			invalidatesTags: ["Project"],
		}),
	}),
});

// Export the auto-generated hooks
export const {
	useGetProjectsQuery,
	useGetProjectByIdQuery,
	useUpdateProjectSubmitMutation,
} = projectsApi;

export default projectsApi;
