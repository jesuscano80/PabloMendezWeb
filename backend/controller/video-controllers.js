import Video from "../models/videos.model";

export const uploadVideo = async (req, res, next) => {
  try {
    const found = await Video.find({});
    if (found[0] == null) {
      const setVideos = new Video({
        vIndex: "assets/videoIdx.mp4",
        video1: "assets/videoIdx.mp4",
        video2: "assets/videoIdx.mp4",
      });
      const videoSaved = await setVideos.save();
    } else {
      if (req.params.id == "index") {
        await Video.findByIdAndUpdate(
          found[0]._id,
          { vIndex: `http://localhost:3000/uploads/${req.file.filename}` },
          { new: true }
        );
      }
      if (req.params.id == "video1") {
        await Video.findByIdAndUpdate(
          found[0]._id,
          { video1: `http://localhost:3000/uploads/${req.file.filename}` },
          { new: true }
        );
      }
      if (req.params.id == "video2") {
        await Video.findByIdAndUpdate(
          found[0]._id,
          { video2: `http://localhost:3000/uploads/${req.file.filename}` },
          { new: true }
        );
      }
    }
    res.json({ success: true, filename: req.file.filename });
  } catch (error) {
    next(error);
  }
  
};

export const getVideos = async (req, res, next) => {
  try {
    const videosFound = await Video.find();
    if (videosFound) {
      res
        .status(200)
        .json({
          success: true,
          vIndex: videosFound[0].vIndex,
          video1: videosFound[0].video1,
          video2: videosFound[0].video2,
        });
    }
  } catch (error) {
    next(error);
  }
};
