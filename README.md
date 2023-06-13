# Data Lovers

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Definição de produto](#2-definição-de-produto)
* [3. Considerações técnicas](#3-considerações-técnicas)
* [4. Checklist](#4-checklist)
* [5. Tecnologia Utilizadas](#5-tecnologias-utilizadas)
* [6. Contato](#6-contato)

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

- Número;
- Arcano;
- Significado (para cima ou reverso);
- Descrição completa.

Algumas destas informações podem ser obtidas através de campos de pesquisa, caso o usuário não tenha conhecimento total sobre Tarô.

### Protótipos de baixa e de alta fidelidade

![protótipo-baixa-fidelidade1](https://github.com/amandascam03/SAP010-data-lovers/assets/131325234/f458b1ec-59c4-4350-bd38-38704ac2fe71)


Para o protótipo de alta fidelidade utilizamos o Figma: 

![prototipo-figma](https://github.com/CamilaVerso/SAP010-data-lovers/assets/90690380/3591bea9-fd08-4922-953a-5b471870f74b)


### Histórias de usuário

Abaixo uma das histórias de usuário que criamos para concluir a definição de pronto.
Ao todo, foram 4 histórias diferentes. Como ferramenta para organizar nossas
ideias a cada sprint utilizamos o Trello.

![História-1](https://github.com/amandascam03/SAP010-data-lovers/assets/131325234/edfbe19b-6698-4843-b861-6738227bf8e8)


## Testes de usabilidade

Aplicamos o teste de usabilidade no final do projeto com 13 pessoas diferentes e para recerbermos o feedback, elaboramos um formulário de pesquisa simples. 
Nas imagens abaixo é possível observar quais foram as peguntas e a porcentagem das respostas.

![Grafico1](https://github.com/CamilaVerso/SAP010-data-lovers/assets/90690380/57074e89-aeff-4ab8-a4b1-f7837bd728bd)

![Grafico2](https://github.com/CamilaVerso/SAP010-data-lovers/assets/90690380/7434aa3d-59f4-479e-9d5c-0f6805032150)

![Grafico3](https://github.com/CamilaVerso/SAP010-data-lovers/assets/90690380/53fa6683-64a4-4727-b309-07a3dae5db4e)

![Grafico4](https://github.com/CamilaVerso/SAP010-data-lovers/assets/90690380/263ef34a-2d66-4043-b61c-ca52f5803393)

#### Problemas detectados no teste de usabilidade:

Com base nos feedbacks recebidos, elaboramos esta lista de melhorias e implementamos em nosso projeto.

![teste-usabilidade](https://github.com/CamilaVerso/SAP010-data-lovers/assets/90690380/d7fb5667-657d-4646-9141-27369ed5cf69)


## Testes unitários

Para este projeto, escrevemos os testes unitários para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados e atingimos 100% de cobertura de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_).

![testes-unitarios](https://github.com/amandascam03/SAP010-data-lovers/assets/131325234/99d3ccf6-5d3a-40fc-a446-89144696625d)

## 3. Considerações técnicas

A lógica do projeto está implementada somente em JavaScript (ES6), HTML e
CSS. Neste projeto não foi permitido o uso de bibliotecas e frameworks, apenas
vanilla JavaScript.

***

## 4. Checklist

* [x] Usar VanillaJS.
* [x] Passa pelo linter (`npm run pretest`)
* [x] Passa pelos testes (`npm test`)
* [x] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [x] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [x] Inclui histórias de usuário no `README.md`.
* [x] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [x] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [x] UI: Permite filtrar dados com base em uma condição.
* [x] UI: É _responsivo_.

## 5. Tecnologias utilizadas

<div>
<img title="HTML5" alt="Favicon do HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" / width="40" height="40">  
<img title="CSS3" alt="Favicon do CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" / width="40" height="40">  
<img title="JavaScript" alt="Favicon do JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" / width="40" height="40">  
<img title="Git" alt="Favicon do Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" /width="40" height="40">  
<img title="GitHub" alt="Favicon do Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" / width="40" height="40"> 
<img title="Figma" alt="Favicon do Figma" src="https://github.com/devicons/devicon/blob/v2.15.1/icons/figma/figma-original.svg" / width="40" height="40"> 
<img title="Trello" alt="Favicon do Trello" src="https://github.com/devicons/devicon/blob/v2.15.1/icons/trello/trello-plain.svg" / width="40" height="40"> 
</div>

## 6. Contato

<div>
  Amanda Araujo <br>
<a href = "mailto:amandascam03@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/amanda-scam03" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  
  Camila Gonçalves <br>
<a href = "mailto:camilaverso2@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/camilanpgoncalves" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>

