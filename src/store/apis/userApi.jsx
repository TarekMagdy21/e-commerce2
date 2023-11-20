import { NEW_BASE_URL, BASE_HEADERS } from "../../configs/dataService";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${NEW_BASE_URL}/`,
    prepareHeaders: BASE_HEADERS,
  }),
  tagTypes: ["User"],
  endpoints: ({ query, mutation }) => ({
    postLogin: mutation({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { usePostLoginMutation } = userApi;
