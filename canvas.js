class Canvas {

  static canvas = document.createElement("canvas");

  constructor () {
    Canvas.canvas.height = 400;
    Canvas.canvas.width = 800;
    Canvas.canvas.style.border = "5px solid gray";
    Canvas.canvas = document.body.appendChild(Canvas.canvas);
  }

}

new Canvas();
