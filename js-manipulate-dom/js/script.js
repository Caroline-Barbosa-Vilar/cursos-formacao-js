//busca todos os elementos que possuem o data-attribute
const control = document.querySelectorAll("[data-control]");
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

//cada vez que o elemento for clicado, a função irá retornar o data-attribute e seu elemento pai
control.forEach((element) => {
  element.addEventListener('click', (e) => {
    manipulatesData(e.target.dataset.control, e.target.parentNode);
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

