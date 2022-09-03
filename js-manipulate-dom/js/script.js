//busca o elemento no html pelo id
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const arm = document.querySelector("#arm");

//busca todos os elementos que possuem a classe informada
const control = document.querySelectorAll(".controle-ajuste");
console.log(control);

//
control.forEach()

//cada vez que clicar no ícone de + no html, será chamada a função e entrará no loop do else,
//que soma o value do 'arm'
plus.addEventListener('click', () => {manipulatesData('plus')});

//cada vez que clicar no ícone de - no html, será chamada a função e entrará no loop do if,
//que subtrai o value do 'arm'
minus.addEventListener('click', () => {manipulatesData('minus')});

//função que dependendo da condição irá somar ou subtrair o value do arm
function manipulatesData(operation) {
  if(operation === 'minus') {
    arm.value = parseInt(arm.value) - 1;
  } else {
    arm.value = parseInt(arm.value) + 1;
  };
};