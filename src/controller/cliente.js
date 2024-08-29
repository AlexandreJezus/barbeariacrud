const model = require("../models/cliente_models.js");

const db = [];

const index = () => db;

const show = (id_cliente) => db.find((el) => el.id_cliente == id_cliente);

const store = (cliente) => {
  const novo = model(cliente);

  if (novo) {
    db.push(novo);
    return 201;
  }

  return 400;
};

const update = (cliente, id_cliente) => {
  const novo = model(cliente, parseInt(id_cliente));
  const indice = db.findIndex((el) => el.id_cliente == id_cliente);

  if (novo && indice != -1) {
    db[indice] = novo;
    return 200;
  }

  return 400;
};

const destroy = (id_cliente) => {
  const indice = db.findIndex((el) => el.id_cliente == id_cliente);
  if (indice != -1) {
    db.splice(indice, 1);
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
