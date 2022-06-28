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

function Box(options) {
  this.x = options.x || 10;
  this.y = options.y || 10;
  this.width = options.width || 40;
  this.height = options.height || 50;
  this.color = options.color || "#000000";
  this.speed = options.speed || 5;
  this.direction = options.direction || "right";
  this.collideWith = function (otherobject) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobject.x;
    var otherright = otherobject.x + otherobject.width;
    var othertop = otherobject.y;
    var otherbottom = otherobject.y + otherobject.height;
    var collision = true;
    if (
      mybottom <= othertop ||
      mytop >= otherbottom ||
      myright <= otherleft ||
      myleft >= otherright
    ) {
      collision = false;
    }
    return collision;
  };
}

function drawBox(box) {
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, box.width, box.height);
}

drawBox(player);
drawBox(food);
