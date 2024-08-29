let nextID = 1;

const model = (barbearia, id_barbearia = nextID++) => {
  if (barbearia.nome != undefined && barbearia.nome != "") {
    return {
      id_barbearia,
      nome: barbearia.nome,
      fotos: barbearia.fotos,
      endereco: barbearia.cep_endereco,
      rede_id: barbearia.rede_id,
    };
  }
};

module.exports = model;
