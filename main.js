console.log("Hello from main");

let myNut = new Nut(
  {x: 200, y: 200}, // position
  {x: 2, y: 2}, // speed
  30, // radius
  "white" // color
);

function gameloop () {
  Canvas.fill();
  myNut.draw();
  myNut.move();
}
setInterval(gameloop, 12);
