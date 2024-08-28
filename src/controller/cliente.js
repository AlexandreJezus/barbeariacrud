const db = [];
let nextID = 1;
const model = (cliente, id_cliente = nextID++) => {
  if (cliente.nome != undefined && cliente.nome != "") {
    return {
      id_cliente,
      nome: cliente.nome,
      telefone: cliente.telefone,
      email: cliente.email,
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

const show = (id_cliente) => db.find((el) => el.id_cliente == id_cliente);

const update = (id_cliente, body) => {
  const index = db.findIndex((el) => el.id_cliente == id_cliente);
  const novo = model(body, parseInt(id_cliente));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_cliente) => {
  const index = db.findIndex((el) => el.id_cliente == id_cliente);
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
