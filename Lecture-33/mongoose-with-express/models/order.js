const mongoose = require('mongoose');


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

module.exports = Order;