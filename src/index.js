const express = require("express");
const cep_endereco = require("./middlewares/cep_endereco.js");

// Router
const usuario_router = require("./router/usuario_router.js");
const cliente_router = require("./router/cliente_router.js");
const servico_router = require("./router/servico_router.js");
const barbeiro_router = require("./router/barbeiro_router.js");
const rede_router = require("./router/rede_router.js");
const barbearia_router = require("./router/barbearia_router.js");
const atendimento_router = require("./router/atendimento_router.js");
const app = express();
const port = 3000;

app.use(express.json());
// app.use(cep_endereco) // Midleware de uso global

app.post("/barbearia", cep_endereco, (req, res) => {
  res.json(req.body);
});

// Rotas
app.use("/usuario", usuario_router);
app.use("/servico", servico_router);
app.use("/rede", rede_router);
app.use("/cliente", cliente_router);
app.use("/barbeiro", barbeiro_router);
app.use("/barbearia", barbearia_router);
app.use("/atendimento", atendimento_router);
// Rotas

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
