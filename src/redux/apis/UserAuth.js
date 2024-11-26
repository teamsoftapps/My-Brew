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
        url: `/notes/${id}`,
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
  }),
});

export const {
  useSignInUserMutation,
  useSignUpUserMutation,
  useAddNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteMutation,
  useGetNoteMutation,
  useAddBrewsMutation,
  useDeleteBrewsMutation,
  useGetAllBrewsMutation,
} = UserAuth;
