const doten= require("dotenv").config();
import mongoose from "./database";
import app from "./app.js"
const port= process.env.PORT || 3000;
app.listen(port, function(){
console.log("listening on port", port);
})