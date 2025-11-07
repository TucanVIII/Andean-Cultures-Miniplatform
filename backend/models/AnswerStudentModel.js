import mongoose from "mongoose";

const AnswerStudentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Student",
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Question",
  },
  studentAnswer: {
    type: [String],
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

export default AnswerStudentSchema;
