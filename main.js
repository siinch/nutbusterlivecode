console.log("Hello from main");
new Canvas(); // initialize the canvas

// make the game loop
function gameloop () {
  Canvas.fill();
  Nut.behave();
}
setInterval(gameloop, Canvas.refreshRate);
