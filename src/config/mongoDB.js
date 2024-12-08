import mongoose from "mongoose";
const DB = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}/Spotify`);
  mongoose.connection.on("connected", () => {
    console.log("connected successfully");
  });
};

export default DB;
