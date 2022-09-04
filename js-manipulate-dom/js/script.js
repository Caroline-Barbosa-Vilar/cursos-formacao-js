//busca todos os elementos que possuem o data-attribute
const control = document.querySelectorAll("[data-control]");

//cada vez que o elemento for clicado, a função irá retornar o conteúdo(texto) 
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