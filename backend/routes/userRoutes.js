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
  
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);
export default router;
