class Button {

  constructor (textIn, callback) {
    this.button = document.createElement("button");
    this.button.innerHTML = textIn;
    this.button.addEventListener("click", callback);
    this.button.id = textIn;
    this.button = document.body.appendChild(this.button);
  }

}
