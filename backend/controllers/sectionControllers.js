import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import Section from "../models/SectionModel.js";

// @desc GET all sections
// @route GET /sections
// @access Private
const getAllSections = asyncHandler(async(req,res) => {
  const sections = await Section.find().lean()
  if(!sections) {
    return res.status(404).json({ message:"Not sections found"})
  }
  res.json(sections)
})

// @desc GET one section
// @route GET /sections/:id
// @access Private
const getSectionById = asyncHandler(async(req,res) => {
  const { id } = req.params
  const section = await Section.findById(id).lean()
  if(!section) {
    return res.status(404).json({ message:"Not section found "})
  }
  res.json(section)
})

// @desc Create new section
// @route POST /sections
// @access Private
const createNewSection = asyncHandler(async(req,res) => {
  const {sectionTitle,order,theory,videoUrl} = req.body
  if(!sectionTitle || !order===undefined || !theory || !videoUrl) {
    return res.status(400).json({ message: "All fields are required" })
  }

  const duplicate = await Section.findOne({sectionTitle}).collation({locale:"es",strength:2}).lean()
  if(duplicate) {
    return res.status(409).json({ message:"Duplicate section title "})
  }

  const sectionObject = {
    sectionTitle,order,theory,videoUrl
  }

  // Create and store new section
  const newSection = await Section.create(sectionObject)
  if(newSection) {
    res.status(201).json({ message:`Section: ${sectionObject.sectionTitle} was created`})
  } else {
    res.status(400).json({ message:"Invalid section data received"})
  }
})

// @desc Update a section
// @route PATCH /sections/:id
// @access Private
const updateSection = asyncHandler(async(req,res) => {
  const { id } = req.params
  const {sectionTitle,order,theory,videoUrl} = req.body
  if(!sectionTitle || !order || !theory || !videoUrl) {
    return res.json({ message: "All fields are required" })
  }

  const section = await Section.findById(id)
  if(!section) {
    return res.status(404).json({ message:"Section not found"})
  }
  
  const duplicate = await Section.findOne({ sectionTitle })
    .collation({ locale: "es", strength: 2 }).lean()
    
  if (duplicate && duplicate._id.toString() !== id) {
    return res.status(409).json({ message: "El nuevo título ya está en uso" })
  }

  section.sectionTitle = sectionTitle;
  section.order = order;
  section.theory = theory;
  section.videoUrl = videoUrl;

  const updatedSection = await section.save();

  res.json({ message:`Section ${updatedSection.sectionTitle} was updated`})
})

// @desc delete section
// @route DELETE /sections/:id
// @access Private
const deleteSection = asyncHandler(async(req,res) => {
  const { id } = req.params
  if(!id) {
    return res.status(404).json({ message:"Not section found "})
  }

  const section = await Section.findById(id)
  if(!section) {
    return res.status(404).json({ message:"Section not found"})
  }

  await section.deleteOne()
  res.json({ message:`Section ${section.sectionTitle} was removed successfully`})
})

// @desc PATCH section progress
// @route PATCH /users/progress/:sectionId
// @access Private
const updateSectionProgress = asyncHandler(async (req, res) => {
  // the JWT middleware sets `req.user` to the user's email
  const userEmail = req.user;
  const { sectionId } = req.params;
  const { isTheory, isVideo } = req.body;
  if (!sectionId || !userEmail) {
    return res.status(404).json({ message: "Section Id and user email are required" });
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
    { email: userEmail, "sections.sectionId": sectionId },
    { $set: updateFields },
    { new: true }
  ).select("-password");

  if (!updatedUser) {
    return res.status(404).json({ message: "User or section not found" });
  }

  res.json({ message: "Updated progress", sections: updatedUser.sections });
});

export { 
  getAllSections,
  getSectionById,
  createNewSection,
  updateSection,
  deleteSection,
  updateSectionProgress 
};
