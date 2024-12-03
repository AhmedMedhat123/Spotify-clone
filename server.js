import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 1000;

app.use(cors()); //to connect back-end with fornt-end
app.use(express.json());

//testing API
app.get("/", (req, res) => res.send("working"));
app.listen(port, () => console.log(`Server working on ${port}`)); //starting express app
