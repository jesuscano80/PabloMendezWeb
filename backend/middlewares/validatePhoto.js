import path from "path";
import multer from "multer";

const optionStorage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export function uploadFile(req, res, next) {
  const Upload = multer({
    storage: optionStorage,
    limits: { fileSize: 4000000 },
    fileFilter: (req, file, cb) => {
      const allowPhotoTypes = [
        "image/jpg",
        "image/png",
        "image/gif",
        "image/jpeg",
      ];
      const extension = path.extname(file.originalname);
      console.log(allowPhotoTypes.includes(file.mimetype));
      if (allowPhotoTypes.includes(file.mimetype)) {
        return cb(null, true);
      }
      cb("archivo debe ser una imagen valida");
    },
    dest: path.join(__dirname, "../public/uploads"),
  }).single("image");

  Upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      res
        .status(413)
        .json({ success: false, message: "Fichero demasiado grande" });
      return;
    } else if (err) {
      // fallo formato
      res
        .status(415)
        .json({ success: false, message: "Fichero formato incorrecto" });
      return;
    }

    next();
  });
}

export const uploadVideo = (req, res, next) => {
  const Upload = multer({
    storage: optionStorage,
    limits: { fileSize: 8000000 },
    fileFilter: (req, file, cb) => {
      const allowPhotoTypes = [
        "video/x-msvideo",
        "video/mpeg",
        "video/ogg",
        "video/webm",
        "video/mp4",
        "video/x-matroska",
      ];
      const extension = path.extname(file.originalname);
      console.log(allowPhotoTypes.includes(file.mimetype));
      if (allowPhotoTypes.includes(file.mimetype)) {
        return cb(null, true);
      }
      cb("archivo debe ser una imagen valida");
    },
    dest: path.join(__dirname, "../public/uploads"),
  }).single("video");

  Upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      res
        .status(413)
        .json({ success: false, message: "Fichero demasiado grande" });
      return;
    } else if (err) {
      // fallo formato
      res
        .status(415)
        .json({ success: false, message: "Fichero formato incorrecto" });
      return;
    }

    next();
  });
};
