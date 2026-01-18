import User from "../models/UserModel.js";
import Certificate from "../models/CertificateModel.js";
import asyncHandler from "express-async-handler";
import { buildCertificate } from "../libs/certificate.js";

// @desc POST certificate
// @route POST /certificate/generate
// @access Private
const generateCertificate = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const user = await User.findById(userId).populate("sections.sectionId");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const sectionsCompleted = user.sections.every(
    (section) =>
      section.theoryCompleted &&
      section.videoCompleted &&
      section.quiz.status === "completed"
  );

  if (!sectionsCompleted) {
    return res.status(400).json({ message: "Course not completed " });
  }

  const sectionsData = user.sections.map((s) => ({
    title: s.sectionTitle,
    grade: s.quiz.grade / 10,
  }));

  const finalScore =
    sectionsData.reduce((acc, s) => acc + s.grade, 0) / sectionsData.length;

  const existing = await Certificate.findOne({ user: user._id });
  if (existing) {
    return res.status(409).json({ message: "Certificate already exists" });
  }

  const certificate = await Certificate.create({
    user: user._id,
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    finalScore: Number(finalScore.toFixed(2)),
    dateIssued: new Date(),
  });

  await User.findByIdAndUpdate(userId, { certificate:certificate._id });
  res.status(201).json(certificate);
});

// @desc GET certificate
// @route GET /certificate
// @access Private
const getCertificatePdf = asyncHandler(async (req, res) => {
  const certificate = await Certificate.findOne({ user: req.user.id }).lean();

  if (!certificate) {
    return res.status(404).json({ message: "Certificate not found" });
  }

  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "inline; filename=certificate.pdf",
  });

  buildCertificate(
    certificate,
    chunk => res.write(chunk),
    () => res.end()
  );
});

export { generateCertificate,getCertificatePdf };
