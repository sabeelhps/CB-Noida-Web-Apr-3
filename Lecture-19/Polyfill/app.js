const radiusArr = [2, 1, 4, 6, 3];


// function calculateArea(radiusArr) {
//     let output = [];
//     for (let i = 0; i < radiusArr.length; i++){
//         output.push(Math.PI * radiusArr[i] * radiusArr[i]);
//     }
//     return output;
// }


// function calculateCircumference(radiusArr) {
//     let output = [];
//     for (let i = 0; i < radiusArr.length; i++){
//         output.push(2*Math.PI*radiusArr[i]);
//     }
//     return output;
// }

// function calculateDiameter(radiusArr) {
//     let output = [];
//     for (let i = 0; i < radiusArr.length; i++){
//         output.push(2*radiusArr[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radiusArr));
// console.log(calculateCircumference(radiusArr));
// console.log(calculateDiameter(radiusArr));


// ---------------------------------------------------------


const area = radius => Math.PI * radius * radius;
const circumference = radius => 2 * Math.PI * radius;
const diameter = radius => 2 * radius;

Array.prototype.calculate = function(logic) {
    let output = [];
    for (let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

// radiusArr.map(area);
// calculate(radiusArr, area);
// console.log(radiusArr.calculate(area));



// console.log(calculate(radiusArr, diameter));
// console.log(calculate(radiusArr, area));
// console.log(calculate(radiusArr, circumference));



// -------------------------------------------

const arr = [1, 2, [3, 4], 5, [6, 7, [8, 9]], 10, 11, [12, [13, 14]], 15];

// console.log(arr.flat());
// function flatArr(arr) {
//     let output = [];
//     for (const element of arr) {
//         if (Array.isArray(element)) {
//             output.push(...element);
//         } else {
//             output.push(element);
//         }
//     }

//     return output;
// }

Array.prototype.flatArr = function() {
    let output = [];
    for (const element of this) {
        if (Array.isArray(element)) {
            output.push(...element);
        } else {
            output.push(element);
        }
    }

    return output;
}

console.log(arr.flatArr());

