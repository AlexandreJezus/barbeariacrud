const express = require("express");
const cep_endereco = require("./middlewares/cep_endereco.js");
const usuario_controller = require("./controller/usuario.js");
const cliente_controller = require("./controller/cliente.js");
const servico_controller = require("./controller/servico.js");
const rede_controller = require("./controller/rede.js");
const barbeiro_controller = require("./controller/barbeiro.js");
const barbearia_controller = require("./controller/barbearia.js");
const app = express();
const port = 3000;

app.use(express.json());
// app.use(cep_endereco) // Midleware de uso global

app.post("/barbearia", cep_endereco, (req, res) => {
  res.json(req.body);
});

// //Gerenciamento de barbearia

app.post("/barbearia", (req, res) => {
  const barbearia = req.body;
  const code = barbearia_controller.store(barbearia);
  res.status(code).json();
});

app.get("/barbearia", (req, res) => {
  const barbearia = barbearia_controller.index();
  res.json(barbearia);
});

app.get("/barbearia/:id", (req, res) => {
  const barbearia = barbearia_controller.show(req.params.id);
  res.json(barbearia);
});

app.put("/barbearia/:id", (req, res) => {
  const barbearia = req.body;
  const code = barbearia_controller.update(req.params.id, barbearia);
  res.status(code).json();
});

app.delete("/barbearia/:id", (req, res) => {
  barbearia_controller.destroy(req.params.id);
  res.json();
});
// //Gerenciamento de barbearia

// //Gerenciamento de barbeiro
app.post("/barbeiro", (req, res) => {
  const barbeiro = req.body;
  const code = barbeiro_controller.store(barbeiro);
  res.status(code).json();
});

app.get("/barbeiro", (req, res) => {
  const barbeiro = barbeiro_controller.index();
  res.json(barbeiro);
});

app.get("/barbeiro/:id", (req, res) => {
  const barbeiro = barbeiro_controller.show(req.params.id);
  res.json(barbeiro);
});

app.put("/barbeiro/:id", (req, res) => {
  const barbeiro = req.body;
  const code = barbeiro_controller.update(req.params.id, barbeiro);
  res.status(code).json();
});

app.delete("/barbeiro/:id", (req, res) => {
  barbeiro_controller.destroy(req.params.id);
  res.json();
});
// //Gerencimento de barbeiro

// //Gerencimento de cliente

app.post("/cliente", (req, res) => {
  const cliente = req.body;
  const code = cliente_controller.store(cliente);
  res.status(code).json();
});

app.get("/cliente", (req, res) => {
  const cliente = cliente_controller.index();
  res.json(cliente);
});

app.get("/cliente/:id", (req, res) => {
  const cliente = cliente_controller.show(req.params.id);
  res.json(cliente);
});

app.put("/cliente/:id", (req, res) => {
  const cliente = req.body;
  const code = cliente_controller.update(req.params.id, cliente);
  res.status(code).json();
});

app.delete("/cliente/:id", (req, res) => {
  cliente_controller.destroy(req.params.id);
  res.json();
});

// //Gerencimento de cliente

// //Gerencimento de rede

app.post("/rede", (req, res) => {
  const rede = req.body;
  const code = rede_controller.store(rede);
  res.status(code).json();
});

app.get("/rede", (req, res) => {
  const rede = rede_controller.index();
  res.json(rede);
});

app.get("/rede/:id", (req, res) => {
  const rede = rede_controller.show(req.params.id);
  res.json(rede);
});

app.put("/rede/:id", (req, res) => {
  const rede = req.body;
  const code = rede_controller.update(req.params.id, rede);
  res.status(code).json();
});

app.delete("/rede/:id", (req, res) => {
  rede_controller.destroy(req.params.id);
  res.json();
});

// //Gerencimento de rede

// //Gerencimento de serviço

app.post("/servico", (req, res) => {
  const servico = req.body;
  const code = servico_controller.store(servico);
  res.status(code).json();
});

app.get("/servico", (req, res) => {
  const servico = servico_controller.index();
  res.json(servico);
});

app.get("/servico/:id", (req, res) => {
  const servico = servico_controller.show(req.params.id);
  res.json(servico);
});

app.put("/servico/:id", (req, res) => {
  const servico = req.body;
  const code = servico_controller.update(req.params.id, servico);
  res.status(code).json();
});

app.delete("/servico/:id", (req, res) => {
  servico_controller.destroy(req.params.id);
  res.json();
});

// //Gerencimento de serviço

// //Gerencimento de usuario

app.post("/usuario", (req, res) => {
  const usuario = req.body;
  const code = usuario_controller.store(usuario);
  res.status(code).json();
});

app.get("/usuario", (req, res) => {
  const usuario = usuario_controller.index();
  res.json(usuario);
});

app.get("/usuario/:id", (req, res) => {
  const usuario = usuario_controller.show(req.params.id);
  res.json(usuario);
});

app.put("/usuario/:id", (req, res) => {
  const usuario = req.body;
  const code = usuario_controller.update(req.params.id, usuario);
  res.status(code).json();
});

app.delete("/usuario/:id", (req, res) => {
  usuario_controller.destroy(req.params.id);
  res.json();
});

// //Gerencimento de usuario

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
