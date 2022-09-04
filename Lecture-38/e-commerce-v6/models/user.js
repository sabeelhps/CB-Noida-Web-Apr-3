const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');



const userSchema = new mongoose.Schema({
    email: {
        type:String
    },
    cart: [
        {
            _id: { id: false },
            cartProductId:mongoose.Schema.Types.ObjectId,
            name: String,
            price: Number,
            img:String,
            qty: {
                type: Number,
                default:1
            }
        }
    ],
    userType: {
        type: String,
        enums: ['seller', 'buyer'],
        default:'buyer'
    }
},{timestamps:true});

//  Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.
userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);

module.exports = User;