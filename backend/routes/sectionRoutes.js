import express from "express";
const router = express.Router()
import { updateSectionProgress } from "../controllers/sectionControllers.js"

router
    .patch("/:sectionId",updateSectionProgress)

export default router