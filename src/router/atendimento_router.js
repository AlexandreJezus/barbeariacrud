const express = require("express");
const atendimento_controller = require("../controller/atendimento.js");
const atendimento_router = express.Router();

atendimento_router.get("/", (req, res) => {
  res.json(atendimento_controller.index());
});

atendimento_router.get("/:id", (req, res) => {
  res.json(atendimento_controller.show(req.params.id));
});

atendimento_router.post("/", (req, res) => {
  const code = atendimento_controller.store(req.body);
  res.status(code).json();
});

atendimento_router.put("/:id", (req, res) => {
  const code = atendimento_controller.update(req.body, req.params.id);
  res.status(code).json();
});

atendimento_router.delete("/:id", (req, res) => {
  atendimento_controller.destroy(req.params.id);
  res.json();
});

module.exports = atendimento_router;
