
// SPREAD OPERATOR

const arr1 = [1, 2, 3];
const arr2 = [10, 20, ...arr1, 40, 50];

const car = {
    name: "BMW",
    price:1000,
}

const racingCar = {
    ...car,
    color: 'Red',
    isDiscBrake:true
}

// console.log(Math.max(...arr2));
// console.log(Math.min(...arr2));

//----------------------------------------- REST PARAMETER

function addition(a, b, c=10) {
    return a + b + c;
}

// console.log(addition(1, 2, 3));
// console.log(addition(1, 2));
// console.log(addition(2));


function sum(x, y, ...nums) {
    // console.log(arguments);
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sum(1, 2, 3, 6, 7, 8, 9, 10, 11, 12));


// -----------------------------------------------------

// DESTRUCTRING

const colors = ['Green', 'Red', 'Orange', 'White', 'Purple'];

// const firstColor = colors[0];
// const secondColor = colors[1];

const [firstColor, secondColor='Default Color'] = colors;

// console.log(firstColor);
// console.log(secondColor);


const person = {
    lastName: 'Mathur',
    age: 24,
    firstName: 'Kartik',
}


// const firstName = person['firstName'];
// const age = perosn['age'];

const { firstName:name='Anonymous', age } = person;

console.log(name);
console.log(age);


