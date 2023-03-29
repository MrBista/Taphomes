import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const tapHomesApi = createApi({
  reducerPath: 'tapHomesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/register',
        method: 'post',
        // user data harus {email:'uus',password:'uuw',etc}
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = tapHomesApi;
