import express from "express";
import morgan from "morgan";
import cors from "cors";
import blogRoutes from "./routes/blog-routes"
import compression from "compression";
const corsOptions = {
    "Access-Control-Allow-Methods" : ['GET', 'PUT', 'POST', 'DELETE']
}
const app=express();


//middlewares
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.raw({type: "image/*",limit: "2mb"}));
app.use(express.urlencoded({extended:false}));
app.use(compression());
app.use(blogRoutes);



export default app;
