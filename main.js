console.log("Hello from main");


let context = Canvas.canvas.getContext("2d");
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.fillStyle = "white";
context.fill();

context = Canvas.canvas.getContext("2d");
context.beginPath();
context.arc(700, 300, 80, 0, 2 * Math.PI);
context.fillStyle = "white";
context.fill();
