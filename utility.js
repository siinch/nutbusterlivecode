class Utility {

  constructor() {

  }

  static randomInt (min, max) {
    return Math.round(Math.random() * (max-min)) + min;
  }

  static randomFloat (min, max) {
    return Math.random() * (max-min) + min;
  }

}
