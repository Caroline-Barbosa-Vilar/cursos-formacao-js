//busca todos os elementos que possuem o data-attribute data-control para adicionar um evento
const control = document.querySelectorAll("[data-control]");
//busca todos os elementos que possuem o data-attribute data-statistics para que os elementos sejam atualizados no HTML quando clicados
const statistics = document.querySelectorAll("[data-statistics]")
// objetos que contém as propriedades dos elementos de estatísticas
const pecas = {
  "arms": {
      "strength": 29,
      "power": 35,
      "energy": -21,
      "velocity": -5
  },

  "shielding": {
      "strength": 41,
      "power": 20,
      "energy": 0,
      "velocity": -20
  },
  "cores":{
      "strength": 0,
      "power": 7,
      "energy": 48,
      "velocity": -24
  },
  "legs":{
      "strength": 27,
      "power": 21,
      "energy": -32,
      "velocity": 42
  },
  "rockets":{
      "strength": 0,
      "power": 28,
      "energy": 0,
      "velocity": -2
  }
};

//cada vez que o elemento for clicado, a função irá retornar o data-attribute e seu elemento pai e adicionará o evento
control.forEach((element) => {
  element.addEventListener('click', (e) => {
    manipulatesData(e.target.dataset.control, e.target.parentNode);
    //chamar a função
    updateStatistics(e.target.dataset.peca);
  });
});

//função que dependendo da condição irá somar ou subtrair o value do arm
function manipulatesData(operation, control) {
  //busca o elemento no html pelo seletor
  const peca = control.querySelector("[data-counter]");

  if(operation === '-') {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  };
};

function updateStatistics(peca) {
  //esse valor será a referência de incremento
  //console.log(pecas[peca]);
  //atualizar o texto de cada elemento quando o botão for clicado
  statistics.forEach((element) => {
    //esse valor será refenrência no incremento
    //console.log(element.dataset.statistics);
    // ao clicar em cada elemento queremos atualizar o texto(textContent) 
    //mas quando for incrementado/decrementado ele deve ter o valor somado/subtraído
    //vamos transformar o texto em number e o valor atual será somado ao incremento do botão
    element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.statistics]
  });
};


