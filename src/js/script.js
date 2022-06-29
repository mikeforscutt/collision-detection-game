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
      speed: 5,
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

function draw() {
  // shape.Triangles.forEach(drawTri);

  // let value = shape.Rectangles;
  // console.log(value);

  // if (shape.Rectangles.collideWith(shape.Rectangle)) {
  //   ctx.font = "24px sans-serif";
  //   ctx.fillStyle = "#002447";
  //   ctx.fillText("COLLISION DETECTED", 50, 50);
  // } else {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   shape.Rectangles.forEach(drawBox);
  // }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  shape.Rectangles.forEach(myFunction);

  function myFunction(item, index, arr) {
    let id = index;
    console.log(id);
  }
}

function drawBox(box) {
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, box.width, box.height);
}
// function drawTri(tri) {
//   // Draw triangle
//   ctx.beginPath();
//   ctx.lineTo(0, 0);
//   ctx.lineTo(tri.x, tri.x);
//   ctx.lineTo(0, tri.y);
//   ctx.closePath();
//   // Fill color
//   ctx.fillStyle = this.fillColor;
//   ctx.fill();
// }

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
