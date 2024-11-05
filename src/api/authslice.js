import { createSlice } from "@reduxjs/toolkit";
import api from 
// not done with writing out api

//user account endpoints?*
const authApi = api.injectEndpoints ({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => "/users/me",
            providesTags: ["User"],
             //may need to change this
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: "/users/register",
                // may need to change this
                method: "POST",
                body: credentials,
            }),
            transformErrorResponse: (response) => response.data.message,
            invalidatesTags: ["User"],
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/users/login",
                // may need to change this
                method: "POST",
                body: credentials,
            }),
            transformErrorReponse: (response) => response.data.message,
            invalidatesTags: ["User"],
        }),
    }),
}),

