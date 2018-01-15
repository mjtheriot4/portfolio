var pa = [];
var ga = [];
var explodeNow = false;

var wWidth = $("#game").css('width');
var wHeight = $("#game").css('height');
//console.log(windowWidth);
function setup() {
  // var canvas = createCanvas(1200, 700);
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('game');
  //pa[0] = new Particle(width/2, height/2);
  noStroke();
  // noCursor();
  // stroke(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }
  for(var j = 0; j < ga.length; j++){
    ga[j].display();
    ga[j].move();
  }
}
$("nav#homeMenu a[href^='#']").mouseenter(function(){
    dropBombs();
});


function dropBombs(){
  // for(i = 0; i<20; i++){
  // pa[pa.length] = new Particle(mouseX, mouseY);
  // }
  // if(mouseX > windowWidth && mouseY > windowHeight){
    ga[ga.length] = new Grenade(mouseX, mouseY);
  // }
}

function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  var particleSize = 10;

  this.vx = random(-30, 30);
  this.vy = random(-35, 35);
  var gravity = 1;

  this.move = function() {
    this.posX += this.vx;
    this.posY += this.vy;
    this.vy += gravity;

    if(this.posY + 10 > height){
      this.vy *= -0.5;
      this.vx *= 0.75;
      this.posY = height - 9;
    }
    if(this.posX < 0 || this.posX > width){
      this.vx *= -1;
    }
  };
  this.display = function() {
    ellipse(this.posX, this.posY, particleSize);
  };
}
function Grenade(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  this.vy = 1;
  this.doonce = true;
  var grenadeSize = 20;
  var drawEllipse = true;
  gravity = 1;

  this.display = function(){
    if (drawEllipse == true){
      ellipse(this.posX, this.posY, 20);
   }
 };
  this.move = function(){
    this.posY += this.vy;
    this.vy += gravity;

    if (this.posY >= height-10){
    drawEllipse = false;
      if (this.doonce == true){
        for(i = 0; i<20; i++){
          pa[pa.length] = new Particle(this.posX, this.posY);
          }
        this.doonce = false;
      }
    }
  };
}
