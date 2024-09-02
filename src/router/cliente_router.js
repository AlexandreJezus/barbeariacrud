const express = require("express");
const cliente_controller = require("../controller/rede.js");
const cliente_router = express.Router();

cliente_router.get("/", (req, res) => {
  res.json(cliente_controller.index());
});

cliente_router.get("/:id", (req, res) => {
  res.json(cliente_controller.show(req.params.id));
});

cliente_router.post("/", (req, res) => {
  const code = cliente_controller.store(req.body);
  res.status(code).json();
});

cliente_router.put("/:id", (req, res) => {
  const code = cliente_controller.update(req.body, req.params.id);
  res.status(code).json();
});

cliente_router.delete("/:id", (req, res) => {
  cliente_controller.destroy(req.params.id);
  res.json();
});

module.exports = cliente_router;
