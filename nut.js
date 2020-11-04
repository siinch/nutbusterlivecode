class Nut {

  constructor (positionIn, speedIn, radiusIn, colorIn) {
    this.position = positionIn;
    this.speed = speedIn;
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

  move () {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // check border collision
    if(
      this.position.x + this.radius > Canvas.canvas.width ||
      this.position.x - this.radius < 0
    )
    this.speed.x *= -1;

    if(
      this.position.y + this.radius > Canvas.canvas.height ||
      this.position.y - this.radius < 0
    )
    this.speed.y *= -1;
  }

}
