import User from "../models/UserModel.js"
import Questions from "../models/QuestionModel.js"
import asyncHandler from "express-async-handler"

// @desc POST answers
// @route POST /users/quiz/:sectionId
// @access Private
const submitQuizAnswers = asyncHandler( async(req,res) => {
    
    const sectionId = req.params.sectionId;
    const userId = req.user.id;
    const { answers } = req.body;
    if(!userId || !sectionId || !answers || !answers.length) {
        return res.status(400).json({ message:"All fields are required" })
    }

    /* Lógica de calificación */
    // Getting the questions, answers and base note
    const questionId = answers.map(a => a.questionId);
    const totalQuestions = answers.length;
    const maxQuestions = 4;
    const pointsPerQuestion = 100/maxQuestions;
    const correctAnswers = await Questions.find({
        "_id":{$in: questionId}
    }).select("+correctAnswer").lean();

    // Iterating and qualifying
    let score = 0;
    const answersWithScore = [];

    correctAnswers.forEach(answer => {
        const submittedAns = answers.find(i => i.questionId.toString() === answer._id.toString())

        const userResponse = submittedAns?.userAnswer || "";

        const isCorrect = userResponse.trim() === answer.correctAnswer.trim();

        const questionScore = isCorrect ? pointsPerQuestion:0;
        score+=questionScore;

        answersWithScore.push({
            user:userId,
            questionId: answer._id,
            userAnswer: userResponse,
            score: questionScore
        })
    })

    const calculatedGrade = Math.round(score);
    const finalProgress = "completed";

    const updatedUser = await User.findOneAndUpdate(
        { _id:userId, "sections.sectionId":sectionId},
        {
            $set:{
                "sections.$.quiz.status": finalProgress,
                "sections.$.quiz.grade": calculatedGrade,
                "sections.$.quiz.completionDate": new Date(),
                "sections.$.quiz.totalQuestions": totalQuestions,
                "sections.$.quiz.userAnswers": answersWithScore,
                "sections.$.progress": finalProgress
            }
        },
        { new:true}
    ).select("-password").exec();
    if(!updatedUser) {
        return res.status(404).json({ message:"User or section not found" })
    }

    res.json({ 
        message:"quiz completed",
        grade:calculatedGrade,
        status:finalProgress
    })
})

export {
    submitQuizAnswers
}