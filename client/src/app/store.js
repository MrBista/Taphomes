import { configureStore } from '@reduxjs/toolkit';
import { tapHomesApi } from '../redux/services/taphomes';

export const store = configureStore({
  reducer: {
    [tapHomesApi.reducerPath]: tapHomesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tapHomesApi.middleware),
});
