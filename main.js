console.log("Hello from main");

let gameinterval;
new Button("Start Game", function(){
  gameinterval = setInterval(gameloop, Canvas.refreshRate);
    let music = new Audio("assets/music.mp3");
    music.loop = true;
    music.play();
    this.remove();
});
document.write("<br>")
new Score();
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
    clearInterval(gameinterval);

    if(prompt("Submit score? Type yes or no") === "yes" )
      Score.submit();

    Utility.reload();
  }
}
