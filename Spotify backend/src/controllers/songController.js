import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";
// import tree from "../assets/tree.jpg";
// import asslam from "../assets/Assalamu_Alaika_ar.mp3";

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;

    // Validate if files exist
    // if (!req.files || !req.files.audio || !req.files.image) {
    //   return res
    //     .status(400)
    //     .json({ message: "Audio or Image file is missing!" });
    // }

    // const audio_file = req.files.audio[0];
    // const image_file = req.files.image[0];

    // const imageUpload = await cloudinary.uploader.upload(image_file.path, {
    //   resource_type: "image",
    // });
    // const audioUpload = await cloudinary.uploader.upload(audio_file.path, {
    //   resource_type: "video",
    // });

    // const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
    //   audioUpload.duration % 60
    // )}`;

    const songData = {
      name,
      desc,
      album,
      // image: imageUpload.secure_url,
      // file: audioUpload.secure_url,
      // duration,
    };

    const song = new songModel(songData);
    await song.save();

    console.log(name, desc, album); //imageUpload, audioUpload

    res.status(201).json({ message: "Song added successfully!" });

    console.log("Request Files:", req.files);
    console.log("Request Body:", req.body);
  } catch (error) {
    console.error("Error adding song:", error);
    res.status(500).json({ error: "An error occurred while adding the song." });
  }
};

const listSongs = async (req, res) => {
  try {
    const allSongs = await songModel.find({});
    res.json({ message: "Song Lists", songs: allSongs });
  } catch (err) {
    console.log(err);
  }
};

const removeSong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Song removed' });

  } catch (error) {
    res.json({ succes: false, message: error.message })
  }
}
export { listSongs, addSong, removeSong };
