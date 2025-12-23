import mongoose from "mongoose";
import AnswerUserSchema from "./AnswerUserModel.js"

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
      default:0,
      required: true,
    },
    completionDate: {
      type: Date,
      default: null,
    },
    userAnswers: [AnswerUserSchema],
  },
  { _id: false }
);

export default QuizSchema;