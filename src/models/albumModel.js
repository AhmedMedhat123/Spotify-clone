import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  album_name: { type: String, required: true },
  description: { type: String, required: true },
  album_image: { type: String, required: true },
  background_color: { type: String, required: true },
});

const songModel = mongoose.models.song || mongoose.model("song", albumSchema); //check if thier is a songs collection in the database if ! make a model ( model represents the songs collection )

export default albumModel;
