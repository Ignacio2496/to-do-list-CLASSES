import express from "express";
import bodyParser from "body-parser";
import cardController from "./Card/Controller/index.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cardController);
const allowedOrigins = [
  "http://localhost:3001",
  "https://to-do-list-classes-production.up.railway.app",
];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.listen(port, () => {
  console.log("The server is running");
});
