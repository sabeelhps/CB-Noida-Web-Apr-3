const input = document.querySelector('input');
let count = 0;

function apiCall() {
    console.log('Fetching Data', count++);
}
// Debouncing
function debouncing(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    }
}

// input.addEventListener('keypress',getData);
const betterFunction = debouncing(apiCall, 300);
// console.log(betterFunction);
// input.addEventListener('keypress', betterFunction);


// ------------------Throttling-------------------


function throttling(func, delay) {
    let prev = 0;
    return function () {
        const now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            func();
        }
    }
}


const betterThrottlingFunction = throttling(apiCall, 400);
input.addEventListener('keypress', betterThrottlingFunction);

