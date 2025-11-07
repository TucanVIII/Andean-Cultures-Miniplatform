import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    isIssued: {
      type: Boolean,
      default: false,
    },
    dateIssued: {
      type: Date,
      default: null,
    },
    finalScore: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

export default CertificateSchema;