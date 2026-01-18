import express from "express";
import verifyJWT from "../middleware/verifyJWT.js";
import { generateCertificate, getCertificatePdf } from "../controllers/certificateController.js";

const router = express.Router();

router.use(verifyJWT);

router.post("/generate", generateCertificate);
router.get("/",getCertificatePdf);

export default router;
