import mongoose from "mongoose";
import QuizSchema from "./QuizModel.js"

const SectionSchema = new mongoose.Schema(
  {
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    sectionName: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    progress: {
      type: String,
      required: true,
      enum: ["pending", "inProgress", "completed"],
      default: "pending",
    },
    theoryCompleted: {
      type: Boolean,
      default: false,
    },
    videoCompleted: {
      type: Boolean,
      default: false,
    },
    quiz: QuizSchema,
  },
  { _id: false }
);

export default SectionSchema;