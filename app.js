import express from "express"; // to create a server
import cors from "cors";
import "dotenv/config";
import initiateDBconnection from "./src/config/mongoDB.js";
import songRouter from "./src/routes/songRoutes.js";

const PORT_NUMBER = 1000;
const app = express();
initiateDBconnection();

app.use(cors()); //to connect back-end with fornt-end
app.use(express.json());

app.listen(
  PORT_NUMBER,
  () =>
    console.log(`Server has been started and listining to port ${PORT_NUMBER}`) //starting express app
);

//testing get method
app.get("/", (req, res) => res.send("get mehtod is working"));

//starting Routes
app.use("/api/song", songRouter);
