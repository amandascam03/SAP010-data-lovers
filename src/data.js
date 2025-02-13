export const filtrarNomes = (dados, nomePesquisado) => {
  //é criada uma variavel para filtrar nomes
  return dados.filter((cards) =>
    cards.name.toUpperCase().includes(nomePesquisado.toUpperCase())
  ); // retorna um filtro que vai filtrar os dados das cartas
  // é criada uma função in line chamada cards, cards.name pega o nome da carta no tarot.js, includes verifica se o nome pesquisado é true e retorna ele
};

export const filtrarNumeros = (dados, numeroPesquisado) => {
  return dados.filter((cards) =>
    String(cards.value).includes(numeroPesquisado)
  );
};

export const ordenaCartas = (dados, selecao) => {
  if (selecao === "a-z") {
    return dados.sort((a, b) => {
      if (a.name > b.name) { // se o primeiro nome nao estiver em ordem alfabetica comparado ao segundo, o 1 retorna o segundo antes do primeiro
        return 1;
      }
      if (a.name < b.name) { // se o primeiro nome estiver em ordem alfabetica comparado ao segundo, o -1 retorna o primeiro antes do segundo
        return -1;
      } else { // se o primeiro nome estiver igual ao segundo, o 0 retorna as posições inalteradas
        return 0;
      }
    });
  }
  return dados.sort((a, b) => {
    if (a.name > b.name) { //se o primeiro nome não estiver em ordem alfabetica em relação ao segundo, o -1 retorna do jeito que está
      return -1;
    }
    if (a.name < b.name) { // se o primeiro nome estiver em ordem alfabetica em relação ao segundo, o 1 retorna o segundo antes do primeiro
      return 1;
    } else {
      return 0; // se o primeiro nome estiver igual ao segundo, o 0 retorna as posições inalteradas
    }
  });
};

export const filtrarArcanos = (dados, arcanoSelecionado) => {
  return dados.filter((cards) => cards.type === arcanoSelecionado);
};
