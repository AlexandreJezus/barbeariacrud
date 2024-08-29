let nextID = 1;

const model = (barbeiro, id_barbeiro = nextID++) => {
  if (barbeiro.nome != undefined && barbeiro.nome != "") {
    return {
      id_barbeiro,
      nome: barbeiro.nome,
      foto: barbeiro.foto,
      bio: barbeiro.bio,
      barbearia_id: barbeiro.barbearia_id,
    };
  }
};

module.exports = model;
