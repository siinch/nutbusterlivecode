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

  if(Nut.nuts.length > 9 ) {
    Subject.mousedown.unregister(Nut.removeClicked);
  }
}
setInterval(gameloop, Canvas.refreshRate);

function onMouseDown(mousePos){
  console.log(mousePos);
}

Subject.mousedown.register(onMouseDown);
