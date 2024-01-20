import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.lastnewsbd.com/api/v1",
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
