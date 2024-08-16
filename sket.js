let cor;
let posicaoHorizontal;
let posicaoVertcal;

function setup() {
  createCanvas(400, 400);
  background("pink");
  cor = color(random(0,255),random(0,255),random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() { 
   circle(posicaoHorizontal,posicaoVertical, 25);
    fill(cor);
  
  if(mouseX < posicaoHorinzontal) {
    posicaoHorizontal = posicaoHorizontal -1;
  } 
  
}