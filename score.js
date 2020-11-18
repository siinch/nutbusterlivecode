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

  static submit () {
    let url ="http://localhost:3001";
    fetch(url + "/insert/" + prompt("Name") + "/" + Score.score)
    .then(response => response.json())
    .then(data => {
      alert("Inserted highscore" + JSON.stringify(data));
    }
    );
  }

}
