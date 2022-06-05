

// class Car{
//     constructor(name,price,color) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//     }

//     getColor() {
//         console.log(`Color : ${this.color}`);
//     }

//     // getter and setter

//     get getPrice() {
//         return this.price;
//     }

//     set setPrice(newPrice) {
//         if (newPrice < 0) {
//             this.price = 0;
//         } else {
//             this.price = newPrice;
//         }
//     }

//     static print() {
//         console.log('I am a static method');
//     }

// }



// const c1 = new Car('Ferrari', 100, 'Black');
// const c2 = new Car('BMW', 200, 'Blue');








// ----------------static method demo-----


// class Point{
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     get getX() {
//         return this.x;
//     }

//     get getY() {
//         return this.y;
//     }

//     set setX(newX) {
//         this.x = newX;
//     }

//     set setY(newY) {
//         this.y=newY
//     }

//     static calEuclieanDist(p1,p2) {
//         return Math.hypot((p1.y - p2.y), (p1.x - p2.x));
//     }

// }



// const p1 = new Point(2, 3);
// const p2 = new Point(4, 5);

