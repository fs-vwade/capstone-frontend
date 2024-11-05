// api/studentSlice.js

import { createApi } from "@reduxjs/toolkit/query/react";

const studentSlice = createApi({
	reducerPath: "studentSlice",
	endpoints: (builder) => ({
		getStudent: builder.query({
			query: () => `info`,
			providesTags: ["Student"],
		}),
		getStudentByProfile: builder.query({
			query: (username) => `profile/${username}`,
			providesTags: ["Student"],
		}),
	}),
});

// Export the auto-generated hooks
export const { useGetStudentQuery, useGetStudentByProfileQuery } = studentSlice;

export default studentSlice;
