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
        data.highscores.sort((a, b) => {return parseInt(b.score) - parseInt(a.score)});
        for (let highscore of data.highscores)
          Scoreboard.display.innerHTML += highscore.name + ": " + highscore.score + "<br>";
      }
    );
  }

}
