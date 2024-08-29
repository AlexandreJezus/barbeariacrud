let nextid = 1;

const model = (cliente, id_cliente = nextid++) => {
  const telefone = cliente.telefone
    .replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "");

  let soNumeros = true;

  telefone.split("").forEach((el) => {
    if (isNaN(Number(el))) {
      soNumeros = false;
    }
  });

  if (
    cliente.nome != undefined &&
    cliente.email != undefined &&
    telefone != undefined &&
    cliente.nome != "" &&
    cliente.email != "" &&
    cliente.email.includes("@") &&
    telefone != "" &&
    telefone.length >= 11 &&
    telefone.length <= 12 &&
    soNumeros
  ) {
    return {
      id_cliente,
      telefone: cliente.telefone,
      nome: cliente.nome,
      email: cliente.email,
      senha: cliente.senha,
    };
  }
};

module.exports = model;
