import mongoose from "mongoose";
import QuizSchema from "./QuizModel.js";

const SectionProgressSchema = new mongoose.Schema(
  {
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    sectionTitle: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    progress: {
      type: String,
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
    quiz: {
      type: QuizSchema,
      default: () => ({}),
    },
  },
  { _id: false }
);

export default SectionProgressSchema;
