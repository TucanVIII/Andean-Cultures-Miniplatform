import { apiSlice } from "../../app/api/apiSlice.js";

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
        { type: "Section", id: arg.sectionId },
        { type: "User", id:"PROFILE"}
      ],
    }),
  }),
});

export const { useUpdateSectionProgressMutation } = progressApiSlice;
