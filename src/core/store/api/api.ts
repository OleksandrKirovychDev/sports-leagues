import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_BACKEND_URL } from 'core/constants/constants';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_BACKEND_URL,
  }),
  endpoints: () => ({}),
});
