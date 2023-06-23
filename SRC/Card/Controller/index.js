import express from "express";
import Card from "../Entity/index.js";
const card = new Card();
const cardController = express.Router();

cardController.get("/notes", (request, response) => {
  const data = card.list();
  return response.json(data);
});

cardController.get("/notes/:id", (request, response) => {
  const data = card.getCard(request.params.id);
  return response.json(data);
});

cardController.post("/notes", (request, response) => {
  const body = request.body;
  const CreatedCard = card.addCard(body);
  response.status(201).json(CreatedCard);
});

cardController.delete("/notes/:id", (request, response) => {
  if (card.removeCard(request.params.id)) {
    response.status(200).json({
      message: "Se eliminó correctamente",
    });
  } else {
    response.status(540).json({
      message: "Ocurrió un problema",
    });
  }
});

cardController.put("/notes/:id", (request, response) => {
  const editedCard = card.editItem(request.body, request.params.id);
  response.status(200).json(editedCard);
});

export default cardController;
