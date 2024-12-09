import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  album: { type: String, required: true },
  image: { type: String, required: false }, //temp
  file: { type: String, required: false }, //temp
  duration: { type: String, required: false }, //temp
});

const songModel = mongoose.model("song", songSchema);
export default songModel;
