import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/IUser";

//trk querry сервис, где описаны все методы с юзером
export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	tagTypes: ["User"],
	endpoints: (builder) => ({
		fetchAllUsers: builder.query<IUser[], number>({
			query: (limit: number = 10) => ({
				url: "/users",
				params: {
					_limit: limit,
				},
			}),
			providesTags: (result) => ["User"],
		}),
	}),
});
