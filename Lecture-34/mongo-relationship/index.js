const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));


const userSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 0
    },
    address: [
        {
            _id:{id:false},
            city: String,
            country: String
        }
    ]
});


const User = mongoose.model('User', userSchema);


async function createUser() {
    const vivek = new User({ name: 'Vivek', age: 23 });
    await vivek.save()
    console.log(vivek);
}


async function addAddress(id) {
    const user = await User.findById(id);
    // user.address.push({ city: 'Delhi', country: 'India' });
    // user.address.push({ city: 'Mumbai', country: 'India' });
    // user.address.push({ city: 'New York', country: 'USA' });
    user.address.push({ city: 'Tokyo', country: 'Japan' });

    await user.save();
    
    console.log('Successfully added all the address');
}


// createUser();

addAddress('6301cb5f3a5e46212b75c46a');

