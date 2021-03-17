
// import FileType from "file-type";
const fileType= require("file-type");

export const validatePhoto = async (req,res,next)=>{
const allowPhotoTypes=["image/jpg", "image/png", "image/gif", "image/jpeg"];
const mimetype= req.get("content-type")
console.log(allowPhotoTypes.includes(mimetype));
if(!allowPhotoTypes.includes(mimetype)) {
    console.log(`tipo de foto no admitido ${mimetype}`);
    res.status(400).send(`tipo de foto no admitido ${mimetype}. Solo válidos ${allowPhotoTypes.join(" ,")}`);
    return
}
const fileInfo= await fileType.fromBuffer(req.body);

if(!allowPhotoTypes.includes(fileInfo.mime)) {
    console.log(`tipo de foto no admitido ${fileInfo.mime}`);
    res.status(400).send(`tipo de foto no admitido ${fileInfo.mime}. Solo válidos ${allowPhotoTypes.join(" ,")}`);
    return
}

req.extensionArchivo=fileInfo.ext;

next();
}

