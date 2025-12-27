import express from "express";
const router = express.Router();
import {
  getAllSections,
  getSectionById,
  createNewSection,
  updateSection,
  deleteSection,
} from "../controllers/sectionControllers.js";
import verifyJWT from "../middleware/verifyJWT.js";

router.use(verifyJWT);

router
  .route("/")
  .get(getAllSections)
  .post(createNewSection);

router
  .route("/:id")
  .get(getSectionById)
  .patch(updateSection)
  .delete(deleteSection);

export default router;
