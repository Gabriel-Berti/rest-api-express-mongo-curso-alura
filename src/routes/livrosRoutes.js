import express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivrosController.getAllLivros)
  .get("/livros/busca", LivrosController.getLivrosByEditora)
  .get("/livros/:id", LivrosController.getOneLivro)
  .post("/livros", LivrosController.cadastrarLivro)
  .put("/livros/:id", LivrosController.atualizarLivro)
  .delete("/livros/:id", LivrosController.excluirLivro)

export default router;
