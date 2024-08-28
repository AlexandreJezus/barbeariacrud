const db = [];
let nextID = 1;
const model = (usuario, id_usuario = nextID++) => {
  if (usuario.nome != undefined && usuario.nome != "") {
    return {
      id_usuario,
      nome: usuario.nome,
      hora_saida: usuario.hora_saida,
      hora_retorno: usuario.hora_retorno,
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

const show = (id_usuario) => db.find((el) => el.id_usuario == id_usuario);

const update = (id_usuario, body) => {
  const index = db.findIndex((el) => el.id_usuario == id_usuario);
  const novo = model(body, parseInt(id_usuario));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_usuario) => {
  const index = db.findIndex((el) => el.id_usuario == id_usuario);
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
