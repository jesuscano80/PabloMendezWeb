import {Router} from "express";
import * as controller from "../controller/blog-controllers"
import * as middlewares from "../middlewares/validatePhoto"
const router=Router();



router.get("/blog", controller.getblogs)
router.get("/blog/:id", controller.getOneBlog)
router.post("/blog", controller.postBlog);
router.put("/blog/:id", controller.putBlog);
router.delete("/blog/:id", controller.deleteBlog)
router.put("/blog/:id/image",middlewares.validatePhoto, (req,res)=>{
    console.log(req.body);
    res.json({"prueba":"foto"});
})



export default router;