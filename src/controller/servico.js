const db = [];
let nextID = 1;
const model = (servico, id_servico = nextID++) => {
  if (servico.nome != undefined && servico.nome != "") {
    return {
      id_servico,
      nome: servico.nome,
      hora_saida: servico.hora_saida,
      hora_retorno: servico.hora_retorno,
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

const show = (id_servico) => db.find((el) => el.id_servico == id_servico);

const update = (id_servico, body) => {
  const index = db.findIndex((el) => el.id_servico == id_servico);
  const novo = model(body, parseInt(id_servico));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_servico) => {
  const index = db.findIndex((el) => el.id_servico == id_servico);
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
