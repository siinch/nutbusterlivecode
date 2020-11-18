class Scoreboard {

  static display = document.createElement("p");

  constructor () {
    document.body.appendChild(Scoreboard.display);
    Scoreboard.display.innerHTML += "Highscores: <br>"
    let url ="http://localhost:3001";

    fetch(url + "/findAll")
    .then(response => response.json())
    .then(
      data => {
        data.highscores.sort(highscore => highscore.score);
        data.highscores.reverse();
        for (let highscore of data.highscores)
          Scoreboard.display.innerHTML += highscore.name + ": " + highscore.score + "<br>";
      }
    );
  }

}
