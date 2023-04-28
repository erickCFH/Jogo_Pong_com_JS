//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30; 
let raio = diametro / 2;

//Velocidade da bolinha
let velocidadexBolinha = 5; 
let velocidadeyBolinha = 5;

//Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Segunda Raquete
let xSegundaRaquete = 585;
let ySegundaRaquete = 150;
let velocidadeySegundaRaquete;

//Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xSegundaRaquete, ySegundaRaquete);
  movimentoRaquete();
  movimentaSegundaRaquete();
  colisaoRaquete();
  colisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
   
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete(x, y){
    rect(x, y, raqueteComprimento, raqueteAltura);
}


function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaSegundaRaquete(){
    if (keyIsDown(87)){
    ySegundaRaquete -= 10;
  }
  
  if (keyIsDown(83)){
    ySegundaRaquete += 10;
  }
}

function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete + velocidadeyBolinha){
    velocidadexBolinha *= -1;
    raquetada.play();
  }

}

function colisaoRaqueteOponente(){
  if (xBolinha + raio > xSegundaRaquete + raqueteComprimento && yBolinha - raio < ySegundaRaquete + raqueteAltura && yBolinha + raio > ySegundaRaquete + velocidadeyBolinha){
    velocidadexBolinha *= -1;
    raquetada.play();
  }

}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(145, 10, 40, 20);
  fill(255);
  text(meusPontos, 165, 26);
  fill(color(255, 140, 0));
  rect(445, 10, 40, 20);
  fill(255);
  text(pontosOponente, 465, 26);
}

function marcaPonto(){
  if (xBolinha > 585){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 15){
    pontosOponente += 1;
    ponto.play();
  }
}


  