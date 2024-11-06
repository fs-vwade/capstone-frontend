// src/features/store.js
import { configureStore } from "@reduxjs/toolkit";

import api from "./api";
import authReducer from "../authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[api.reducerPath]: api.reducer, // Add the API reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware), // Add the API middleware
});

export default store;
