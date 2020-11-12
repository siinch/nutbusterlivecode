class Mouse {

  constructor () {
    Canvas.canvas.addEventListener('mousedown', function(evt) {
        var mousePos = Mouse.getMousePos(evt);
        console.log(mousePos);
        if(Nut.nuts.length < 10)
          Nut.removeClicked(mousePos);
      }, false);
  }

  static getMousePos(evt) {
    var rect = Canvas.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left - 4, // account for border size
      y: evt.clientY - rect.top - 4
    };
  }

}
