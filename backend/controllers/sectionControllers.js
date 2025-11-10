import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";

// @desc PATCH section progress
// @route PATCH /users/progress/:sectionId
// @access Private
const updateSectionProgress = asyncHandler(async (req, res) => {
  
  const userId = req.userId;
  const { sectionId } = req.params.sectionId;
  const { isTheory, isVideo } = req.body;
  if (!sectionId || !userId) {
    return res
      .status(404)
      .json({ message: "Section Id and user Id are required" });
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

  const updatedUser = await User.findOneAndUpdate(
    { _id: userId, "sections.sectionId": sectionId },
    { $set: updateFields },
    { new: true }
  ).select("-password")
   .exec();
  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "Updated progress", sections: updatedUser.sections });
});

export { updateSectionProgress };
