class Nut {

  static nuts = [];
  static createNewInterval = 5000;
  static createNewTimer = 0;

  constructor (positionIn, speedIn, radiusIn, colorIn) {
    this.position = positionIn;
    this.speed = speedIn;
    this.radius = radiusIn;
    this.color = colorIn;
    Nut.nuts.push(this);
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

  static behave() {
    for (let nut of Nut.nuts) {
      nut.draw();
      nut.move();
    }

    if (Nut.createNewInterval < Nut.createNewTimer) {
      Nut.createNewTimer = 0;
      Nut.createRandom();
    }

    Nut.createNewTimer += Canvas.refreshRate;

  }

  static createRandom() {
    new Nut(
      {x: Utility.randomInt(10, Canvas.width-10),
        y: Utility.randomInt(10, Canvas.height-10)}, // position
      {x: Utility.randomFloat(-3, 3), y: Utility.randomFloat(-3, 3)}, // speed
      Utility.randomInt(15, 40), // radius
      "rgb("
      + Utility.randomInt(100, 255) + "," // red
      + Utility.randomInt(100, 255) + "," // green
      + Utility.randomInt(100, 255) + ")" // blue
    );
  }

}
