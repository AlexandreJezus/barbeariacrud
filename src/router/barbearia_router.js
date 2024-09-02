const express = require("express");
const barbearia_controller = require("../controller/barbearia.js");
const barbearia_router = express.Router();

barbearia_router.get("/", (req, res) => {
  res.json(barbearia_controller.index());
});

barbearia_router.get("/:id", (req, res) => {
  res.json(barbearia_controller.show(req.params.id));
});

barbearia_router.post("/", (req, res) => {
  const code = barbearia_controller.store(req.body);
  res.status(code).json();
});

barbearia_router.put("/:id", (req, res) => {
  const code = barbearia_controller.update(req.body, req.params.id);
  res.status(code).json();
});

barbearia_router.delete("/:id", (req, res) => {
  barbearia_controller.destroy(req.params.id);
  res.json();
});

module.exports = barbearia_router;
