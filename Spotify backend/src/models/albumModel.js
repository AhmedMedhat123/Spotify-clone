import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: false },
  backgroundColor: { type: String, required: false },
});

const albumModel = mongoose.models.Album || mongoose.model("Album", albumSchema);
export default albumModel;
