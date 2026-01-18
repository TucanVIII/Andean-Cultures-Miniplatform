import { apiSlice } from "../../app/api/apiSlice.js";

export const certificateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    generateCertificate: builder.mutation({
      query: () => ({
        url: "/certificate/generate",
        method: "POST",
        credentials: "include",
      }),
    }),
    getCertificatePdf: builder.query({
      query: () => ({
        url: "/certificate",
        method: "GET",
        credentials: "include",
        responseHandler: (response) => response.blob(),
      }),
    }),
  }),
});

export const { useGenerateCertificateMutation,useGetCertificatePdfQuery } = certificateApiSlice;
