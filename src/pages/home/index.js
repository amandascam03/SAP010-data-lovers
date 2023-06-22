export default () => {
    const container = document.createElement('div');

    const template = `    <div class="background">
    <h1 id="tituloT"><strong>Tarô</strong></h1>
    <div class="textoeinput">
      <p id="textoT">O tarô é um baralho de cartas frequentemente utilizado como meio de consulta e interpretação
        de fatos (presentes,
        passados ou futuros), sonhos, percepções ou estados emocionais, que também constitui um tipo de
        cartomancia. </p>
      <form autocomplete="off">
        <label for="nome">Nome <input type="search" id="pesquisa-nome" name="nome"
            placeholder="Nome da Carta"></label>
        <!--Mudei o que estava escrito no placeholder para ficar melhor na tela menor-->


        <label for="numero">Número <input type="number" id="pesquisa-numero" name="numero" min="1" max="21"></label>


        <label for="arcanos">Arcanos <select name="arcanos" id="arcanos" class="arcanos">
            <option value="major">Major</option>
            <option value="minor">Minor</option>
            <option selected value="none">Selecione</option>
          </select> </label>


        <label for="ordem">Ordenar <select name="ordem" id="ordem" class="ordem">
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option selected value="Selecione">Selecione</option>
          </select> </label>

      </form>
    </div>
    <div class="calculo">
      <p id="calculo"></p>
      <p id="calculo2"></p>
    </div>
  </div>
  <div id="chart"></div>
  <section>
    <div class="container-card" id="info-cards"></div>
  </section>`;

  container.innerHTML = template;

  return container;
};