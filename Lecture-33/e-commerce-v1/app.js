const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/shopping-app-noida-apr-3')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
    res.send('Home Route');
});

app.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.render('products/index',{products});
});



const port = 3000;

app.listen(port,()=>{
  console.log(`server started at port ${port}`);
});