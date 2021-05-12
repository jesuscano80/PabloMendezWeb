import { Router } from "express";
import * as biography from "../controller/biography.controller";
import * as middlewares from "../middlewares/validatePhoto"
const router = Router();

router.post("/biography", biography.biographyPost);

router.get("/biography", biography.biographyGet);

router.put("/biography", middlewares.uploadFile, biography.biographyPut)
export default router;
