import { Router } from "express";
import { addSong, listSongs, removeSong } from "../controllers/songController.js";
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

songRouter.post('/remove', removeSong);

export default songRouter;
