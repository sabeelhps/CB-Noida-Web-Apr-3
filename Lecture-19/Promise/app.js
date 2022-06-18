
// const names = ['Vivek', 'Garvit', 'Ajay'];

// function display() {
//     setTimeout(() => {
//         let str = "";
//         for (let name of names) {
//             str+=`<li>${name}</li>`
//         }
//         // console.log(str);
//         document.write(str);
//     }, 1000);
// }

// function addPerson(newName,cb) {
//     setTimeout(() => {
//         names.push(newName);
//         cb();
//     }, 2000);
// }

// addPerson('Kartik', display);

// // ...Million of lines
// // ..

// console.log("END")
// console.log("END")
// console.log("END")
// console.log("END")
// console.log("END")
// console.log("END")
// console.log("END")
// console.log("END")




// ------------------------------------Promises---------


// create a promise

// const p = new Promise((resolve, reject) => {
//     const randomNum = Math.floor(Math.random() * 10);
//     console.log(randomNum);
//     if (randomNum % 2 === 0) {
//         resolve(randomNum);
//     } else {
//         reject("Not a Even number!!!");
//     }
// });


// // Consuming a promise 

// p.then((num) => {
//     console.log('Inside Resolve')
//     console.log(num);
// })
// .catch((err) => {
//     console.log("Inside Reject");
//     console.log(err);
// });


// ------------------------IIFEs



(function () {
    var x = 20;
    var y = 30;
    console.log('Inside IIFEs');
})();











