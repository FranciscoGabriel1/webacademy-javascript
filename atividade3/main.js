// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Modelando um quadrado
function Square(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
  this.collided = false;
}

// Desenhando um quadrado
Square.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
};

// Atualizando a posição do quadrado
Square.prototype.update = function () {
  if (this.x + this.size / 2 >= width || this.x - this.size / 2 <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size / 2 >= height || this.y - this.size / 2 <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

// Função para detectar colisão entre dois quadrados
function isColliding(square1, square2) {
  return (
    square1.x - square1.size / 2 < square2.x + square2.size / 2 &&
    square1.x + square1.size / 2 > square2.x - square2.size / 2 &&
    square1.y - square1.size / 2 < square2.y + square2.size / 2 &&
    square1.y + square1.size / 2 > square2.y - square2.size / 2
  );
}

let squares = [];

while (squares.length < 25) {
  let size = random(10, 30);
  let square = new Square(
    random(size, width - size),
    random(size, height - size),
    random(-3, 3),
    random(-3, 3),
    `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
    size
  );

  let collides = false;
  for (let i = 0; i < squares.length; i++) {
    if (isColliding(square, squares[i])) {
      collides = true;
      break;
    }
  }

  if (!collides) {
    squares.push(square);
  }
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].collided) {
      squares[i].color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
    }
    squares[i].draw();
    squares[i].update();
    squares[i].collided = false;
  }

  for (let i = 0; i < squares.length; i++) {
    for (let j = i + 1; j < squares.length; j++) {
      if (isColliding(squares[i], squares[j])) {
        squares[i].collided = true;
        squares[j].collided = true;
      }
    }
  }

  requestAnimationFrame(loop);
}

loop();
