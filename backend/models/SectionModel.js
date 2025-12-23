import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema(
  {
    sectionTitle: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    theory: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Section",SectionSchema);

