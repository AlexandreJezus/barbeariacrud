const express = require("express");
const rede_controller = require("../controller/rede.js");
const rede_router = express.Router();

rede_router.get("/", (req, res) => {
  res.json(rede_controller.index());
});

rede_router.get("/:id", (req, res) => {
  res.json(rede_controller.show(req.params.id));
});

rede_router.post("/", (req, res) => {
  const code = rede_controller.store(req.body);
  res.status(code).json();
});

rede_router.put("/:id", (req, res) => {
  const code = rede_controller.update(req.body, req.params.id);
  res.status(code).json();
});

rede_router.delete("/:id", (req, res) => {
  rede_controller.destroy(req.params.id);
  res.json();
});

module.exports = rede_router;
