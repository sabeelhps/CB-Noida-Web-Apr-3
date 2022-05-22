// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (initialization; condition; updatation){
//     // work 
// }

// let num;

// for (num = 1; num <= 10; num = num + 1){
//     console.log(num);
// }



// let start = 100;

// for (let i = start; i >= 10; i = i - 10){
//     console.log(i);
// }



const sentence = 'The white fox jumps over a white lazy dog';

const temp = sentence.split(" ");

// console.log(temp);
const ans = [];

for (let i = 0; i < temp.length; i++){
    let word = temp[i];
    let reversedWord = word.split("").reverse().join("");
    // console.log(reversedWord);
    ans.push(reversedWord);
}

console.log(ans.join(" "));

