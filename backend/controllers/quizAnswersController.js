import Student from "../models/StudentModel.js"
import asyncHandler from "express-async-handler"

// @desc POST answers
// @route POST /students/quiz/:sectionId
// @access Private
const submitQuizAnswers = asyncHandler( async(req,res) => {
    const sectionId = req.params.sectionId
    const { studentId,answers } = req.body
    if(!studentId || !sectionId || !answers) {
        return res.status(400).json({ message:"All fields are required" })
    }

    /* Añadir calculo de la calificación aquí */
    const calculatedGrade = 10
    const totalQuestions = answers.length
    
    const updatedStudent = await Student.findOneAndUpdate(
        { _id:studentId, "sections.sectionId":sectionId},
        {
            $set:{
                "sections.$.quiz.status": "completed",
                "sections.$.quiz.grade": calculatedGrade,
                "sections.$.quiz.completionDate": new Date(),
                "sections.$.quiz.totalQuestions": totalQuestions,
                /* La lógica no añade las respuestas aquí */
                "sections.$.quiz.answers": answers,
                "sections.$.progress": "completed"
            }
        },
        { new:true}
    ).select("-password").exec();
    if(!updatedStudent) {
        return res.status(404).json({ message:"Student or section not found" })
    }

    res.json({ message:"quiz completed",grade:calculatedGrade})
})

export {
    submitQuizAnswers
}