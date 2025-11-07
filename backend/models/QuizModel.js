import mongoose from "mongoose";
import AnswerStudentSchema from "./AnswerStudentModel.js"

const QuizSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      enum: ["pending", "inProgress", "completed"],
      default: "pending",
    },
    grade: {
      type: Number,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    completionDate: {
      type: Date,
      default: null,
    },
    studentAnswers: [AnswerStudentSchema],
  },
  { _id: false }
);

export default QuizSchema;