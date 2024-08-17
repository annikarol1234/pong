let xBolinha = 300;
let yBolinha =200;
let diametro = 15;

let velocidadeX = 6;
let velocidadeY =6;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha,yBolinha,diametro);
xBolinha += velocidadeX;
  yBolinha += velocidadeY;
  
  if (xBolinha > width || xBolinha < 0){
    velocidadeX *= -1;
    
}