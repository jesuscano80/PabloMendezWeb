import {Router } from "express";
const router = Router();
require("dotenv").config();
import jwt from "jsonwebtoken";


router.post("/login", async (req, res)=>{
    const {username, password} =req.body;
    
    if (username!= process.env.USER || password != process.env.PASSWORD){
            return res.status(401).json({auth:null})
    }
   
    const token=await jwt.sign(password, process.env.SECRET);
    req.headers.authorization=token;
    res.json({auth:true , token });
    
})

export default router;