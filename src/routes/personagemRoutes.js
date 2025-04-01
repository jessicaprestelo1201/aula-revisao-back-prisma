import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const personagensRouter = express.Router();

// Rotas de Animes
// GET /api/animes - Listar todos os animes
personagensRouter.get("/", PersonagemController.getAllPersonagens);

// GET /api/animes/:id - Obter um anime pelo ID
personagensRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /api/animes - Criar um novo anime
personagensRouter.post("/", PersonagemController.createPersonagem);

// PUT /api/animes/:id - Atualizar um anime
personagensRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /api/animes/:id - Remover um anime
personagensRouter.delete("/:id", PersonagemController.deletePersonagem);

export default personagensRouter;
