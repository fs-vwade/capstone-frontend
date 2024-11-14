import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.API_URL;

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: encodeURI(API_URL),
		prepareHeaders: (headers, { getState, endpoint }) => {
			const token = getState().auth.token;
			const isPublic = ["register", "login", "profile"].includes(endpoint);

			token && !isPublic && headers.set("authorization", `Bearer ${token}`);
			return headers;
		},
	}),
	endpoints: () => ({}),
	tagTypes: ["Auth", "Student", "Project"],
});

export default api;
