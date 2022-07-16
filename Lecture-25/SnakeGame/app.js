const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';

const H = 600;
const W = 1200;
const cs = 67;
let score = 0;


let randomFood = null;

class Snake{

    constructor() {
        this.init_len = 5;
        this.direction = 'right';
        this.cells = [];
    }

    createSnake() {
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({
                x: i,
                y: 0
            })
        }
    }

    drawSnake() {
        for (let i = 0; i < this.cells.length; i++) {
            const cell = this.cells[i];

            if (i === this.cells.length - 1) { //this condition is added to mantain red color for the head of the snake
                pen.fillStyle = 'red';
                pen.fillRect(cell.x * cs, cell.y * cs, cs-2, cs-2);
            } else {
                pen.fillStyle = 'yellow';
                pen.fillRect(cell.x * cs, cell.y * cs, cs-2, cs-2);
            }
        }
    }

    updateSnake() {
        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;


        let nextX;
        let nextY;

        if (headX === randomFood.x && headY === randomFood.y) { //collision condition for snake and food
            randomFood = getRandomFood();
            score++;
        } else {
            this.cells.shift(); //this removes the cell from the tail
        }

        if (this.direction === 'right') {
            nextX = headX + 1;
            nextY = headY;
            if (nextX * cs > W) {
                clearInterval(id);
            }
        }
        else if (this.direction === 'up') {
            nextX = headX;
            nextY = headY - 1;
        }
        else if (this.direction === 'left') {
            nextX = headX - 1;
            nextY = headY;
        }
        else if (this.direction === 'down') {
            nextX = headX;
            nextY = headY + 1;
        }

        this.cells.push({ //adding a new cell at the head of snake
            x: nextX,
            y: nextY
        });

      
    }

    changeSnakeDirection(newDirection) {
        this.direction = newDirection;
    }

}

const snake = new Snake();



function init() {
    snake.createSnake();
    snake.drawSnake();
    randomFood = getRandomFood();

    function keypressed(e) {
        if (e.key === 'ArrowDown') {
            snake.changeSnakeDirection('down');
        }
        else if (e.key === 'ArrowUp') {
            snake.changeSnakeDirection('up');
        }
        else if (e.key === 'ArrowLeft') {
            snake.changeSnakeDirection('left');
        }
        else if (e.key === 'ArrowRight') {
            snake.changeSnakeDirection('right');
        }
    }


    document.addEventListener('keydown', keypressed);
}


function draw() {
    pen.clearRect(0, 0, W, H); //removing older frame/snake form the canvas
    pen.font = '40px serif';
    pen.fillText(`Score ${score}`, 50, 50);
    pen.fillStyle = 'blue';
    pen.fillRect(randomFood.x*cs, randomFood.y*cs, cs, cs);
    pen.fillStyle = 'yellow';
    snake.drawSnake(); //drawing the updated snake
}

function update() {
    snake.updateSnake();
}

function gameLoop() {
    update();
    draw();
}

function getRandomFood() {
    const foodX = Math.floor(Math.random() * (W - cs)/cs);
    const foodY = Math.floor(Math.random() * (H - cs)/cs);

    const food = {
        x: foodX,
        y:foodY
    }

    return food;
}


init();

const id = setInterval(gameLoop, 100);