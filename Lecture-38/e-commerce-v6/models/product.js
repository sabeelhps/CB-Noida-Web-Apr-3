const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    img: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});



const Product = mongoose.model('Product', productSchema);

module.exports = Product;