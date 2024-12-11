import { Router } from "express";
import { addSong, listSongs } from "../controllers/songController.js";
import uploadHandler from "../middleware/multer.js";
import { validatePostSong } from "../validators/songValidators.js";
const songRouter = Router(); // for api creations

songRouter.post(
  "/add",
  uploadHandler.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  validatePostSong(),
  addSong
);
songRouter.get("/list", listSongs);

export default songRouter;
