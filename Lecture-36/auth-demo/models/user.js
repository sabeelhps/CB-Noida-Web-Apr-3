const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required:true
    },
    email: {
        type: String,
        required:true  
    },
    hash: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('User', userSchema);