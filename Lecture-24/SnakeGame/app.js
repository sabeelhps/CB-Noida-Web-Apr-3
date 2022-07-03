const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';

const H = 600;
const W = 900;
const cs = 67;

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

            if (i === this.cells.length - 1) {
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

        const nextX = headX + 1;
        const nextY = headY;

        this.cells.push({
            x: nextX,
            y: nextY
        });

        this.cells.shift();

        console.log(this.cells);

    }

}

const snake = new Snake();



function init() {
    snake.createSnake();
    snake.drawSnake();
}


function draw() {
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}

function gameLoop() {
    update();
    draw();
}


init();

const id = setInterval(gameLoop, 100);