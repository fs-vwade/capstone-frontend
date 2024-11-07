import { createSlice } from "@reduxjs/toolkit";
import api from "./store/api";

const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: ({ username, password }) => ({
				url: `register`,
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: { username, password },
			}),
			transformResponse: (response) => response,
			invalidatesTags: ["Student"],
		}),
		login: builder.mutation({
			query: ({ username, password }) => ({
				url: `login`,
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: { username, password },
			}),
			transformResponse: (response) => response,
			invalidatesTags: ["Student"],
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

const TOKEN_KEY = "token";

const storeToken = (state, { payload }) => {
	state.token = payload.token;
	sessionStorage.setItem(TOKEN_KEY, payload.token);
};

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: sessionStorage.getItem(TOKEN_KEY),
		isAuthenticated: !!sessionStorage.getItem(TOKEN_KEY),
	},
	reducers: {
		setCredentials: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.isAuthenticated = true;
			sessionStorage.setItem(TOKEN_KEY, payload.token);
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			sessionStorage.removeItem(TOKEN_KEY);
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
		builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
	},
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
