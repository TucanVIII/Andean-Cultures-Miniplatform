import asyncHandler from "express-async-handler";
import Student from "../models/StudentModel.js";

// @desc PATCH section progress
// @route PATCH /students/progress/:sectionId
// @access Private
const updateSectionProgress = asyncHandler(async (req, res) => {
  const { sectionId } = req.params;
  const { isTheory, isVideo, studentId } = req.body;
  if (!sectionId || !studentId) {
    return res
      .status(404)
      .json({ message: "Section Id and student Id are required" });
  }

  let updateFields = {};
  if (isTheory !== undefined) {
    updateFields["sections.$.theoryCompleted"] = isTheory;
    updateFields["sections.$.progress"] = "inProgress";
  }
  if (isVideo !== undefined) {
    updateFields["sections.$.videoCompleted"] = isVideo;
    updateFields["sections.$.progress"] = "inProgress";
  }

  const updatedStudent = await Student.findOneAndUpdate(
    { _id: studentId, "sections.sectionId": sectionId },
    { $set: updateFields },
    { new: true }
  )
    .select("-password")
    .exec();
  if (!updatedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ message: "Updated progress", sections: updatedStudent.sections });
});

export { updateSectionProgress };
