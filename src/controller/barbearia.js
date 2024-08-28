const db = [];
let nextID = 1;
const model = (barbearia, id_barbearia = nextID++) => {
  if (barbearia.nome != undefined && barbearia.nome != "") {
    return {
      id_barbearia,
      nome: barbearia.nome,
    };
  }
};

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const index = () => db;

const show = (id_barbearia) => db.find((el) => el.id_barbearia == id_barbearia);

const update = (id_barbearia, body) => {
  const index = db.findIndex((el) => el.id_barbearia == id_barbearia);
  const novo = model(body, parseInt(id_barbearia));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_barbearia) => {
  const index = db.findIndex((el) => el.id_barbearia == id_barbearia);
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
