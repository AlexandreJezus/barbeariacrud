const model = require("../models/atendimento_models.js");

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

const show = (id_atendimento) =>
  db.find((el) => el.id_atendimento == id_atendimento);

const update = (id_atendimento, body) => {
  const index = db.findIndex((el) => el.id_atendimento == id_atendimento);
  const novo = model(body, parseInt(id_atendimento));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_atendimento) => {
  const index = db.findIndex((el) => el.id_atendimento == id_atendimento);
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
