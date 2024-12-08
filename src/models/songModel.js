import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  album_name: { type: String, required: true },
  file: { type: String, required: true }, //error
});

const songModel = mongoose.models.song || mongoose.model("song", schema); //check if thier is a songs collection in the database if ! make a model ( model represents the songs collection )

export default songModel;
