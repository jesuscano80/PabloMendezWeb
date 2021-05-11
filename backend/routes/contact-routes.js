import { Router} from "express";
import * as sendEmail from "../controller/contact-controller"
const router= Router();

router.post("/sendemail", sendEmail.sendEmail)

export default router;