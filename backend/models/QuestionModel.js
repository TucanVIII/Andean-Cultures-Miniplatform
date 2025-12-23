import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
    {
        sectionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
            required: true
        },
        statement: {
            type: String,
            required: true
        },
        options: {
            type: [String],
            required: true
        },
        correctAnswer: {
            type: String,
            required: true ,
            select: false  
        }
    }
)

export default mongoose.model("Question",QuestionSchema);