import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: (result) =>
        result.map((user) => ({ type: "User", id: user.id })),
    }),
    getUser: builder.query({
      query: (id) => `users/${id}`,
      providesTags: (result) => [{ type: "User", id: result.id }],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `users/${user.id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = api;
