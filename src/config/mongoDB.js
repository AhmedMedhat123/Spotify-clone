import mongoose from "mongoose";
const initiateDBconnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("connected to mongo DB");
  } catch (error) {
    console.log(error);
  }
};

export default initiateDBconnection;
