class Canvas {

  static canvas = document.createElement("canvas");
  static refreshRate = 12;
  static width = 800;
  static height = 400;

  constructor () {
    Canvas.canvas.height = Canvas.height;
    Canvas.canvas.width = Canvas.width;
    Canvas.canvas.style.border = "5px solid gray";
    Canvas.canvas = document.body.appendChild(Canvas.canvas);
  }

  static fill() {
    var context = Canvas.canvas.getContext("2d");
    context.beginPath();
    context.rect(0, 0, Canvas.canvas.width, Canvas.canvas.height);
    context.fillStyle = "black";
    context.fill();
  }

}
