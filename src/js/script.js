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
  constructor(options) {
    // Settings
    this.x = options.x;
    this.y = options.y;
    this.fillColor = options.fillColor;
  }
}

// Class that holds a collection of Rectangles and properties and functions for the group
class Shapes {
  constructor() {
    this.Rectangles = [];
    this.Triangles = [];
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
  get numberOfRectangles() {
    return this.Rectangles.length;
  }
  newTriangle() {
    let t = new Triangle({
      x: Math.floor(Math.random() * (canvas.width - 25)),
      y: Math.floor(Math.random() * 350),
      fillColor: "#FEB249",
    });
    this.Triangles.push(t);
    return t;
  }
  get allTriangles() {
    return this.Triangles;
  }
  get numberOfTriangles() {
    return this.Triangles.length;
  }
}

let shape = new Shapes();
shape.newRectangle();
shape.newRectangle();
shape.newRectangle();
shape.newTriangle();
shape.newTriangle();
shape.newTriangle();

console.log(shape.allTriangles);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shape.Rectangles.forEach(drawBox);
  shape.Triangles.forEach(drawTri);
}

function drawBox(box) {
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, box.width, box.height);
}
function drawTri(tri) {
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

var form = document.getElementById("user_form");
function handleForm(event) {
  event.preventDefault();

  let selectedShape = document.getElementById("shapes").value;

  if (selectedShape === "square") {
    shape.newRectangle();
    draw();
  } else if (selectedShape === "triangle") {
    shape.newTriangle();
    draw();
  } else {
  }
}
form.addEventListener("submit", handleForm);

draw();
