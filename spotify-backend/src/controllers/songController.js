import { v2 as cloud } from "cloudinary";
const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audio_file = req.files.audio[0];
    const image_file = req.files.image[0];
    const imageUpload = await cloud.uploader.upload(image_file.path, {
      resource_type: "image", // resoure_type = video bc no audio resource type
    });
    const audioUpload = await cloud.uploader.upload(audio_file.path, {
      resource_type: "video", // resoure_type = video bc no audio resource type
    });
    console.log(name, desc, album, imageUpload, audioUpload);
  } catch (error) {
    console.log(error);
  }
};

const listSongs = async (req, res) => {};

export { listSongs, addSong };
