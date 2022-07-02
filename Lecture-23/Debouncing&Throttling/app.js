const input = document.querySelector('input');








let count = 0;

function getData() {
    console.log('Fetching Data', count++);
}
// Debouncing

function debouncing(func, delay) {
    let timer;
    return function () {
        clearInterval(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    }
}

// input.addEventListener('keypress',getData);
const betterFunction = debouncing(getData, 300);
// console.log(betterFunction);
input.addEventListener('keypress', betterFunction);


function add(x, y) {
    return x + y;
}

const res = add(1, 2);