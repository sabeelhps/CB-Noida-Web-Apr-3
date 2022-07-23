console.log('Hello World!');


const person = {
    name: 'Kartik',
    age:23
}

console.log(person);



const arr = [1, 2, 3];

arr.push('four');

console.log(arr);

const fruits = ['Apple', 'Mango', 'Gauava'];

const newFruits = fruits.map((fruit) => fruit.toLowerCase());

console.log(fruits);
console.log(newFruits);


// -----------------------

const nums = [1, 2, 2, 3, 3, 4, 5, 6];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums);