const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
let squares = [
  new Box({
    x: Math.floor(Math.random() * (canvas.width - 25)),
    y: Math.floor(Math.random() * 350),
    width: 50,
    height: 50,
    color: "#FEB249",
  }),
  new Box({
    x: Math.floor(Math.random() * (canvas.width - 45)),
    y: Math.floor(Math.random() * 350),
    width: 50,
    height: 50,
    color: "#000",
  }),
];
let keys = {};

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

function draw() {
  squares.forEach(drawBox);
}

var form = document.getElementById("user_form");
function handleForm(event) {
  event.preventDefault();
  draw();
}
form.addEventListener("submit", handleForm);
