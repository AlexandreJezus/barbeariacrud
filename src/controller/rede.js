const model = require("../models/rede_models.js");

const db = [];

const index = () => db;

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const show = (id_rede) => db.find((el) => el.id_rede == id_rede);

const update = (id_rede, body) => {
  const index = db.findIndex((el) => el.id_rede == id_rede);
  const novo = model(body, parseInt(id_rede));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_rede) => {
  const index = db.findIndex((el) => el.id_rede == id_rede);
  if (index != -1) {
    db.splice(index, 1);
    return 200;
  }
  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
