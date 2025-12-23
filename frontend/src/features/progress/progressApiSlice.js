import { apiSlice } from "../../app/api/apiSlice";

export const progressApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateSectionProgress: builder.mutation({
      query: ({ sectionId, isTheory, isVideo }) => ({
        url: `/users/progress/${sectionId}`,
        method: "PATCH",
        body: {
          isTheory,
          isVideo,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "Section",
          id: arg.sectionId,
        },
      ],
    }),
  }),
});

export const { useUpdateSectionProgressMutation } = sectionsApiSlice;
