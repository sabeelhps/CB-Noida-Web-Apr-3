const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');


// Routes 
const productRoutes = require('./routes/productRoutes');


mongoose.connect('mongodb://localhost:27017/shopping-app-noida-apr-3')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



const sessionConfig = {
  secret: 'weneedabettersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    httpOnly: true,
    expires: Date.now() + 1000* 60 * 60 * 24 * 7 * 1,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 1,
  }
}


app.use(session(sessionConfig));
app.use(flash());


app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})



app.get('/', (req, res) => {
    res.send('Home Route');
});


app.use(productRoutes);


const port = 3000;

app.listen(port,()=>{
  console.log(`server started at port ${port}`);
});