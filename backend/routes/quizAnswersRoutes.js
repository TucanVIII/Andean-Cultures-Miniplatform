import express from "express";
const router = express.Router();
import { submitQuizAnswers } from "../controllers/quizAnswersController.js";

router
    .post("/:sectionId",submitQuizAnswers)

export default router;