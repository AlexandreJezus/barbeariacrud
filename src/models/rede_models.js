let nextID = 1;

const model = (rede, id_rede = nextID++) => {
  if (rede.nome != undefined && rede.nome != "") {
    return {
      id_rede,
      nome: rede.nome,
      usuario_id: usuario.usuario_id,
    };
  }
};

module.exports = model;
