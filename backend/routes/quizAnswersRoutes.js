import express from "express";
const router = express.Router();
import { submitQuizAnswers } from "../controllers/quizAnswersController.js";
import verifyJWT from "../middleware/verifyJWT.js";

router.use(verifyJWT);

router.post("/:sectionId", submitQuizAnswers);

export default router;