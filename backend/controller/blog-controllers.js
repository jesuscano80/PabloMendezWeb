import {Request, Response} from "express";

import Blog from "../models/blogs-model";

export const getblogs= async (req=Request,res=Response)=>{

const allblogs= await Blog.find({})
res.send(allblogs);
}

export const getOneBlog = async (req=Request, res=Response)=>{
   const oneBlog= await Blog.findOne({_id:req.params.id})
    res.json(oneBlog);
}

export const postBlog = async (req=Request, res=Response)=>{
    const newBlog= new Blog (req.body);
    const saved= await newBlog.save();
    res.send(saved);
}

export const putBlog = async (req=Request, res=Response)=>{
    const blogUpdated= await Blog.findOneAndUpdate(req.params.id,req.body,{ new:true})
    res.json(blogUpdated);
}

export const deleteBlog = async (req=Request, res=Response)=>{
    const deleted= await Blog.findByIdAndDelete(req.params.id);
    res.json(deleted);
}

export const uploadPhoto = async (req=Request, res=Response)=>{
    


}