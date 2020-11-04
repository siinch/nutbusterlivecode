console.log("Hello from main");

let myNut = new Nut({x: 200, y: 200}, 30, "white");

let speed = {x: 2, y: 2};
function gameloop () {

  var context = Canvas.canvas.getContext("2d");
  context.beginPath();
  context.rect(0, 0, Canvas.canvas.width, Canvas.canvas.height);
  context.fillStyle = "black";
  context.fill();

  myNut.draw();
  myNut.position.x += speed.x;
  myNut.position.y += speed.y;

  if(
    myNut.position.x + myNut.radius > Canvas.canvas.width ||
    myNut.position.x - myNut.radius < 0
  )
  speed.x *= -1;

  if(
    myNut.position.y + myNut.radius > Canvas.canvas.height ||
    myNut.position.y - myNut.radius < 0
  )
    speed.y *= -1;
}
setInterval(gameloop, 12);
