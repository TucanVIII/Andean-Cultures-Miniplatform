import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    fullName: String,
    dateIssued: {
      type: Date,
      default: Date.now,
    },
    finalScore: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Certificate",certificateSchema);