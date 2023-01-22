//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro / 2
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let Xraquete = 5
let Yraquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaMinhaRaquete2();
  
}
function mostraBolinha(){circle(xBolinha,yBolinha,diametro);}
function movimentaBolinha(){  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;}
function verificaColisao(){  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
  if(yBolinha + raio > 400 || yBolinha - raio  < 0) {
    velocidadeYBolinha *= -1
  }}

function mostraRaquete(){rect(Xraquete,Yraquete,raqueteComprimento,raqueteAltura)}
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    Yraquete -= 10;
  }
}
function movimentaMinhaRaquete2(){
  if (keyIsDown(DOWN_ARROW)){
    Yraquete += 10;
  }
10}
