import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";
import dotenv from "dotenv";
import { validationResult } from "express-validator";

// Load environment variables
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// const testUpload = async () => {
//   try {
//     const result = await cloudinary.uploader.upload(
//       "C:\\Users\\Osama medhat\\Spotify Project\\Spotify backend\\src\\assets\\tree.jpg"
//     );
//     console.log("Upload successful:", result);
//   } catch (error) {
//     console.error("Upload error:", error);
//   }
// };

// testUpload(); // Call the test function

const addSong = async (req, res) => {
  try {
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(442).send({
        error: firstError.msg,
      });
    }
    const { name, desc, album } = req.body;

    // Validate if files exist
    // if (!req.files || !req.files.audio || !req.files.image) {
    //   return res
    //     .status(400)
    //     .json({ message: "Audio or Image file is missing!" });
    // }

    // const audio_file = req.files.audio[0];
    // const image_file = req.files.image[0];

    // Upload image and audio to Cloudinary
    // const imageUpload = await cloudinary.uploader.upload(image_file.path, {
    //   resource_type: "image", // Uploading as an image
    // });
    // const audioUpload = await cloudinary.uploader.upload(audio_file.path, {
    //   resource_type: "video", // Uploading audio as video type in Cloudinary
    // });

    // // Calculate duration for the audio
    // const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
    //   audioUpload.duration % 60
    // )}`;

    // Save song data to the database
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

export { listSongs, addSong };
