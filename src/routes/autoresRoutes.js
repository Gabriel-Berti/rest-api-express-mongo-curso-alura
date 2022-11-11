import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutoresController.getAllAutores)
  .get("/autores/:id", AutoresController.getOneAutor)
  .post("/autores", AutoresController.cadastrarAutor)
  .put("/autores/:id", AutoresController.atualizarAutor)
  .delete("/autores/:id", AutoresController.excluirAutor)

export default router;
