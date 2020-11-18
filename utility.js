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

  static distance (aPos, bPos) {
    return Math.sqrt(
      Math.pow((aPos.x - bPos.x), 2)
      +
      Math.pow((aPos.y - bPos.y), 2)
    );
  }

  static reload () {
    setTimeout("location.reload(true);", 1000);
  }

}
