console.log("Hello from main");
new Canvas(); // initialize the canvas
new Mouse();

// make the game loop
function gameloop () {
  Canvas.fill();
  Nut.behave();
}
setInterval(gameloop, Canvas.refreshRate);
