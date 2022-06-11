



// function fun() {
//     console.log('Inside Fun');
// }

// fun();

// window.fun();


// const person = {
//     name: this, //window
//     age: 23,
//     sayName:  function() {
//         console.log(this); 
//     },
//     obj: {
//         print: function () {
//             console.log(this === person.obj);
//             console.log("Inside print");
//         }
//     }
// }

// // person.sayName();

// person.obj.print();

// ------------------------------Explicit Binding


// function fun(name, age) {
//     console.log(name);
//     console.log(age);
//     console.log(this);
// }

// const a = {
//     l: 10,
//     m:true
// }

// fun.call(a, 'Kartik', 23);



// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
  
// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
// }

// function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = 'toy';
// }


// const cheese = new Food('feta', 5);
// const toy = new Toy('Car', 100);


// ------------------------------bind------------------------



function fun(name,age) {
    console.log(this);
    console.log(name);
    console.log(age);
}

const b = {
    l: 10,
    m:true
}


// fun.call(b, 'Kartik', 23); // This will invoke the fun function immediately

const f = fun.bind(b);

// ..
// .....
// ...
f('Kartik', 24);









