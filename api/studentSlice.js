import api from "./store/api";

const studentApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getStudent: builder.query({
			query: () => `info`,
			providesTags: ["Student"],
		}),
		getProfile: builder.query({
			query: (username) => `profile/${username}`,
			providesTags: ["Student"],
		}),
	}),
});

// Export the auto-generated hooks
export const { useGetStudentQuery, useGetProfileQuery } = studentApi;

export default studentApi;
