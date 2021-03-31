import mongoose from "mongoose";
require("dotenv").config();
// const databasedir= "mongodb://localhost/pabloblog";

mongoose.connect(process.env.DBASE, 
    { useNewUrlParser: true  ,
        useUnifiedTopology: true,
        useFindAndModify:true,
       useCreateIndex:true })
       .then((db)=> console.log("data base working"))
       .catch((err)=> console.log(err));

export default mongoose;