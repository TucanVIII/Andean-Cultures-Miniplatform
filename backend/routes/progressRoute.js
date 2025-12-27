import express from "express";
const router = express.Router();
import { updateSectionProgress } from "../controllers/sectionControllers.js";
import verifyJWT from "../middleware/verifyJWT.js";

router.use(verifyJWT);

router.patch("/:sectionId", updateSectionProgress);

export default router;
