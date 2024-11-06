import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `http://localhost:1337/`;

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: encodeURI(API_URL),
	}),
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		headers.set("content-type", `application/json`);
		if (token) headers.set("authorization", `Bearer ${token}`);
		return headers;
	},
	endpoints: () => ({}),
	tagTypes: ["Auth", "Student", "Project"],
});

export default api;
