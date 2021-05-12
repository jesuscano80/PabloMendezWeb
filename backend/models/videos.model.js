import { Schema, model } from "mongoose";

const videoSchema= new Schema({
    vIndex:{
        type:String
    },
    video1:{
        type:String
    },
    video2: {
        type:String
    }
})

export default model("Video", videoSchema);