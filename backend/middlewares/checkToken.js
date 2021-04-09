import jwt from "jsonwebtoken";
require("dotenv").config();

const checkTocken = async (req, res, next) =>{
    
    if(!req.headers['authorization']){
        return res.status(401).json("no estás autorizado aqui");
    }
    const AuthToken=req.headers['authorization'];
    const token=AuthToken && AuthToken.split(" ")[1];
    
    if (!token){
        res.status(400).send("no tienes token");
    }
    try{
    const permiso=await jwt.verify(token,process.env.SECRET);
    next();
    }
    catch(err){
        res.status(401).json({success: false, message:"No coincide el token"})
    }
}

export default checkTocken;