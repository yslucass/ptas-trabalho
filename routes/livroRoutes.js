const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

router.post("/", livroController.criarLivro);
router.get("/", livroController.buscarLivros);
router.get("/:id", livroController.buscarLivroPorId);
router.put("/:id", livroController.atualizarLivro);
router.delete("/:id", livroController.excluirLivro);

module.exports = router;