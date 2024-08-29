let nextID = 1;

const model = (atendimento, id_atendimento = nextID++) => {
  if (atendimento.nome != undefined && atendimento.nome != "") {
    return {
      id_atendimento,
      nome: atendimento.nome,
    };
  }
};

module.exports = model;
