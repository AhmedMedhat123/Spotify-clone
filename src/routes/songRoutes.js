import { addSong, listSongs } from "../controllers/songController.js";
import express from "express";
const songRouter = express.Router(); // for api creations

songRouter.post("/add", addSong);
songRouter.get("/list", listSongs);

export default songRouter;
