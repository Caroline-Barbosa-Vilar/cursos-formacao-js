let roadImage;
let actorImage;
let carImage;
let carPosition;

function preload(){
  roadImage = loadImage("img/estrada.png");
  actorImage = loadImage("img/ator-1.png");
  carImage = loadImage("img/carro-1.png")
};

function setup(){
  createCanvas(500, 400);
};

function draw(){
  background(roadImage);
  image(actorImage, 100, 366, 30, 30);
  image(carImage, 420, 40, 50, 40)
};
