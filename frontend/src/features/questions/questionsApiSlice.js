import { createSelector,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const questionsAdapter = createEntityAdapter({
    selectId: question => question._id
});

const initialState = questionsAdapter.getInitialState();

export const questionsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuestions: builder.query({
            query: () => ({
                url: "/questions",
                validateStatus: (response,result) => {
                    return response.status === 200 & !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedQuestions = responseData.map(question => {
                    question.id = question._id
                    return question
                })
                return questionsAdapter.setAll(initialState,loadedQuestions)
            },
            providesTags: (result,error,arg) => {
                if(result?.ids){
                    return [
                        { type:"Questions", id:""},
                        ...result.ids.map(id => ({
                            type:"Questions",id
                        }))
                    ]
                } else return [{ type:"Questions", id:""}]
            }
        }),
        addNewQuestion: builder.mutation({
            query: initialQuestionData => ({
                url:"/questions",
                method:"POST",
                body: {
                    ...initialQuestionData
                }
            }),
            invalidatesTags: [{ type:"Question", id:"" }]
        }),
        updateQuestion: builder.mutation({
            query: initialQuestionData => ({
                url: "/questions",
                method: "PATCH",
                body: { ...initialQuestionData}
            }),
            invalidatesTags: (result,error,arg) => [{ type:"Question", id:arg.id}]
        }),
        deleteQuestion: builder.mutation({
            query: ({id}) => ({
                url:"/questions",
                method: "DELETE",
                body: {id}
            })
        }),
        getQuizQuestion: builder.query({

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