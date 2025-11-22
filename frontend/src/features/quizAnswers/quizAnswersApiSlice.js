import { apiSlice } from "../../app/api/apiSlice";

export const quizApiSlice = apiSlice.injectEndpoints({
    injectEndpoints: builder => ({
        submitQuizAnswers: builder.mutation({
            query: ({ userId,sectionId,answers }) => ({
                url: `/users/quiz/${sectionId}`,
                method: "POST",
                body: { userId,answers }
            }),
            invalidatesTags: (result,error,arg) => [{
                type:"Section", id:arg.sectionId
            }]
        })
    })
})

export const { useSubmitQuizAnswersMutation } = quizApiSlice;
