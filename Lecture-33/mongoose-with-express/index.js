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


app.get('/', (req, res) => {
    res.render('index');
})






app.listen(3000,()=>{
  console.log('server started at port 3000');
});