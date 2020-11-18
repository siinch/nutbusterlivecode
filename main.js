console.log("Hello from main");
new Score();
new Button("Submit", Score.submit);
new Button("Reload", Utility.reload);
document.write("<br>");
new Canvas(); // initialize the canvas
new Scoreboard();

// make the game loop
function gameloop () {
  if(Nut.nuts.length < 10 ) {
    Canvas.fill();
    Nut.behave();
    Score.update();
  }
  else {
    Subject.mousedown.unregister(Nut.removeClicked);
  }
}
setInterval(gameloop, Canvas.refreshRate);
