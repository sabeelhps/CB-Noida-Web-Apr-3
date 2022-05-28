

// const a = 30;
// const b = 20;
// const res = a + b;
// console.log(res);


function sum(a, b) { //name of the function is sum - function definition
    // body of the function
    const res = a + b;
    console.log(res);
}


// sum(20,40) // function call

// ..
// ..
// .
// 10000 lines of code


// sum(50, 60);

// ..
// ....


// sum(100, 200);



// function sayHello() {
//     console.log("Hello");
// }


// sayHello();


// function squareRoot(num) {
//     const res = Math.sqrt(num);
//     return res;
// }

// let ans = squareRoot(36);

// console.log(ans);


// function fun(a, b) { // a and b are function parameters
    
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }

//     return "Invalid Input";
// }

// console.log(fun(1, 2)); // 1 and 2 are the arguments to the fun function
// console.log(fun("Hello", "World"));
// console.log(fun(true, false));
// console.log(fun([], 1));
// console.log(fun());
// console.log(fun("Hello", 1));


// 1.-------

// Cube of a number 

// function cube(num) {
//     return num ** 3;
// }

// console.log(cube(2));


// 2.------- 


function factorial(num) {

    if (num == 1 || num == 0) {
        return 1;
    }

    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));


// 3.------- 

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(nCr(5, 5));


// 4.--- 

function isEven(num) {
    return num % 2 === 0;
}





