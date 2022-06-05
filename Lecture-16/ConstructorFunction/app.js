


// function fun() {
//     // console.log(this);
//     this.a = 99;
//     // window.a = 99;
// }

// fun();


function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new Person('Kartik', 23);


// const arr1 = [];

function enque(num) {
    arr.push(num);
}

function deque() {
    arr.shift();
}

function size() {
    console.log(`size of the queue is ${arr.length}`);
}

// function front() {
//     if (arr.length>0) {
//         console.log(arr[0]);
//     } else {
//         console.log(`size of queue is zero`);
//     }
// }

// enque(1)
// enque(2)
// enque(3)
// enque(4)
// deque();
// size();
// front();


// function Queue() {
//     this.Q = [];
// }

// Queue.prototype.enque=function(num) {
//     this.Q.push(num);
// }
// Queue.prototype.deque=function () {
//     this.Q.shift();
// }

// const q1 = new Queue();


// const q2 = new Queue();



