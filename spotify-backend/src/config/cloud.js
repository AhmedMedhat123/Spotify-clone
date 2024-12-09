import { v2 as cloudinary } from "cloudinary";
const connectToCloud = async () => {
  await cloudinary.config({
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.apiSecret,
  });
};
export default connectToCloud;
