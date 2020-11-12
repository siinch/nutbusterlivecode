console.log("Hello from main");
new Score();
new Canvas(); // initialize the canvas
new Mouse();

// make the game loop
function gameloop () {
  Canvas.fill();
  Nut.behave();
  Score.update();
}
setInterval(gameloop, Canvas.refreshRate);
