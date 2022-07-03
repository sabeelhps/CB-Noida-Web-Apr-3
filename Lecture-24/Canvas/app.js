const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'red';



let init_x = 0;
let init_y = 0;

const cs = 80;




function init() {
    
}

function draw() {
    pen.clearRect(0, 0, 800, 500);
    pen.fillRect(init_x, init_y, cs, cs);
}

function update() {
    init_x = init_x + cs;
}


function gameLoop() {
    draw();
    update();
}



const id = setInterval(gameLoop, 200);