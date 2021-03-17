import mongoose from "mongoose";
import { textChangeRangeIsUnchanged } from "typescript";
const databasedir= "mongodb://localhost/pabloblog";
mongoose.connect(databasedir, 
    { useNewUrlParser: true  ,
        useUnifiedTopology: true,
        useFindAndModify:true,
       useCreateIndex:true })
       .then((db)=> console.log("data base working"))
       .catch((err)=> console.log(err));

export default mongoose;