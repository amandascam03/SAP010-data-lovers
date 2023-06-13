# Data Lovers

## Índice


* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Definição de produto](#2-definição-de-produto)
* [3. Critérios mínimos de aceitação do projeto](#3-critérios-mínimos-de-aceitação-do-projeto)
* [4. Considerações técnicas](#4-considerações-técnicas)
* [5. Checklist](#5-checklist)

***

## 1. Resumo do projeto

Neste projeto **construímos uma _página web_ para visualizar um _conjunto
(set) de dados_** que se adeque às necessidades do usuário.

Como entregável final temos uma página web que permite **visualizar dados,
filtrá-los, ordená-los e mostrar um cálculo agregado**. Por cálculo agregado nos
referimos a porcentagem de cartas de Arcano maior ou menor em relação ao total de
cartas existentes no baralho do Tarô.

Este é o banco de dados que escolhemos apresentar nesse projeto:

* [Tarot](src/data/tarot/tarot.json): Neste conjunto você encontrará uma
  lista com cartas de Tarot.
  - [Pesquisa com usuários de Tarot](src/data/tarot/README.pt.md)

O objetivo principal deste projeto é aprender a desenhar e construir uma
interface web onde se possa visualizar e manipular dados, entendendo o que o
usuário necessita.

## 2. Definição de produto

### Criamos nosso site direcionado para pessoas que gostam de Tarô e querem obter informações pontuais sobre esse tema, como:

- número
- arcano
- significado (para cima ou reverso)
- descrição completa

Algumas destas informações podem ser obtidas através de campos de pesquisa, caso o usuário não tenha conhecimento total sobre Tarô.

### Protótipo de baixa e alta fidelidade

![protótipo-baixa-fidelidade1](https://github.com/amandascam03/SAP010-data-lovers/assets/131325234/f458b1ec-59c4-4350-bd38-38704ac2fe71)

![prototipo-figma](https://github.com/CamilaVerso/SAP010-data-lovers/assets/90690380/3591bea9-fd08-4922-953a-5b471870f74b)


## 3. Critérios mínimos de aceitação do projeto

### Histórias de usuário

![História-1](https://github.com/amandascam03/SAP010-data-lovers/assets/131325234/edfbe19b-6698-4843-b861-6738227bf8e8)

Essa é uma das histórias de usuário que criamos para concluir a definição de pronto.
Ao todo, foram 4 histórias diferentes. Utilizamos o Trello para organizar nossas
ideias a cada sprint.

## Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

#### Problemas detectados no teste de usabilidade:

## Testes unitários

Para este projeto, escrevemos os testes unitários para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados e atingimos 100% de cobertura de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_).

![testes-unitarios](https://github.com/amandascam03/SAP010-data-lovers/assets/131325234/99d3ccf6-5d3a-40fc-a446-89144696625d)

## 4. Considerações técnicas

A lógica do projeto está implementada somente em JavaScript (ES6), HTML e
CSS. Neste projeto não foi permitido o uso de bibliotecas e frameworks, apenas
vanilla JavaScript.

***

## 5. Checklist

* [x] Usar VanillaJS.
* [x] Passa pelo linter (`npm run pretest`)
* [x] Passa pelos testes (`npm test`)
* [x] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [x] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [x] Inclui histórias de usuário no `README.md`.
* [x] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [x] UI: Permite filtrar dados com base em uma condição.
* [x] UI: É _responsivo_.
