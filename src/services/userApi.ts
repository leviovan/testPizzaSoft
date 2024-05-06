import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface UserState {
    id: number
    name: string
    isArchive: boolean
    role: string
    phone: string
    birthday: string
}


export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) =>  ({
    getUser: builder.query<UserState[], string>({
      query: () => `/users` ,
    }),
  }),
})


export const { useGetUserQuery } = usersApi