class Nut {

  static nuts = [];
  static createNewInterval = 5000;
  static createNewTimer = 0;
  static maxRadius = 40;
  static minRadius = 15;

  constructor (positionIn, speedIn, radiusIn, colorIn) {
    this.position = positionIn;
    this.speed = speedIn;
    this.radius = radiusIn;
    this.color = colorIn;
    this.points = Math.ceil(((Math.abs(speedIn.x) + Math.abs(speedIn.y)) * Score.modifier) / radiusIn) ;
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
    Nut.createNewInterval = 1500 * (Math.pow(1.06, -0.01*Score.score)) + 500;

  }

  static createRandom() {
    let offset = Nut.maxRadius + 5;
    new Nut(
      {x: Utility.randomInt(offset, Canvas.width-offset),
        y: Utility.randomInt(offset, Canvas.height-offset)}, // position
      {x: Utility.randomFloat(-3, 3), y: Utility.randomFloat(-3, 3)}, // speed
      Utility.randomInt(Nut.minRadius, Nut.maxRadius), // radius
      Utility.randomColor(50, 255)
    );
  }

  static removeClicked(mousePos) {
    let notClicked = [];

    for (let nut of Nut.nuts) {
      if(Utility.distance(nut.position, mousePos) > nut.radius) {
        notClicked.push(nut);
      }
      else {
        Score.score += nut.points;
      }
    }

    Nut.nuts = notClicked;
  }

}

Subject.mousedown.register(Nut.removeClicked);
