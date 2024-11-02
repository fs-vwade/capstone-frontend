import { configureStore } from '@reduxjs/toolkit';
import projectsApi from './projects';
import authReducer from './auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});

export default store;