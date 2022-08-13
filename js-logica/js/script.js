const canva = document.querySelector('canvas');
let brush = canva.getContext('2d');
const radius = 10;
let xRandom;
let yRandom;

brush.fillStyle = 'lightgrey';
brush.fillRect(0, 0, 600, 400);

function drawCircle(x, y, radius, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.arc(x, y, radius, 0, 2 * Math.PI);
  brush.fill();
}

function cleanScreen() {
  brush.clearRect(0, 0, 600, 400);
}

function drawTarget (x, y) {
  drawCircle(x, y, radius + 20, 'red');
  drawCircle(x, y, radius + 10, 'white');
  drawCircle(x, y, radius, 'red');
}

function randomPosition (maxi) {
  return Math.floor(Math.random() * maxi);
}

function updateScreen() {
  cleanScreen();
  xRandom = randomPosition(600);
  yRandom = randomPosition(400);
  drawTarget(xRandom, yRandom);
}

setInterval(updateScreen, 1000);

function shoots(e) {
  let x = e.pageX - canva.offsetLeft;
  let y = e.pageX - canva.offsetTop;

  if  ((x > xRandom - radius) && (x < xRandom + radius) 
    && (y > yRandom - radius) && (y < yRandom + radius)) {
    alert('Bullseye!')
  } 
}
canva.onclick = shoots;