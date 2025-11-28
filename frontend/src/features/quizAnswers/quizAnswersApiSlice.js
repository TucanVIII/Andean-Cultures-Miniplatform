import { apiSlice } from "../../app/api/apiSlice";

export const quizApiSlice = apiSlice.injectEndpoints({
    injectEndpoints: builder => ({
        submitQuizAnswers: builder.mutation({
            query: ({ userId,sectionId,answers }) => ({
                url: `/users/quiz/${sectionId}`,
                method: "POST",
                body: { userId,answers }
            }),
            invalidatesTags: (result,error,sectionId) => [
                {type:"Section", id: sectionId},
                {type:"User", id:"CURRENT_USER"}
            ]
        })
    })
})

export const { useSubmitQuizAnswersMutation } = quizApiSlice;
