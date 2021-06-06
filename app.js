var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown",keyDownHandler, false);
function keyDownHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"){
      leftPressed = true;
  }
}
function keyDownHandler(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
      rightPressed = false; 
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = false;
}
}
function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle(){
    ctx.beginPath();    
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
     drawBall();
     drawPaddle();
     x += dx;
     y += dy;
     if(y+dy < ballRadius || y+dy >canvas.height - ballRadius){
         dy = -dy;
     }
     if(x+dx < ballRadius || x+dx >canvas.width - ballRadius){
        dx = -dx;
    }
    if(rightPressed){
        paddleX += 7;
        if(paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        } 
    }
    else if(leftPressed){
        paddleX -= 7;
        if(paddleX < 0){
            paddleX=0;
        }
    }
    x += dx;
    y += dy;
}
var intervel = setInterval(draw, 10);
