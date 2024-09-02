const express = require("express");
const usuario_controller = require("../controller/usuario.js");
const usuario_router = express.Router();

usuario_router.get("/", (req, res) => {
  res.json(usuario_controller.index());
});

usuario_router.get("/:id", (req, res) => {
  res.json(usuario_controller.show(req.params.id));
});

usuario_router.post("/", (req, res) => {
  const code = usuario_controller.store(req.body);
  res.status(code).json();
});

usuario_router.put("/:id", (req, res) => {
  const code = usuario_controller.update(req.body, req.params.id);
  res.status(code).json();
});

usuario_router.delete("/:id", (req, res) => {
  usuario_controller.destroy(req.params.id);
  res.json();
});

module.exports = usuario_router;
