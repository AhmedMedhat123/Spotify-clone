import { Router } from "express";
import { addSong, listSongs } from "../controllers/song.js";
import uploadHandler from "../middleware/multer.js";

const songRouter = Router(); // for api creations

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
