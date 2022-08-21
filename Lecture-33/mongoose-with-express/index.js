const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Order = require('./models/order');



mongoose.connect('mongodb://localhost:27017/pizza-db')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log('Something went wrong');
        console.log(err);
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/orders', async (req, res) => {
    const orders = await Order.find({});
    res.status(200).json(orders);
});


app.get('/search', async (req, res) => {
    const { q } = req.query;
    const orders = await Order.find({
        name: {
            $regex: `^${q}`,
            $options: 'i'
        }
    });

    res.json(orders);
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});