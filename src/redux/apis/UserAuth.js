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

    ForgetPassword: builder.mutation({
      query: (body) => ({
        url: "/forgetPassword",
        method: "POST",
        body,
      }),
    }),

    VerifyOTp: builder.mutation({
      query: (body) => ({
        url: "/verifyOtp",
        method: "POST",
        body,
      }),
    }),

    ResetPassword: builder.mutation({
      query: ({ email, isPassword }) => ({
        url: `/resetPassword`,
        method: "POST",
        body: { email, isPassword },
      }),
    }),

    AddNote: builder.mutation({
      query: (body) => ({
        url: "/addNotes",
        method: "POST",
        body,
      }),
    }),

    DeleteNote: builder.mutation({
      query: (id) => ({
        url: `/deleteNotes/${id}`,
        method: "DELETE",
      }),
    }),

    updateNote: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/updateNotes/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),

    GetNote: builder.mutation({
      query: (body) => ({
        url: "/getNotes",
        method: "GET",
        body,
      }),
    }),

    AddBrews: builder.mutation({
      query: (body) => ({
        url: "/addBrew",
        method: "POST",
        body,
      }),
    }),

    DeleteBrews: builder.mutation({
      query: (id) => ({
        url: `/deleteBrew/${id}`,
        method: "DELETE",
      }),
    }),

    GetAllBrews: builder.mutation({
      query: (body) => ({
        url: "/getAllBrew",
        method: "GET",
        body,
      }),
    }),
    GetBrew: builder.mutation({
      query: (slug) => ({
        url: `/getBrew/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignInUserMutation,
  useSignUpUserMutation,
  useForgetPasswordMutation,
  useVerifyOTpMutation,
  useResetPasswordMutation,
  useAddNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteMutation,
  useGetNoteMutation,
  useAddBrewsMutation,
  useDeleteBrewsMutation,
  useGetAllBrewsMutation,
  useGetBrewMutation,
} = UserAuth;
