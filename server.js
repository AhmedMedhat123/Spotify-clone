import express from "express"; // to create a server
import cors from "cors";
import "dotenv/config";
import DB from "./src/config/mongoDB.js";
import songRouter from "./src/routes/songRoutes.js";

const app = express();
DB();
const port = process.env.PORT || 1000;

app.use(cors()); //to connect back-end with fornt-end
app.use(express.json());

//testing API
app.get("/", (req, res) => res.send("working"));
app.listen(port, () => console.log(`Server working on ${port}`)); //starting express app

//starting Routes
app.use("/song", songRouter); //error /api
