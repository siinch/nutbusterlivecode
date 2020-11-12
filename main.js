console.log("Hello from main");


function gameloop () {
  Canvas.fill();
  Nut.behave();
}
setInterval(gameloop, Canvas.refreshRate);
