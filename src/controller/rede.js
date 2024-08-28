const db = [];
let nextID = 1;
const model = (rede, id_rede = nextID++) => {
  if (rede.nome != undefined && rede.nome != "") {
    return {
      id_rede,
      nome: rede.nome,
      hora_saida: rede.hora_saida,
      hora_retorno: rede.hora_retorno,
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
