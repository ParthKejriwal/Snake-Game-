
/*var snake;
 var scl=20;
var food;



function setup() {
  var canvas=createCanvas(800,400);
    snake=new Snake();
   frameRate(10);
  pickLocation();
   
}

/*function keyPressed(){
  if (keyCode===LEFT_ARROW){
    snake.velocityX=-2;
  } else if(keyCode===UP_ARROW) {
    snake.velocityY=-2
  }
  else if(keyCode===RIGHT_ARROW){
snake.velocityX=2
  }
  else if(keyCode===DOWN_ARROW){
 snake.velocityY=2
  }
}*/

/*function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.dir(-7, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(7, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0,7);
  } else if (keyCode === UP_ARROW) {
    snake.dir(0, -7);
  }
}

function pickLocation(){
  var cols=floor(width/scl);
  var rows=floor(height/scl);
  food=createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl)
}


function draw() {
  background(10); 
  snake.update();
snake.show();

if(snake.eat(food)){
  pickLocation();
  food.visible=false
  }
fill(255,0,100);
rect(food.x,food.y,scl,scl);

 drawSprites();

} */

var  snake;
var  rez = 20;
var  food;
var  w;
var  h;
var score=0;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
    score=score+1;
  }
  snake.update();
  snake.show();
  text("Score:"+score,350,50);

  if (snake.endGame()) {
    background(255, 0, 0);
    text("Game Over!!",200,200);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}