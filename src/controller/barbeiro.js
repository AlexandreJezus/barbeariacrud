const model = require("../models/barbeiro_models.js");

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

const show = (id_barbeiro) => db.find((el) => el.id_barbeiro == id_barbeiro);

const update = (id_barbeiro, body) => {
  const index = db.findIndex((el) => el.id_barbeiro == id_barbeiro);
  const novo = model(body, parseInt(id_barbeiro));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_barbeiro) => {
  const index = db.findIndex((el) => el.id_barbeiro == id_barbeiro);
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
