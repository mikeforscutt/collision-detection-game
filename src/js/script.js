const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 400;
let keys = {};

var player = new Box({
  X: 10,
  y: 10,
  width: 50,
  height: 50,
  color: "#53D3D1",
  speed: 5,
});

var food = new Box({
  x: Math.floor(Math.random() * (canvas.width - 25)),
  y: Math.floor(Math.random() * (canvas.height - 25)),
  width: 25,
  height: 25,
  color: "#FEB249",
});
