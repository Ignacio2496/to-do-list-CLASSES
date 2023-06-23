import express from "express";
import bodyParser from "body-parser";
import cardController from "./Card/Controller/index.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cardController);
app.listen(port, () => {
  console.log("The server is running");
});
