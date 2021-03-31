import jwt from "jsonwebtoken";
require("dotenv").config();

const checkTocken = async (req, res, next) =>{
    
    if(!req.headers.authorization){
        return res.status(401).json("no estás autorizado aqui");
    }
    const token=req.headers.authorization;
    
    const permiso=await jwt.verify(token,process.env.SECRET);
    
    if(permiso!=process.env.PASSWORD){
        return res.status(401).json("no estás autorizado");
    }
    console.log(token);
    console.log("desde middleware");
    next();
}

export default checkTocken;