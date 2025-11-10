import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/usersControllers.js";

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser)
  .patch(updateUser)
  .delete(deleteUser);

router
  .get("/:id",getUserById)
export default router;
