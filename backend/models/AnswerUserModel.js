import mongoose from "mongoose";

const AnswerUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Question",
  },
  userAnswer: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

export default AnswerUserSchema;
