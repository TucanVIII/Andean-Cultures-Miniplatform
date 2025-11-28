import { createSelector,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const questionsAdapter = createEntityAdapter({
    selectId: question => question._id
});

const initialState = questionsAdapter.getInitialState();

export const questionsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuestions: builder.query({
            query: (filter = {}) => {
                const queryParams = new URLSearchParams(filter).toString();
                return `/questions${queryParams ? `?${queryParams}` : ''}`;
            },
            transformResponse: responseData => {
                return questionsAdapter.setAll(initialState, responseData);
            },
            providesTags: (result,error,arg) => [
                {type: "Question", id: "LIST"},
                ...(result?.ids || []).map((id) => ({type:"Question",id})) 
            ]
        }),
        addNewQuestion: builder.mutation({
            query: initialQuestionData => ({
                url:"/questions",
                method:"POST",
                body: {
                    ...initialQuestionData
                }
            }),
            invalidatesTags: [{ type:"Question", id:"LIST" }]
        }),
        updateQuestion: builder.mutation({
            query: initialQuestionData => ({
                url: "/questions",
                method: "PATCH",
                body: { ...initialQuestionData}
            }),
            invalidatesTags: (result,error,arg) => [
                { type:"Question", id:arg.id},
                { type: "Question", id: "LIST" }
            ]
        }),
        deleteQuestion: builder.mutation({
            query: ({id}) => ({
                url:"/questions",
                method: "DELETE",
                body: {id}
            }),
            invalidatesTags: (result,error,arg) => [{type:"Question",id:arg.id}]
        }),
        getQuizQuestion: builder.query({
            query: (sectionId) => `questions/quiz/${sectionId}`,
            providesTags: (result,error,sectionId) => [{type:"QuizQuestions", id:sectionId}]
        })
    })
})

export const {
    useGetQuestionsQuery,
    useAddNewQuestionMutation,
    useUpdateQuestionMutation,
    useDeleteQuestionMutation,
    useGetQuizQuestionQuery
} = questionsApiSlice;

export const selectQuestionsResult = questionsApiSlice.endpoints.getQuestions.select()

const selectQuestionsData = createSelector(
    selectQuestionsResult,
    questionsResult => questionsResult.data
);

export const {
    selectAll: selectAllQuestions,
    selectById: selectQuestionById,
    selectIds: selectQuestionsId
} = questionsAdapter.getSelectors(
    state => selectQuestionsData(state) ?? initialState
)