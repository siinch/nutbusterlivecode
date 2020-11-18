class Canvas {

  static canvas = document.createElement("canvas");
  static refreshRate = 12;
  static width = 800;
  static height = 400;

  constructor () {
    Canvas.canvas.height = Canvas.height;
    Canvas.canvas.width = Canvas.width;
    Canvas.canvas.style.border = "5px solid gray";

    Canvas.canvas.addEventListener('mousedown', function(evt) {
        var mousePos = Canvas.getMousePos(evt);
        //console.log(mousePos);
        Subject.mousedown.notify(mousePos);
      }, false);

    Canvas.canvas = document.body.appendChild(Canvas.canvas);

  }

  static getMousePos(evt) {
    var rect = Canvas.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left - 4, // account for border size
      y: evt.clientY - rect.top - 4
    };
  }

  static fill() {
    var context = Canvas.canvas.getContext("2d");
    context.beginPath();
    context.rect(0, 0, Canvas.canvas.width, Canvas.canvas.height);
    context.fillStyle = "black";
    context.fill();
  }

}
