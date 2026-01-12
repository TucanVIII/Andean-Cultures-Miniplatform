import { apiSlice } from "../../app/api/apiSlice";

export const quizApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        submitQuizAnswers: builder.mutation({
            query: ({ sectionId,answers }) => ({
                url: `/users/quiz/${sectionId}`,
                method: "POST",
                body: { answers }
            }),
            invalidatesTags: (result,error,sectionId) => [
                {type:"Section", id: sectionId},
                {type:"User", id:"PROFILE"}
            ]
        })
    })
})

export const { useSubmitQuizAnswersMutation } = quizApiSlice;
