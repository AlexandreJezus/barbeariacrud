let nextID = 1;

const model = (servico, id_servico = nextID++) => {
  if (servico.nome != undefined && servico.nome != "") {
    return {
      id_servico,
      nome: servico.nome,
      barbeiro_id: servico.barbeiro_id,
      duracao_minutos: servico.duracao_minutos,
    };
  }
};

module.exports = model;
