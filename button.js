class Button {

  constructor (textIn, callback) {
    this.button = document.createElement("button");
    this.button.innerHTML = textIn;
    this.button.onclick = callback;
    this.button = document.body.appendChild(this.button);
  }

}
