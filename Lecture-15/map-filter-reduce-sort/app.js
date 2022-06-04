

// -------------------------map-------------------------

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function square(num) {
    return num ** 2;
}

// const squareNums = nums.map(square);
const squareNums = nums.map(num => num ** 2);

// console.log(nums);
// console.log(squareNums);


const cubeNums = nums.map((num) => num ** 3);

// console.log(cubeNums);

const squareRootNums = nums.map((num) => Math.sqrt(num));
// console.log(squareRootNums);


const cubeRootNums = nums.map((num, idx, arr) => {
    // console.log(idx);
    return Math.cbrt(num);
})

// console.log(cubeRootNums);


// --------------------------------------filter----------


function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
    // return num % 2 === 0;
}

const evenNums = nums.filter(isEven);

// console.log(evenNums);


// -----------------------------------reduce----------------


// const arr = [1, 2, 3, 4, 5];

// const totalSum = arr.reduce((acc, curr) => {
//     return acc + curr;
// });

// console.log(totalSum);


// const cart = [
//     {
//         name: 'Iphone',
//         qty: 2,
//         price: 100
//     },
//     {
//         name: 'Camara',
//         price: 10,
//         qty: 3,
//     },
//     {
//         name: 'Watch',
//         price: 20,
//         qty: 1
//     }
// ];

// const totalAmount = cart.reduce((acc, item) => { 
//     return acc + item.price * item.qty;
// }, 0);

// console.log(totalAmount);


// ---------------------------sort------------

// const arr = [1, 2, 10, 11, 12, 99, 3, 100];

// console.log(arr.sort((a, b) => {
//     return a - b;
// }));


