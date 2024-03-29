const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://localhost:27017/food-app-noida-apr')
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));



app.use(cors({
  origin:['http://localhost:3001']
}))

const foodApi = require('./apis/foodApi');


app.use(foodApi);



app.listen(3000,()=>{
  console.log('server started at port 3000');
});