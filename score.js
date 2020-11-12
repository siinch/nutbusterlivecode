class Score {

  static display = document.createElement("p");
  static score = 0;
  static text = "Score: ";
  static modifier = 500;

  constructor () {
    Score.display.innerHTML = Score.text + Score.score;
    Score.display = document.body.appendChild(Score.display);
  }

  static update () {
      Score.display.innerHTML = Score.text + Score.score;
  }

}
