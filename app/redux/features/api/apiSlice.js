import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "FashionHouseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({
    getProductName: builder.query({
      query: () => "",
    }),

    addUserInfo: builder.mutation({
      query: (data) => ({
        url: "user/signup",
        method: "POST",
        body: data,
      }),
    }),

    UserLoginInfo: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) =>
        // console.log(response?.data?.token),
      localStorage.setItem("token", response?.data?.token),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductNameQuery,
  useAddUserInfoMutation,
  useUserLoginInfoMutation,
} = productApi;
