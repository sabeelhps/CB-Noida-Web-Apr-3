const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pizza-db')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log('Something went wrong');
        console.log(err);
    });


const orderSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: Number,
    isVeg: Boolean
});

const Order = mongoose.model('Order', orderSchema);

// const farmHouseOrder = new Order({ name: 'FarmHouse', price: 200, qty: 4, isVeg: true });

// // console.log(cornPizzaOrder);

// farmHouseOrder.save()
//     .then((pizza) => console.log(pizza))


