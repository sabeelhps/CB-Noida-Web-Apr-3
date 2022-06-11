// class Aeroplane{
    
//     constructor(r, c) {
//         this.seats = [];
//         this.r = r;
//         this.c = c;
//         for (let i = 0; i < this.r; i++){
//             const temp = [];
//             for (let j = 0; j < this.c; j++){
//                 temp.push('O');
//             }
//             this.seats.push(temp);
//         }
//         console.log(this.seats);
//     }

//     allocateSeats(noOfSeats) {

//         const tickets = [];

//         for (let i = 0; i < this.r; i++){
//             for (let j = 0; j < this.c; j++){
//                 if (this.seats[i][j] === 'O') {
//                     tickets.push(`${i}_${j}`);
//                     noOfSeats--;
//                     this.seats[i][j] = 'X';
//                     if (noOfSeats === 0) {
//                         break;
//                     }
//                 }
//             }
//             if (noOfSeats === 0) {
//                 break;
//             }
//         }

//         if (noOfSeats === 0) {
//             console.log('All Tickets Booked Successfully');
//             console.log(tickets);
//         } else {
//             console.log(tickets);
//         }
      
//     }
// }


// const airIndia = new Aeroplane(3, 3);
// airIndia.allocateSeats(5);
// airIndia.allocateSeats(6);



class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get getPrice() {
        return this.price;
    }
}


class RacingCar extends Car{
    constructor(name,price,color,isDiscBrake) {
        super(name, price);
        this.color = color;
        this.isDiscBrake = isDiscBrake;
    }
}

const c1 = new Car('BMW', 100);
const r1 = new RacingCar('Ferrari', 200, 'red',true);



