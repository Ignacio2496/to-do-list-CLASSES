import express from "express";
import bodyParser from "body-parser";
import cardController from "./Card/Controller/index.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: "https://to-do-list-classes-production.up.railway.app",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors("*"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cardController);

app.listen(port, "0.0.0.0", () => {
  console.log("The server is running");
});
