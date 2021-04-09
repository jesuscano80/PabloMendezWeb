import {Router } from "express";
const router = Router();
import * as LoginCtrl from "../controller/login-controller"



router.post("/login", LoginCtrl.login)

router.post("/refresh", LoginCtrl.refresh)

export default router;