import mongoose from "mongoose";

import SectionProgressSchema from "./SectionProgressModel.js";
import CertificateSchema from "./CertificateModel.js";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      maxLength: [30, "El nombre no puede exceder los 30 caracteres"],
      minLength: [3, "El nombre debe ser mínimo de 3 caracteres"],
      required: true,
    },
    lastName: {
      type: String,
      maxLength: [30, "El nombre no puede exceder los 30 caracteres"],
      minLength: [7, "Debe incluir los dos apellidos"],
      required: true,
    },
    email: {
      type: String,
      minLength: [8, "La clave debe ser mínimo de 8 caracteres"],
      match: [/.+\@.+\..+/, "Email inválido"],
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Student","Admin"],
      default: "Student",
      required:true
    },
    password: {
      type: String,
      required: true,
    },
    sections: [SectionProgressSchema],
    certificate: CertificateSchema,
  },{
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
