import { Router } from "express";
import * as middlewares from "../middlewares/validatePhoto";
import * as videocont from "../controller/video-controllers";
const router = Router();

router.put("/videos/:id", middlewares.uploadVideo, videocont.uploadVideo);
router.get("/videos", videocont.getVideos);

export default router;
