import Biography from "../models/biography.model";

export const biographyPost = async (req, res, next) => {
  try {
    const busqueda = await Biography.find({});

    if (busqueda[0] == null) {
      const { title, description, photo } = req.body;
      const newBio = new Biography(req.body);
      const saved = newBio.save();
      res
        .status(200)
        .json({ success: true, message: "Nuevos datos de biografia creados" });
    } else {
      const updateBio = await Biography.findByIdAndUpdate(
        busqueda[0]._id,
        req.body,
        { new: true }
      );
      res
      .status(200)
      .json({success: true, message: "actualizado con exito"});
    }
  } catch (err) {
    next(err);
  }
};

export const biographyGet = async (req, res, next)=>{
    try {
        const bioFound= await Biography.find({});
        res.json({success: true, title: bioFound[0].title, description: bioFound[0].description, photo: bioFound[0].photo})    
    } catch (error) {
        next(error)
    }
    

}

export const biographyPut = (req,res)=>{
  res.json({"success":true, filename:req.file.filename});
}
