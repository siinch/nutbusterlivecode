console.log("Hello from main");
new Score();
new Canvas(); // initialize the canvas
new Mouse();

// make the game loop
function gameloop () {
  if(Nut.nuts.length < 10 ) {
    Canvas.fill();
    Nut.behave();
    Score.update();
  }
}
setInterval(gameloop, Canvas.refreshRate);
