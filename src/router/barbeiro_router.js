const express = require("express");
const barbeiro_controller = require("../controller/barbeiro.js");
const barbeiro_router = express.Router();

barbeiro_router.get("/", (req, res) => {
  res.json(barbeiro_controller.index());
});

barbeiro_router.get("/:id", (req, res) => {
  res.json(barbeiro_controller.show(req.params.id));
});

barbeiro_router.post("/", (req, res) => {
  const code = barbeiro_controller.store(req.body);
  res.status(code).json();
});

barbeiro_router.put("/:id", (req, res) => {
  const code = barbeiro_controller.update(req.body, req.params.id);
  res.status(code).json();
});

barbeiro_router.delete("/:id", (req, res) => {
  barbeiro_controller.destroy(req.params.id);
  res.json();
});

module.exports = barbeiro_router;
