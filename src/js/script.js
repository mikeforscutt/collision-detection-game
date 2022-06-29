const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

// An individual rectangle. Holds properties and behavior for one
class Rectangle {
  constructor(options) {
    this.x = options.x || 10;
    this.y = options.y || 10;
    this.width = options.width || 40;
    this.height = options.height || 50;
    this.color = options.color || "#000000";
    this.speed = options.speed || 5;
  }
}
class Triangle {
  constructor(x = 0, y = 0, fillColor = "#000") {
    // Settings
    this.x = x;
    this.y = y;
    this.fillColor = fillColor;
    // Setup everything once parameters are setup
    this.setup();
  }
  setup() {
    // Move context to position
    ctx.translate(this.x, this.y);
    // Draw from new context position
    this.draw();
    // Restore context back to initial position
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  draw() {
    // Draw triangle
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.lineTo(80, 80);
    ctx.lineTo(0, 160);
    ctx.closePath();
    // Fill color
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}
// Class that holds a collection of Rectangles and properties and functions for the group
class Rectangles {
  constructor() {
    this.Rectangles = [];
  }
  // create a new rectangle and save it in the collection
  newRectangle() {
    let s = new Rectangle({
      x: Math.floor(Math.random() * (canvas.width - 25)),
      y: Math.floor(Math.random() * 350),
      width: 50,
      height: 50,
      color: "#FEB249",
    });
    this.Rectangles.push(s);
    return s;
  }
  get allRectangles() {
    return this.Rectangles;
  }
  // this could include summary stats like average score, etc. For simplicy, just the count for now
  get numberOfRectangles() {
    return this.Rectangles.length;
  }
}
class Triangles {
  constructor() {
    this.Triangles = [];
  }
  // create a new rectangle and save it in the collection
  newTriangle() {
    let t = new Triangle({});
    this.Rectangles.push(s);
    return s;
  }
}

let game = new Rectangles();
game.newRectangle();
game.newRectangle();
game.newRectangle();

console.log(game.allRectangles);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.Rectangles.forEach(drawBox);
}

function drawBox(box) {
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, box.width, box.height);
}

var form = document.getElementById("user_form");
function handleForm(event) {
  event.preventDefault();
  game.newRectangle();
  draw();
}
form.addEventListener("submit", handleForm);

draw();
