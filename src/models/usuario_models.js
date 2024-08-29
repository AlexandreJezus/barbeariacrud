let nextID = 1;

const model = (usuario, id_usuario = nextID++) => {
  if (usuario.nome != undefined && usuario.nome != "") {
    return {
      id_usuario,
      email: usuario.email,
      senha: usuario.senha,
    };
  }
};

module.exports = model;
