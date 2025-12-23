import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:8000/api/v2"}),
    tagTypes: ["Section","User","Question","Quiz"],
    endpoints: builders => ({})
})
