const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.Array
    }
});


module.exports = mongoose.model('Order', orderSchema);