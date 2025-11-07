import express from "express";
const router = express.Router()
import { 
    getAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuizQuestion
 } from "../controllers/questionsControllers.js";

 // Managed by an administrator
router
    .route("/")
    .get(getAllQuestions)
    .post(createQuestion)
    .patch(updateQuestion)
    .delete(deleteQuestion)

router
    .get("/quiz/:sectionId",getQuizQuestion)

export default router;