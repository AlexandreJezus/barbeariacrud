const express = require("express");
const servico_controller = require("../controller/usuario.js");
const servico_router = express.Router();

servico_router.get("/", (req, res) => {
  res.json(servico_controller.index());
});

servico_router.get("/:id", (req, res) => {
  res.json(servico_controller.show(req.params.id));
});

servico_router.post("/", (req, res) => {
  const code = servico_controller.store(req.body);
  res.status(code).json();
});

servico_router.put("/:id", (req, res) => {
  const code = servico_controller.update(req.body, req.params.id);
  res.status(code).json();
});

servico_router.delete("/:id", (req, res) => {
  servico_controller.destroy(req.params.id);
  res.json();
});

module.exports = servico_router;
