import express from "express";
const router = express.Router();
import {
  getAllStudents,
  getStudentById,
  createNewStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentsControllers.js";

router
  .route("/")
  .get(getAllStudents)
  .post(createNewStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

router
  .get("/:id",getStudentById)
export default router;
