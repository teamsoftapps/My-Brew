import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../services/Urls";

export const UserAuth = createApi({
  reducerPath: "userAuth",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    SignInUser: builder.mutation({
      query: (body) => ({
        url: "/userLogin",
        method: "POST",
        body,
      }),
    }),
    SignUpUser: builder.mutation({
      query: (body) => ({
        url: "/userSignup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInUserMutation, useSignUpUserMutation } = UserAuth;
