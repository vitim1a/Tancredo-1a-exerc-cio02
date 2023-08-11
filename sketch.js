let cor;
let posicaoHorizontal;
let posicaoVertical;
let posicaoHorizontal12;
let posicaoVertical12;

function setup() {
  createCanvas(800, 800);
  background("rgb(5,238,169)");
  cor=color(random(0,255), random(0, 255), random(0, 255));
  posicaoHorizontal = 0;
  posicaoVertical = random(height);
  posicaoHorizontal12 = 0
  posicaoVertical12 = random(height)
  tamanho = 50;
  
}

function draw(){
  
  stroke(cor);
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, tamanho);
  circle(posicaoHorizontal12, posicaoVertical12, tamanho);
 
  
  posicaoHorizontal+= random(1, 4);
  posicaoVertical+= random(-3, 3);
  posicaoHorizontal12+= random(1, 4);
  posicaoVertical12+= random(-3, 3);
  
  
  if (mouseIsPressed){cor =color(random(0,255), random(0,255), random(0,100))};
}