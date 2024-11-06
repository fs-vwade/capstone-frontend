// src/features/projects.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
	reducerPath: "projectsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) headers.set("authorization", `Bearer ${token}`);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => "projects",
			providesTags: ["Project"],
		}),
		getProject: builder.query({
			query: (id) => `projects/${id}`,
			providesTags: ["Project"],
		}),
		postEnrollment: builder.mutation({
			query: (id) => ({
				url: `projects/${id}`,
				method: "POST",
			}),
			invalidatesTags: ["Project"],
		}),
		putSubmission: builder.mutation({
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
	useGetProjectQuery,
	usePostEnrollmentMutation,
	usePutSubmissionMutation,
} = projectsApi;

export default projectsApi;
