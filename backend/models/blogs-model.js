
import {Schema, model} from "mongoose";

const blogSchema= new Schema({
    titulo:{type:String,
            required: true},
    categoria:{
        type:String
    },
    texto:{
        type:String,
        required:true
    },
    nombreFoto:{
        type:String
    },
    descripcionFoto:{
        type:String
    }
    },
    {timestamps:true,
    versionKey:false}
)

export default model("Blog", blogSchema);