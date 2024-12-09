import { addSong, listSongs } from "../controllers/songController.js";
import express from "express";
import uploadHandler from "../middleware/multer.js";
const songRouter = express.Router(); // for api creations

songRouter.post(
  "/add",
  uploadHandler.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addSong
);
songRouter.get("/list", listSongs);

export default songRouter;
