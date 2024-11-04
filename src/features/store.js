// src/features/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import { projectsApi } from './projects';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [projectsApi.reducerPath]: projectsApi.reducer, // Add the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware), // Add the API middleware
});

export default store;