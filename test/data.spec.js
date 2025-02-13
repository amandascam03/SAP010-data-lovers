import {
  filtrarNomes,
  filtrarNumeros,
  ordenaCartas,
  filtrarArcanos,
} from "../src/data.js";

const teste = "Camila";
const dados = [
  { name: "Ana", value: 1, type: "major" },
  { name: "Camila", value: 2, type: "minor" },
  { name: "Amanda", value: 3, type: "major" },
];
const dados1 = [{ name: "Ana" }, { name: "Ana" }, { name: "Ana" }];
const dados2 = [{ name: "A" }, { name: "B" }, { name: "C" }];
const valor = 2;
const selecaoA = "a-z";
const selecaoZ = "z-a";
const arcano = "major";
const arcanoMinor = "minor";

describe("filtrarNomes", () => {
  it("is a function", () => {
    expect(typeof filtrarNomes).toBe("function");
  });

  it("filtrou `nome`", () => {
    expect(filtrarNomes(dados, teste)).toEqual([
      { name: "Camila", value: 2, type: "minor" },
    ]);
  });
});

describe("filtrarNumeros", () => {
  it("is a function", () => {
    expect(typeof filtrarNumeros).toBe("function");
  });

  it("filtrou `numero`", () => {
    expect(filtrarNumeros(dados, valor)).toEqual([
      { name: "Camila", value: 2, type: "minor" }
    ]);
  });
});

describe("ordenaCartas", () => {
  it("is a function", () => {
    expect(typeof ordenaCartas).toBe("function");
  });

  it("ordenou `cartas A-Z`", () => {
    expect(ordenaCartas(dados, selecaoA)).toEqual([
      { name: "Amanda", value: 3, type: "major" },
      { name: "Ana", value: 1, type: "major" },
      { name: "Camila", value: 2, type: "minor" }
    ]);
  });

  it("ordenou `cartas A-Z`", () => {
    expect(ordenaCartas(dados1, selecaoA)).toEqual([
      { name: "Ana" },
      { name: "Ana" },
      { name: "Ana" }
    ]);
  });
});

describe("ordenaCartas", () => {
  it("is a function", () => {
    expect(typeof ordenaCartas).toBe("function");
  });

  it("ordenou `cartas Z-A`", () => {
    expect(ordenaCartas(dados, selecaoZ)).toEqual([
      { name: "Camila", value: 2, type: "minor" },
      { name: "Ana", value: 1, type: "major" },
      { name: "Amanda", value: 3, type: "major" }
    ]);
  });

  it("ordenou `cartas Z-A`", () => {
    expect(ordenaCartas(dados2, selecaoZ)).toEqual([
      { name: "C" },
      { name: "B" },
      { name: "A" }
    ]);
  });

  it("teste da linha 34", () => {
    expect(ordenaCartas(dados2, selecaoZ)).toEqual([
      { name: "C" },
      { name: "B" },
      { name: "A" }
    ]);
  });

  it("ordenou `cartas Z-A`", () => {
    expect(ordenaCartas(dados1, selecaoZ)).toEqual([
      { name: "Ana" },
      { name: "Ana" },
      { name: "Ana" }
    ]);
  });

  it("teste da linha 28", () => {
    expect(ordenaCartas(dados, selecaoZ)).toEqual([
      { name: "Camila", value: 2, type: "minor" },
      { name: "Ana", value: 1, type: "major" },
      { name: "Amanda", value: 3, type: "major" }
    ]);
  })
});

describe("filtrarArcanos", () => {
  it("is a function", () => {
    expect(typeof filtrarArcanos).toBe("function");
  });

  it("filtrou  `ArcanosMaiores`", () => {
    expect(filtrarArcanos(dados, arcano)).toEqual([
      { name: "Ana", value: 1, type: "major" },
      { name: "Amanda", value: 3, type: "major" },
    ]);
  });
});

it("filtrou  `ArcanosMenores`", () => {
  expect(filtrarArcanos(dados, arcanoMinor)).toEqual([
    { name: "Camila", value: 2, type: "minor" },
  ]);
});