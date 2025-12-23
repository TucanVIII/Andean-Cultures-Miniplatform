import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const questionsAdapter = createEntityAdapter({
  selectId: (question) => question._id,
});

const initialState = questionsAdapter.getInitialState();

export const questionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuestions: builder.query({
      query: (filter = {}) => {
        const queryParams = new URLSearchParams(filter).toString();
        return `/questions${queryParams ? `?${queryParams}` : ""}`;
      },
      transformResponse: (responseData) => {
        return questionsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result,error,arg) =>
        result?.ids
          ? [
              { type: "Question", id: `LIST-${arg?.sectionId}` },
              ...result.ids.map((id) => ({ type: "Question", id })),
            ]
          : [{ type: "Question", id: `LIST-${arg?.sectionId}` }],
    }),
    addNewQuestion: builder.mutation({
      query: (initialQuestionData) => ({
        url: "/questions",
        method: "POST",
        body: { ...initialQuestionData },
      }),
      invalidatesTags: (result,error,arg)=> [
        { type: "Question", id: `LIST-${arg?.sectionId}` }
      ],
    }),
    updateQuestion: builder.mutation({
      query: (initialQuestionData) => ({
        url: "/questions",
        method: "PATCH",
        body: { ...initialQuestionData },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Question", id: arg.id },
        { type: "Question", id: `LIST-${arg.sectionId}` },
      ],
    }),
    deleteQuestion: builder.mutation({
      query: ({ id }) => ({
        url: "/questions",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Question", id: arg.id },
        { type: "Question", id: `LIST-${arg.sectionId}` }
      ],
    }),
    getQuizQuestion: builder.query({
      query: (sectionId) => `questions/quiz/${sectionId}`,
      providesTags: (result, error, sectionId) => [
        { type: "Question", id: sectionId },
      ],
    }),
  }),
});

export const {
  useGetAllQuestionsQuery,
  useAddNewQuestionMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
  useGetQuizQuestionQuery,
} = questionsApiSlice;

export const selectQuestionsResult =
  questionsApiSlice.endpoints.getAllQuestions.select();

const selectQuestionsData = createSelector(
  selectQuestionsResult,
  (questionsResult) => questionsResult.data
);

export const {
  selectAll: selectAllQuestions,
  selectById: selectQuestionById,
  selectIds: selectQuestionsId,
} = questionsAdapter.getSelectors(
  (state) => selectQuestionsData(state) ?? initialState
);
