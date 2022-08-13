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
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength:20
    },
    price: {
        type: Number,
        min:[0,'Invalid Price']
    },
    qty: {
        type: Number,
        min:[0,'Invalid Quantity']
    },
    isVeg: {
        type: Boolean,
        default:true
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

// const farmHouseOrder = new Order({ name: 'FarmHouse', price: 200, qty: 4, isVeg: true });

// // console.log(cornPizzaOrder);

// farmHouseOrder.save()
//     .then((pizza) => console.log(pizza))


