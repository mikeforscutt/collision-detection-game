const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let allItems = [];
// An individual rectangle. Holds properties and behavior for one
class Rectangle {
  constructor(options) {
    this.x = options.x || 10;
    this.y = options.y || 10;
    this.width = options.width || 50;
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

class Circle extends Rectangle {
  constructor(options) {
    super(options);
  }
}

// Class that holds a collection of Rectangles and properties and functions for the group
class Shape extends Rectangle {
  constructor(options) {
    super(options);
  }
}

function checkCollision(newRect) {
  let isCollision = false;

  for (var i = 0; i < allItems.length; i++) {
    let item = allItems[i];

    if (item.collideWith(newRect)) {
      isCollision = true;
      break;
    }

    /*
    // checking left-top
    if (
      item.x <= newRect.x &&
      newRect.x <= item.x + item.width &&
      item.y <= newRect.y &&
      newRect.y <= item.y + item.height
    ) {
      isCollision = true;
      break;
    }
    // checking right-top
    if (
      item.x <= newRect.x + newRect.width &&
      newRect.x + newRect.width <= item.x + item.width &&
      item.y <= newRect.y &&
      newRect.y <= item.y + item.height
    ) {
      isCollision = true;
      break;
    }
    // checking left-bottom
    if (
      item.x <= newRect.x &&
      newRect.x <= item.x + item.width &&
      item.y <= newRect.y + newRect.height &&
      newRect.y + newRect.height <= item.y + item.height
    ) {
      isCollision = true;
      break;
    }
    // checking right-bottom
    if (
      item.x <= newRect.x + newRect.width &&
      newRect.x + newRect.width <= item.x + item.width &&
      item.y <= newRect.y + newRect.height &&
      newRect.y + newRect.height <= item.y + item.height
    ) {
      isCollision = true;
      break;
    }
    */
  }

  if (isCollision) {
    alert("collision =========");
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  allItems.forEach(drawBox);
}

function drawBox(box) {
  ctx.fillStyle = box.color;

  // draw rectangle
  if (box instanceof Shape) {
    ctx.fillRect(box.x, box.y, box.width, box.height);
  }
  // draw circle
  if (box instanceof Circle) {
    ctx.beginPath();
    ctx.arc(box.x, box.y, box.width / 2, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}

var form = document.getElementById("user_form");
function handleForm(event) {
  event.preventDefault();

  let selectedShape = document.getElementById("shapes").value;

  if (selectedShape === "square") {
    // if checked square
    let shape = new Shape({
      x: Math.floor(Math.random() * (canvas.width - 25)),
      y: Math.floor(Math.random() * 350),
      width: 50,
      height: 50,
      color: "#FEB249",
      speed: 5,
    });

    checkCollision(shape);
    allItems.push(shape);

    draw();
  } else if (selectedShape === "triangle") {
    //shape.newTriangle();
    draw();
  } else {
    // if checked 'circle'
    let circle = new Circle({
      x: Math.floor(Math.random() * (canvas.width - 25)),
      y: Math.floor(Math.random() * 350),
      width: 50,
      height: 50,
      color: "#FE0049",
      speed: 5,
    });

    checkCollision(circle);
    allItems.push(circle);

    draw();
  }
}
form.addEventListener("submit", handleForm);
