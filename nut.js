class Nut {

  constructor (positionIn, radiusIn, colorIn) {
    this.position = positionIn;
    this.radius = radiusIn;
    this.color = colorIn;
  }

  draw () {
    let context = Canvas.canvas.getContext("2d");
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0, 2 * Math.PI
    );
    context.fillStyle = this.color;
    context.fill();
  }

}
