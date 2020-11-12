class Utility {

  constructor() {

  }

  static randomInt (min, max) {
    return Math.round(Math.random() * (max-min)) + min;
  }

  static randomFloat (min, max) {
    return Math.random() * (max-min) + min;
  }

  static randomColor (min, max) {
    return "rgb("
    + Utility.randomInt(min, max) + "," // red
    + Utility.randomInt(min, max) + "," // green
    + Utility.randomInt(min, max) + ")"; // blue
  }

}
