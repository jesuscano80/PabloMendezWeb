import { Schema, model } from "mongoose";

const biographySchema= new Schema({
    title: {type:String},
    description: {type:String},
    photo: {type: String}
    
},{versionKey:false, timestamps:true})

export default model("Biography", biographySchema);