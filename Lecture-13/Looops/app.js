


// for (initilisation; condition; unpdatation){
//     work
// }


// for (let num = 1; num <= 10; num = num + 1){
//     console.log(num);
// }

// while (condition) {
    
// }


// let num = 1;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }


// Infinite Loops
// let i = 100;

// while (i < 200) {
//     console.log(i);
//     i = i - 20;
// }


// break and continue

// for (let i = 1; i <= 10; i++){
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }


// Nested Loops

// for (let i = 1; i <= 3; i++){
//     for (let j = 1; j <= 3; j++){
//         console.log(`i->${i},j->${j}`);
//         if (i === 2) {
//             break;
//         }
//     }
// }


const fruits = ['Apple', 'Mango', 'Orange'];

// console.log(fruits);

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].toLowerCase());
// }


// for-of loops 

// for (let fruit of fruits) {
//     console.log(fruit);
// }


// const cart = [
//     { name: 'Apple Watch', price: 100, qty: 2 },
//     { name: 'Iphone', price: 10, qty: 1 },
//     {name:'Drones',price:20,qty:3}
// ]

// let totalAmount = 0;


// for (let item of cart) {
//     // totalAmount = totalAmount + item.price * item.qty;
//     totalAmount += item.price * item.qty; 
// }

// console.log(`Total Amount : ${totalAmount}`);


const car = {
    name: 'BMW',
    price: 200,
    isDiscBrake:true
}

// console.log(car);


// for (let i in car) {
//     console.log(`${i}-->${car[i]}`);
// }


const product = {
    name: 'Iphone 12',
    price: 200,
    isAvailble: true,
    color: 'Black',
}


// console.log(product["name"])

// console.log(product.name);
// console.log(product["name"])

// for (let i in product) {
//     console.log(product[i]);
// }



// let n = 5;


// for (let row = 1; row <= n; row++){

//     let str = "";
//     for (let star = 1; star <= row; star++){
//         str += "* ";
//     }
//     console.log(str);
// }



// let str = "";

// for (let i = 1; i <= 5; i++){
//     str += "*";
//     console.log(str);
// }