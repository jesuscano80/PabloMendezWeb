import express from "express";
import path from "path"
import morgan from "morgan";
import cors from "cors"
import blogRoutes from "./routes/blog-routes"
import loginRoutes from "./routes/login.routes"
import contactRoutes from "./routes/contact-routes"
import biographyRoutes from "./routes/biography-routes"
import videosRoutes from "./routes/videos-routes"
import compression from "compression";
const corsOptions = {
    "Access-Control-Allow-Methods" : ['GET', 'PUT', 'POST', 'DELETE']
}
const app=express();


//middlewares
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
// la direccion para ver las fotos sería entonces http://localhost:3000/uploads/ponyo035.jpg
app.use(blogRoutes);
app.use(loginRoutes);
app.use(contactRoutes);
app.use(biographyRoutes);
app.use(videosRoutes);


export default app;
