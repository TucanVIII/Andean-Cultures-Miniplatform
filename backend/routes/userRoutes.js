import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/usersControllers.js";
import verifyJWT from "../middleware/verifyJWT.js";

router.use(verifyJWT);

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser);

router
  .route("/profile")
  .get(getUserById)

  router
  .route("/:id")
  .patch(updateUser)
  .delete(deleteUser);

export default router;
