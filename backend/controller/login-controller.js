require("dotenv").config();
import jwt from "jsonwebtoken";

export const login = async (req, res)=>{
    console.log(req.body);
    const {username, password} =req.body;
    
    if (username!= process.env.USER || password != process.env.PASSWORD){
            return res.status(401).json({auth:null})
    }
   const user= {user: username};
    const token=await jwt.sign(user, process.env.SECRET, {expiresIn: "2400s"});
    const refreshToken=await jwt.sign(user, process.env.REFRESH, {expiresIn: "2400s"});
    
    res.json({auth:true , token, refreshToken});
    
}

export const refresh = async (req, res)=>{
    const refreshToken= req.headers.refresh;
    if(!refreshToken){
        res.status(400).json({message:"something goes wrong"})
    }
    let user;
    try {
        const verifyjwt= await jwt.verify(refreshToken,process.env.REFRESH)
        console.log(verifyjwt);
        user =verifyjwt.user;
    } catch (err) {
        return res.status(400).json({message:err})
    }
   
   const cambiouser={user:user};
    const token= await jwt.sign(cambiouser, process.env.SECRET, {expiresIn:"2400s"})
    
    res.status(200).json({message:"ok", token});
}

