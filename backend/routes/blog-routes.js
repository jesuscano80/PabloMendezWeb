import {Router} from "express";
import * as controller from "../controller/blog-controllers"
import * as middlewares from "../middlewares/validatePhoto"
import * as checkTocken from "../middlewares/checkToken"
const router=Router();



router.get("/blog", controller.getblogs)
router.get("/blog/:id", controller.getOneBlog)
router.post("/blog", checkTocken.default, controller.postBlog);
router.put("/blog/:id", controller.putBlog);
router.delete("/blog/:id", controller.deleteBlog)
router.put("/blog/:id/image", middlewares.uploadFile, (req,res)=>{
    
    console.log(req.body);
    console.log(req.file);
    res.json({"prueba":"foto"});
})



export default router;